package Videoclub.controller;


import Videoclub.dto.CreateRentalRequest;
import Videoclub.entity.User;
import Videoclub.repository.UserRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.transaction.Transactional;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.time.LocalDate;
import java.util.UUID;
import org.springframework.security.test.context.support.WithMockUser;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
@Transactional  // cada test limpia la BD al terminar
@WithMockUser(username = "testuser", roles = {"USER"}) // Simula un usuario autenticado para todos los tests
public class IntegrationTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private UserRepository userRepository;

    // El usuario que usaremos en todos los tests
    private User testUser;

    @BeforeEach
        // se ejecuta antes de CADA test
    void setUp() {
        // Creamos un usuario real en BD para usarlo en los tests
        testUser = new User();
        testUser.setUsername("testuser");
        testUser.setName("Ana");
        testUser.setSurname("Garcia");
        testUser.setEmail("ana@test.com");
        testUser.setRole("USER");
        testUser.setStatus("ACTIVE");
        testUser.setCreatedAt(LocalDate.now());
        testUser = userRepository.save(testUser);
    }

    @Test
    @DisplayName("POST /rentals - 201 Created - createRental")
    void createRental() throws Exception {
        // Aquí iría el código para crear un alquiler usando mockMvc
        // y luego verificar que se ha creado correctamente en la BD.
        // Por ejemplo, podríamos hacer una petición POST a /rentals con los datos necesarios,
        // y luego usar userRepository para verificar que el alquiler se ha asociado al testUser.
        UUID gameId = UUID.fromString("0a286507-8991-458b-8d9d-b54bae32448c");

        CreateRentalRequest request = new CreateRentalRequest();
        request.setGameId(gameId);

        // Act & Assert
        mockMvc.perform(post("/rentals")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request)))
                .andDo(print())
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.id").isNotEmpty());
    }

}
