package Videoclub.mapper;

import Videoclub.dto.VideoGameCopyDTO;
import Videoclub.dto.VideoGameDTO;
import Videoclub.entity.GameCopy;
import Videoclub.entity.VideoGame;
import Videoclub.entity.VideoGameCopyStatus;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2026-04-08T13:12:44+0200",
    comments = "version: 1.6.3, compiler: javac, environment: Java 25.0.2 (Oracle Corporation)"
)
@Component
public class VideoGameMapperImpl implements VideoGameMapper {

    @Override
    public VideoGameDTO toDto(VideoGame entity) {
        if ( entity == null ) {
            return null;
        }

        VideoGameDTO.VideoGameDTOBuilder videoGameDTO = VideoGameDTO.builder();

        videoGameDTO.id( entity.getId() );
        videoGameDTO.active( entity.isActive() );
        videoGameDTO.title( entity.getTitle() );
        videoGameDTO.description( entity.getDescription() );
        videoGameDTO.platform( entity.getPlatform() );
        videoGameDTO.genre( entity.getGenre() );
        videoGameDTO.producer( entity.getProducer() );
        videoGameDTO.pegi( entity.getPegi() );
        videoGameDTO.releaseDate( entity.getReleaseDate() );
        videoGameDTO.rentalPrice( entity.getRentalPrice() );
        videoGameDTO.coverUrl( entity.getCoverUrl() );

        return videoGameDTO.build();
    }

    @Override
    public VideoGame toEntity(VideoGameDTO dto) {
        if ( dto == null ) {
            return null;
        }

        VideoGame.VideoGameBuilder videoGame = VideoGame.builder();

        videoGame.id( dto.getId() );
        videoGame.title( dto.getTitle() );
        videoGame.description( dto.getDescription() );
        videoGame.platform( dto.getPlatform() );
        videoGame.genre( dto.getGenre() );
        videoGame.producer( dto.getProducer() );
        videoGame.pegi( dto.getPegi() );
        videoGame.releaseDate( dto.getReleaseDate() );
        videoGame.rentalPrice( dto.getRentalPrice() );
        videoGame.coverUrl( dto.getCoverUrl() );
        videoGame.active( dto.isActive() );

        return videoGame.build();
    }

    @Override
    public VideoGameCopyDTO toDtoCopy(GameCopy entity) {
        if ( entity == null ) {
            return null;
        }

        VideoGameCopyDTO.VideoGameCopyDTOBuilder videoGameCopyDTO = VideoGameCopyDTO.builder();

        videoGameCopyDTO.id( entity.getId() );
        if ( entity.getStatus() != null ) {
            videoGameCopyDTO.status( entity.getStatus().name() );
        }

        return videoGameCopyDTO.build();
    }

    @Override
    public GameCopy toEntityCopy(VideoGameCopyDTO dto) {
        if ( dto == null ) {
            return null;
        }

        GameCopy.GameCopyBuilder gameCopy = GameCopy.builder();

        gameCopy.id( dto.getId() );
        if ( dto.getStatus() != null ) {
            gameCopy.status( Enum.valueOf( VideoGameCopyStatus.class, dto.getStatus() ) );
        }

        return gameCopy.build();
    }
}
