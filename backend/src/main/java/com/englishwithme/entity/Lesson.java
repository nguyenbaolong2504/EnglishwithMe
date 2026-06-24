package com.englishwithme.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "lessons")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Lesson {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Column(nullable = false)
    private String topic;

    @Column(nullable = false)
    private Integer checkpoint;

    @Column(nullable = false, columnDefinition = "VARCHAR(50) DEFAULT 'BEGINNER'")
    private String difficulty;

    @Column(nullable = false)
    private Integer xpReward;

    @Column(columnDefinition = "TEXT")
    private String content;

    @Column(columnDefinition = "VARCHAR(50) DEFAULT 'LESSON'")
    private String type;
}
