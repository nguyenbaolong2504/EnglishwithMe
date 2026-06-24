package com.englishwithme.controller;

import com.englishwithme.dto.LessonDTO;
import com.englishwithme.entity.Lesson;
import com.englishwithme.repository.LessonRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/lessons")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class LessonController {
    private final LessonRepository lessonRepository;

    @GetMapping
    public ResponseEntity<List<LessonDTO>> getAllLessons() {
        List<LessonDTO> lessons = lessonRepository.findAll()
                .stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
        return ResponseEntity.ok(lessons);
    }

    @GetMapping("/{id}")
    public ResponseEntity<LessonDTO> getLesson(@PathVariable Long id) {
        return lessonRepository.findById(id)
                .map(lesson -> ResponseEntity.ok(convertToDTO(lesson)))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/topic/{topic}")
    public ResponseEntity<List<LessonDTO>> getLessonsByTopic(@PathVariable String topic) {
        List<LessonDTO> lessons = lessonRepository.findByTopic(topic)
                .stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
        return ResponseEntity.ok(lessons);
    }

    @GetMapping("/topic/{topic}/checkpoint/{checkpoint}")
    public ResponseEntity<List<LessonDTO>> getLessonsByTopicAndCheckpoint(
            @PathVariable String topic,
            @PathVariable Integer checkpoint) {
        List<LessonDTO> lessons = lessonRepository.findByTopicAndCheckpoint(topic, checkpoint)
                .stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
        return ResponseEntity.ok(lessons);
    }

    @PostMapping
    public ResponseEntity<LessonDTO> createLesson(@RequestBody LessonDTO lessonDTO) {
        Lesson lesson = Lesson.builder()
                .title(lessonDTO.getTitle())
                .description(lessonDTO.getDescription())
                .topic(lessonDTO.getTopic())
                .checkpoint(lessonDTO.getCheckpoint())
                .difficulty(lessonDTO.getDifficulty())
                .xpReward(lessonDTO.getXpReward())
                .type(lessonDTO.getType())
                .build();
        Lesson saved = lessonRepository.save(lesson);
        return ResponseEntity.ok(convertToDTO(saved));
    }

    private LessonDTO convertToDTO(Lesson lesson) {
        return LessonDTO.builder()
                .id(lesson.getId())
                .title(lesson.getTitle())
                .description(lesson.getDescription())
                .topic(lesson.getTopic())
                .checkpoint(lesson.getCheckpoint())
                .difficulty(lesson.getDifficulty())
                .xpReward(lesson.getXpReward())
                .type(lesson.getType())
                .build();
    }
}
