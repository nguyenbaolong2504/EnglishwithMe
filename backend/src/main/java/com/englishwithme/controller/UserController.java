package com.englishwithme.controller;

import com.englishwithme.dto.UserDTO;
import com.englishwithme.entity.User;
import com.englishwithme.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class UserController {
    private final UserRepository userRepository;

    @GetMapping("/{id}")
    public ResponseEntity<UserDTO> getUser(@PathVariable Long id) {
        Optional<User> user = userRepository.findById(id);
        return user.map(u -> ResponseEntity.ok(convertToDTO(u)))
                   .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/register")
    public ResponseEntity<UserDTO> registerUser(@RequestBody UserDTO userDTO) {
        User newUser = User.builder()
                .email(userDTO.getEmail())
                .username(userDTO.getUsername())
                .streak(0)
                .totalXp(0)
                .gems(0)
                .hearts(5)
                .level("BEGINNER")
                .build();
        User saved = userRepository.save(newUser);
        return ResponseEntity.ok(convertToDTO(saved));
    }

    @PutMapping("/{id}")
    public ResponseEntity<UserDTO> updateUser(@PathVariable Long id, @RequestBody UserDTO userDTO) {
        Optional<User> existing = userRepository.findById(id);
        if (existing.isPresent()) {
            User user = existing.get();
            user.setStreak(userDTO.getStreak());
            user.setTotalXp(userDTO.getTotalXp());
            user.setGems(userDTO.getGems());
            user.setHearts(userDTO.getHearts());
            user.setLevel(userDTO.getLevel());
            User updated = userRepository.save(user);
            return ResponseEntity.ok(convertToDTO(updated));
        }
        return ResponseEntity.notFound().build();
    }

    private UserDTO convertToDTO(User user) {
        return UserDTO.builder()
                .id(user.getId())
                .email(user.getEmail())
                .username(user.getUsername())
                .streak(user.getStreak())
                .totalXp(user.getTotalXp())
                .gems(user.getGems())
                .hearts(user.getHearts())
                .level(user.getLevel())
                .avatar(user.getAvatar())
                .build();
    }
}
