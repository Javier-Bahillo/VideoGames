package Videoclub.service;

import Videoclub.dto.VideoGameDTO;
import Videoclub.entity.VideoGame;
import Videoclub.entity.VideoGameCopyStatus;
import Videoclub.exception.ResourceNotFoundException;
import Videoclub.mapper.VideoGameMapper;
import Videoclub.repository.VideoGameCopyRepository;
import Videoclub.repository.VideoGameRepository;
import Videoclub.service.impl.VideoGameServiceImpl;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.data.domain.*;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class VideoGameServiceImplTest {

    @Mock private VideoGameRepository videoGameRepository;
    @Mock private VideoGameCopyRepository videoGameCopyRepository;
    @Mock private VideoGameMapper videoGameMapper;

    @InjectMocks
    private VideoGameServiceImpl videoGameService;

    @Test
    @DisplayName("sin búsqueda → usa findByActiveTrue")
    void noSearch_usesActivePage() {
        VideoGame game = buildGame("Zelda");
        Page<VideoGame> fakePage = new PageImpl<>(List.of(game));

        // Cuando se llama sin search, debe usar el repositorio correcto
        when(videoGameRepository.findByActiveTrue(any(Pageable.class))).thenReturn(fakePage);
        when(videoGameMapper.toDto(game)).thenReturn(buildDto(game));
        when(videoGameCopyRepository.countByGame_IdAndStatus(any(), eq(VideoGameCopyStatus.AVAILABLE))).thenReturn(2L);
        when(videoGameCopyRepository.countByGame_Id(any())).thenReturn(3L);

        Page<VideoGameDTO> result = videoGameService.getListGames(0, 12, null);

        assertThat(result.getContent()).hasSize(1);
        assertThat(result.getContent().get(0).getTitle()).isEqualTo("Zelda");
        assertThat(result.getContent().get(0).getAvailableCopies()).isEqualTo(2);
        assertThat(result.getContent().get(0).getTotalCopies()).isEqualTo(3);

        verify(videoGameRepository).findByActiveTrue(any(Pageable.class));
        verify(videoGameRepository, never()).findByActiveTrueAndTitleContainingIgnoreCase(any(), any());
    }

    @Test
    @DisplayName("con búsqueda → usa findByActiveTrueAndTitleContaining")
    void withSearch_usesSearchQuery() {
        VideoGame game = buildGame("Mario Kart");
        Page<VideoGame> fakePage = new PageImpl<>(List.of(game));

        when(videoGameRepository.findByActiveTrueAndTitleContainingIgnoreCase(eq("mario"), any(Pageable.class)))
                .thenReturn(fakePage);
        when(videoGameMapper.toDto(game)).thenReturn(buildDto(game));
        when(videoGameCopyRepository.countByGame_IdAndStatus(any(), any())).thenReturn(1L);
        when(videoGameCopyRepository.countByGame_Id(any())).thenReturn(1L);

        Page<VideoGameDTO> result = videoGameService.getListGames(0, 12, "mario");

        assertThat(result.getContent()).hasSize(1);
        verify(videoGameRepository).findByActiveTrueAndTitleContainingIgnoreCase(eq("mario"), any());
        verify(videoGameRepository, never()).findByActiveTrue(any());
    }

    @Test
    @DisplayName("búsqueda con espacios en blanco → se trata como sin búsqueda")
    void blankSearch_treatedAsNoSearch() {
        when(videoGameRepository.findByActiveTrue(any())).thenReturn(Page.empty());

        videoGameService.getListGames(0, 12, "   ");

        verify(videoGameRepository).findByActiveTrue(any());
        verify(videoGameRepository, never()).findByActiveTrueAndTitleContainingIgnoreCase(any(), any());
    }

    @Test
    @DisplayName("resultado vacío → página vacía sin errores")
    void emptyResult_returnsEmptyPage() {
        when(videoGameRepository.findByActiveTrue(any())).thenReturn(Page.empty());

        Page<VideoGameDTO> result = videoGameService.getListGames(0, 12, null);

        assertThat(result.getContent()).isEmpty();
        assertThat(result.getTotalElements()).isZero();
    }



    @Test
    @DisplayName("Busca Game ID")
    void withSearchById_withResultOK() {
        VideoGame game = buildGame("Mario Kart");
        when(videoGameRepository.findById(game.getId())).thenReturn(Optional.of((game)));
        when(videoGameMapper.toDto(game)).thenReturn(buildDto(game));
        when(videoGameCopyRepository.countByGame_IdAndStatus(any(), any())).thenReturn(1L);
        when(videoGameCopyRepository.countByGame_Id(any())).thenReturn(1L);


        VideoGameDTO gameDTO = videoGameService.getGameById(game.getId());
        assertThat(gameDTO.getTitle()).isEqualToIgnoringCase("Mario Kart");
        assertThat(gameDTO.getTitle()).isEqualToIgnoringCase("Mario Kart");
        assertThat(gameDTO.getAvailableCopies()).isEqualTo(1);
        assertThat(gameDTO.getTotalCopies()).isEqualTo(1);

        verify(videoGameRepository).findById(game.getId());
        verify(videoGameMapper).toDto(game);


    }

    @Test
    @DisplayName("Busca Game ID con excepcion")
    void withSearchById_withNoResultOK() {
        VideoGame game = buildGame("Mario Kart");
        when(videoGameRepository.findById(game.getId())).thenReturn(Optional.empty());

        ResourceNotFoundException exception = assertThrows(ResourceNotFoundException.class, () -> {
            videoGameService.getGameById(game.getId());
        });

        assertThat(exception.getMessage()).contains("Game not found with id: " + game.getId());

        verify(videoGameRepository).findById(game.getId());

    }


    // ─── Helpers ──────────────────────────────────────────────────
    private VideoGame buildGame(String title) {
        return VideoGame.builder()
                .id(UUID.randomUUID())
                .title(title)
                .rentalPrice(BigDecimal.valueOf(2.99))
                .active(true)
                .build();
    }

    private VideoGameDTO buildDto(VideoGame game) {
        VideoGameDTO dto = new VideoGameDTO();
        dto.setId(game.getId());
        dto.setTitle(game.getTitle());
        dto.setRentalPrice(game.getRentalPrice());
        return dto;
    }
}
