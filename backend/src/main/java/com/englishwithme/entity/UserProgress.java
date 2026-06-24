package com.englishwithme.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "user_progress")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserProgress {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "lesson_id", nullable = false)
    private Lesson lesson;

    @Column(columnDefinition = "INT DEFAULT 0")
    private Integer xpEarned;

    @Column(columnDefinition = "BOOLEAN DEFAULT FALSE")
    private Boolean completed;

    @Column(columnDefinition = "BOOLEAN DEFAULT FALSE")
    private Boolean starred;

    @Column(columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private java.time.LocalDateTime completedAt;

    @Column(columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private java.time.LocalDateTime createdAt;
}
