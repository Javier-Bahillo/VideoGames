package Videoclub.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.UuidGenerator;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.UUID;

@Entity
@Table(name =  "Rental")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Rental {
    @Id
    @GeneratedValue
    @UuidGenerator
    @Column(columnDefinition = "uuid", updatable = false, nullable = false)
    private UUID id;
//    @Column(name = "user_id",nullable = false)
//    private UUID userId;
//    @Column(name = "game_copy_id",nullable = false)
//    private UUID gamecopyId;
    @Column(nullable = false)
    private LocalDate startAt;
    @Column(nullable = false)
    private LocalDate dueAt;
    @Column(nullable = true)
    private LocalDate returnedAt;
    @Column(nullable = false)
    private String status ;
    @Column(nullable = false)
    private BigDecimal rentalPriceStart ;
    @Column(nullable = false)
    private BigDecimal lateFee ;
    @Column(nullable = false)
    private LocalDate createdAt ;
    @Column(nullable = false)
    private LocalDate updatedAt ;
    @Column(nullable = false)
    private String createdBy ;
    @Column(nullable = false)
    private String updateBy;

    //relacion con user Model
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "game_copy_id", nullable = false)
    private GameCopy gameCopy;
}
