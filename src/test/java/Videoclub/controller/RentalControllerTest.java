package Videoclub.controller;

import Videoclub.dto.CreateRentalRequest;
import Videoclub.dto.RentalDTO;
import Videoclub.entity.User;
import Videoclub.service.RentalService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.UUID;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post; // ✅
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(RentalController.class)
public class RentalControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockitoBean                          // ✅ sin constructor ni final
    private RentalService rentalService;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    @DisplayName("POST /rentals - 201 Created - createRental")
    void createRental() throws Exception {
        // Arrange
        UUID gameId     = UUID.randomUUID();
        UUID userId     = UUID.randomUUID();
        UUID rentalId   = UUID.randomUUID();
        UUID gameCopyId = UUID.randomUUID();

        User mockUser = User.builder()
                .id(userId)
                .username("javi")
                .password("encoded_password")
                .name("Javi")
                .surname("Test")
                .email("javi@videoclub.com")
                .role("USER")
                .status("ACTIVE")
                .createdAt(LocalDate.now())
                .updatedAt(LocalDate.now())
                .createdBy("system")
                .updateBy("system")
                .build();

        setSecurityContext(mockUser);     // ✅ ahora existe

        CreateRentalRequest request = new CreateRentalRequest();
        request.setGameId(gameId);

        RentalDTO expectedResponse = RentalDTO.builder()
                .id(rentalId)
                .startAt(LocalDate.now())
                .dueAt(LocalDate.now().plusDays(7))
                .returnedAt(null)
                .status("ACTIVE")
                .rentalPriceStart(new BigDecimal("3.99"))
                .lateFee(BigDecimal.ZERO)
                .projectedLateFee(BigDecimal.ZERO)
                .overdue(false)
                .gameCopyId(gameCopyId)
                .gameId(gameId)
                .gameTitle("Final Fantasy X")
                .userId(userId)
                .build();

        when(rentalService.createRental(any(User.class), any(CreateRentalRequest.class)))
                .thenReturn(expectedResponse);

        // Act & Assert
        mockMvc.perform(post("/rentals")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.id").value(rentalId.toString()))
                .andExpect(jsonPath("$.status").value("ACTIVE"))
                .andExpect(jsonPath("$.gameId").value(gameId.toString()))
                .andExpect(jsonPath("$.gameTitle").value("Final Fantasy X"))
                .andExpect(jsonPath("$.userId").value(userId.toString()))
                .andExpect(jsonPath("$.overdue").value(false))
                .andExpect(jsonPath("$.rentalPriceStart").value(3.99));
    }

    // ── helper ───────────────────────────────────────────────────
    private void setSecurityContext(User user) {
        UsernamePasswordAuthenticationToken auth =
                new UsernamePasswordAuthenticationToken(user, null, user.getAuthorities());
        SecurityContextHolder.getContext().setAuthentication(auth);
    }
}