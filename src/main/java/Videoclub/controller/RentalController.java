package Videoclub.controller;

import Videoclub.dto.CreateRentalRequest;
import Videoclub.dto.RentalDTO;
import Videoclub.dto.UserProfileDTO;
import Videoclub.entity.User;
import Videoclub.repository.UserRepository;
import Videoclub.service.EmailService;
import Videoclub.service.RentalService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
public class RentalController {

    private final RentalService rentalService;
    private final UserRepository userRepository;
    private final EmailService emailService;

    @GetMapping("/me")
    public ResponseEntity<UserProfileDTO> getMyProfile(@AuthenticationPrincipal User user) {
        UserProfileDTO dto = UserProfileDTO.builder()
                .id(user.getId())
                .username(user.getUsername())
                .name(user.getName())
                .surname(user.getSurname())
                .email(user.getEmail())
                .role(user.getRole())
                .createdAt(user.getCreatedAt())
                .build();
        return ResponseEntity.ok(dto);
    }

    @PostMapping("/rentals")
    public ResponseEntity<RentalDTO> createRental(@Valid @RequestBody CreateRentalRequest request,
                                                   @AuthenticationPrincipal User user) {
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(rentalService.createRental(user, request));
    }

    @GetMapping("/me/rentals")
    public ResponseEntity<List<RentalDTO>> getMyRentals(@AuthenticationPrincipal User user) {
        return ResponseEntity.ok(rentalService.getMyRentals(user));
    }

    @PutMapping("/rentals/{rentalId}/return")
    public ResponseEntity<RentalDTO> returnRental(@PathVariable UUID rentalId,
                                                   @AuthenticationPrincipal User user) {
        return ResponseEntity.ok(rentalService.returnRental(rentalId, user));
    }

    @PostMapping("/me/deactivate")
    public ResponseEntity<Void> deactivateMyAccount(@AuthenticationPrincipal User user) {

        //Deberia llamar en el service
        user.setStatus("INACTIVE");
        user.setUpdatedAt(LocalDate.now());
        user.setUpdateBy(user.getUsername());
        userRepository.save(user);
        emailService.sendDeactivationEmail(user.getEmail(), user.getName());
        return ResponseEntity.ok().build();
    }
}
