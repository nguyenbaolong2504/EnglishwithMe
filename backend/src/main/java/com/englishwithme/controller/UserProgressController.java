package com.englishwithme.controller;

import com.englishwithme.dto.UserProgressDTO;
import com.englishwithme.entity.UserProgress;
import com.englishwithme.entity.User;
import com.englishwithme.entity.Lesson;
import com.englishwithme.repository.UserProgressRepository;
import com.englishwithme.repository.UserRepository;
import com.englishwithme.repository.LessonRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/progress")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class UserProgressController {
    private final UserProgressRepository progressRepository;
    private final UserRepository userRepository;
    private final LessonRepository lessonRepository;

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<UserProgressDTO>> getUserProgress(@PathVariable Long userId) {
        List<UserProgressDTO> progress = progressRepository.findByUserId(userId)
                .stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
        return ResponseEntity.ok(progress);
    }

    @PostMapping
    public ResponseEntity<UserProgressDTO> recordProgress(@RequestBody UserProgressDTO progressDTO) {
        User user = userRepository.findById(progressDTO.getUserId()).orElseThrow();
        Lesson lesson = lessonRepository.findById(progressDTO.getLessonId()).orElseThrow();

        UserProgress progress = UserProgress.builder()
                .user(user)
                .lesson(lesson)
                .xpEarned(progressDTO.getXpEarned())
                .completed(progressDTO.getCompleted() != null ? progressDTO.getCompleted() : false)
                .starred(progressDTO.getStarred() != null ? progressDTO.getStarred() : false)
                .completedAt(LocalDateTime.now())
                .build();

        if (progressDTO.getCompleted()) {
            user.setTotalXp(user.getTotalXp() + progressDTO.getXpEarned());
            userRepository.save(user);
        }

        UserProgress saved = progressRepository.save(progress);
        return ResponseEntity.ok(convertToDTO(saved));
    }

    @PutMapping("/{id}")
    public ResponseEntity<UserProgressDTO> updateProgress(
            @PathVariable Long id,
            @RequestBody UserProgressDTO progressDTO) {
        return progressRepository.findById(id)
                .map(progress -> {
                    progress.setCompleted(progressDTO.getCompleted());
                    progress.setStarred(progressDTO.getStarred());
                    progress.setXpEarned(progressDTO.getXpEarned());
                    UserProgress updated = progressRepository.save(progress);
                    return ResponseEntity.ok(convertToDTO(updated));
                })
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/stats/{userId}")
    public ResponseEntity<?> getUserStats(@PathVariable Long userId) {
        Long completed = progressRepository.countByUserIdAndCompleted(userId, true);
        Long total = progressRepository.findByUserId(userId).size();

        return ResponseEntity.ok(new Object() {
            public Long completedLessons = completed;
            public Long totalLessons = total;
            public Double completionRate = total > 0 ? (completed * 100.0) / total : 0;
        });
    }

    private UserProgressDTO convertToDTO(UserProgress progress) {
        return UserProgressDTO.builder()
                .id(progress.getId())
                .userId(progress.getUser().getId())
                .lessonId(progress.getLesson().getId())
                .xpEarned(progress.getXpEarned())
                .completed(progress.getCompleted())
                .starred(progress.getStarred())
                .build();
    }
}
