package Videoclub.service;

import Videoclub.dto.RentalDTO;
import Videoclub.entity.*;
import Videoclub.exception.BusinessException;
import Videoclub.exception.ResourceNotFoundException;
import Videoclub.repository.RentalRepository;
import Videoclub.repository.VideoGameCopyRepository;
import Videoclub.service.impl.RentalServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import static org.assertj.core.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

// @ExtendWith inyecta los @Mock en el @InjectMocks sin levantar Spring
@ExtendWith(MockitoExtension.class)
class RentalServiceImplTest {

    @Mock
    private RentalRepository rentalRepository;

    @Mock
    private VideoGameCopyRepository gameCopyRepository;

    @Mock
    private EmailService emailService;

    // Crea una instancia real de RentalServiceImpl con los mocks inyectados
    @InjectMocks
    private RentalServiceImpl rentalService;

    private User user;
    private VideoGame game;
    private GameCopy copy;

    // Se ejecuta antes de cada @Test — construye los objetos base
    @BeforeEach
    void setUp() {
        user = User.builder()
                .id(UUID.randomUUID())
                .username("testuser")
                .email("test@test.com")
                .name("Test")
                .role("USER")
                .status("ACTIVE")
                .build();

        game = VideoGame.builder()
                .id(UUID.randomUUID())
                .title("The Legend of Zelda")
                .rentalPrice(BigDecimal.valueOf(3.99))
                .build();

        copy = GameCopy.builder()
                .id(UUID.randomUUID())
                .game(game)
                .status(VideoGameCopyStatus.AVAILABLE)
                .build();
    }

    // ─── Agrupar tests relacionados con @Nested ────────────────────
    @Nested
    @DisplayName("returnRental")
    class ReturnRentalTests {

        @Test
        @DisplayName("devolver a tiempo → lateFee = 0")
        void returnOnTime_noLateFee() {
            // Arrange: preparar el escenario
            LocalDate start = LocalDate.now().minusDays(3);
            LocalDate due   = LocalDate.now().plusDays(4); // aún no vence
            Rental rental = buildActiveRental(start, due);

            when(rentalRepository.findById(rental.getId())).thenReturn(Optional.of(rental));
            when(rentalRepository.save(any())).thenAnswer(inv -> inv.getArgument(0));
            doNothing().when(emailService).sendReturnEmail(any(), any(), any(), any(), any());

            // Act: ejecutar
            RentalDTO result = rentalService.returnRental(rental.getId(), user);

            // Assert: verificar resultados
            assertThat(result.getLateFee()).isEqualByComparingTo(BigDecimal.ZERO);
            assertThat(result.getStatus()).isEqualTo("RETURNED");
            assertThat(result.getReturnedAt()).isEqualTo(LocalDate.now());
        }

        @Test
        @DisplayName("devolver 10 días tarde → lateFee = 10 × 1.50 = 15.00")
        void returnLate_calculatesCorrectFee() {
            LocalDate start = LocalDate.now().minusDays(17);
            LocalDate due   = LocalDate.now().minusDays(10); // venció hace 10 días exactos
            Rental rental = buildActiveRental(start, due);

            when(rentalRepository.findById(rental.getId())).thenReturn(Optional.of(rental));
            when(rentalRepository.save(any())).thenAnswer(inv -> inv.getArgument(0));
            doNothing().when(emailService).sendReturnEmail(any(), any(), any(), any(), any());

            RentalDTO result = rentalService.returnRental(rental.getId(), user);

            assertThat(result.getLateFee()).isEqualByComparingTo(BigDecimal.valueOf(15.00));
        }

        @Test
        @DisplayName("devolver 35 días tarde → lateFee = 35 × 1.50 = 52.50 (bug Period.getDays)")
        void returnVeryLate_moreThanOneMonth() {
            // Este test verifica el bug corregido:
            // Period.getDays() habría devuelto 5 (1 mes + 5 días) en lugar de 35
            LocalDate start = LocalDate.now().minusDays(42);
            LocalDate due   = LocalDate.now().minusDays(35);
            Rental rental = buildActiveRental(start, due);

            when(rentalRepository.findById(rental.getId())).thenReturn(Optional.of(rental));
            when(rentalRepository.save(any())).thenAnswer(inv -> inv.getArgument(0));
            doNothing().when(emailService).sendReturnEmail(any(), any(), any(), any(), any());

            RentalDTO result = rentalService.returnRental(rental.getId(), user);

            assertThat(result.getLateFee()).isEqualByComparingTo(BigDecimal.valueOf(52.50));
        }

        @Test
        @DisplayName("devolver un alquiler ya devuelto → BusinessException")
        void alreadyReturned_throwsException() {
            Rental rental = buildActiveRental(LocalDate.now().minusDays(5), LocalDate.now().plusDays(2));
            rental.setStatus("RETURNED");

            when(rentalRepository.findById(rental.getId())).thenReturn(Optional.of(rental));

            assertThatThrownBy(() -> rentalService.returnRental(rental.getId(), user))
                    .isInstanceOf(BusinessException.class)
                    .hasMessageContaining("already been returned");
        }

        @Test
        @DisplayName("devolver alquiler de otro usuario → BusinessException")
        void wrongUser_throwsException() {
            User otherUser = User.builder().id(UUID.randomUUID()).username("otro").build();
            Rental rental = buildActiveRental(LocalDate.now().minusDays(1), LocalDate.now().plusDays(6));
            rental.setUser(otherUser); // el alquiler pertenece a otro

            when(rentalRepository.findById(rental.getId())).thenReturn(Optional.of(rental));

            assertThatThrownBy(() -> rentalService.returnRental(rental.getId(), user))
                    .isInstanceOf(BusinessException.class)
                    .hasMessageContaining("does not belong");
        }

        @Test
        @DisplayName("alquiler no existe → ResourceNotFoundException")
        void rentalNotFound_throwsException() {
            UUID fakeId = UUID.randomUUID();
            when(rentalRepository.findById(fakeId)).thenReturn(Optional.empty());

            assertThatThrownBy(() -> rentalService.returnRental(fakeId, user))
                    .isInstanceOf(ResourceNotFoundException.class);
        }
    }

    @Nested
    @DisplayName("getMyRentals — projectedLateFee y overdue")
    class GetMyRentalsTests {

        @Test
        @DisplayName("alquiler activo no vencido → overdue false, projectedLateFee = 0")
        void activeNotOverdue() {
            Rental rental = buildActiveRental(LocalDate.now().minusDays(2), LocalDate.now().plusDays(5));
            when(rentalRepository.findByUser_Id(user.getId())).thenReturn(List.of(rental));

            RentalDTO dto = rentalService.getMyRentals(user).get(0);

            assertThat(dto.isOverdue()).isFalse();
            assertThat(dto.getProjectedLateFee()).isEqualByComparingTo(BigDecimal.ZERO);
        }

        @Test
        @DisplayName("alquiler activo vencido 3 días → overdue true, projectedLateFee = 4.50")
        void activeOverdue_showsProjectedFee() {
            Rental rental = buildActiveRental(LocalDate.now().minusDays(10), LocalDate.now().minusDays(3));
            when(rentalRepository.findByUser_Id(user.getId())).thenReturn(List.of(rental));

            RentalDTO dto = rentalService.getMyRentals(user).get(0);

            assertThat(dto.isOverdue()).isTrue();
            assertThat(dto.getProjectedLateFee()).isEqualByComparingTo(BigDecimal.valueOf(4.50));
        }

        @Test
        @DisplayName("Creacion de alquiler correcta")
        void createRentalOk(){

            VideoGame game = VideoGame.builder()
                    .id(UUID.randomUUID())
                    .title("The Legend of Zelda")
                    .rentalPrice(BigDecimal.valueOf(3.99))
                    .build();;
            GameCopy copy = new GameCopy(UUID.randomUUID(), VideoGameCopyStatus.AVAILABLE, LocalDate.now(), LocalDate.now(), "testuser", "testuser", game, null);
            Rental rental = buildActiveRental(LocalDate.now() , LocalDate.now() );;
            when(gameCopyRepository.findFirstByGame_IdAndStatus(any(), any())).thenReturn(Optional.of(copy));
            when(gameCopyRepository.save(copy)).thenReturn(copy);


        }
    }

    // ─── Helper para construir alquileres de prueba ────────────────
    private Rental buildActiveRental(LocalDate start, LocalDate due) {
        return Rental.builder()
                .id(UUID.randomUUID())
                .user(user)
                .gameCopy(copy)
                .startAt(start)
                .dueAt(due)
                .status("ACTIVE")
                .rentalPriceStart(game.getRentalPrice())
                .lateFee(BigDecimal.ZERO)
                .createdAt(start)
                .updatedAt(start)
                .createdBy(user.getUsername())
                .updateBy(user.getUsername())
                .build();
    }
}
