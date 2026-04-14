package Videoclub.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.UuidGenerator;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "GameCopy")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class GameCopy {

    @Id
    @GeneratedValue
    @UuidGenerator
    @Column(columnDefinition = "uuid", updatable = false, nullable = false)
    private UUID id;
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private VideoGameCopyStatus status;
    @Column(nullable = false)
    private LocalDate createdAt ;
    @Column(nullable = false)
    private LocalDate updatedAt ;
    @Column(nullable = false)
    private String createdBy ;
    @Column(nullable = false)
    private String updateBy;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "videogame_id", nullable = false)
    //esta en la relacion de Videogame model
    private VideoGame game;

    @OneToMany(mappedBy = "gameCopy")
    private List<Rental> rentals;



}
