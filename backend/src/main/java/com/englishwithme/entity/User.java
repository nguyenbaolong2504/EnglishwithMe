package com.englishwithme.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String username;

    @Column(columnDefinition = "INT DEFAULT 0")
    private Integer streak;

    @Column(columnDefinition = "INT DEFAULT 0")
    private Integer totalXp;

    @Column(columnDefinition = "INT DEFAULT 0")
    private Integer gems;

    @Column(columnDefinition = "INT DEFAULT 5")
    private Integer hearts;

    @Column(columnDefinition = "VARCHAR(50) DEFAULT 'BEGINNER'")
    private String level;

    private String avatar;

    @Column(columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private java.time.LocalDateTime createdAt;

    @Column(columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP")
    private java.time.LocalDateTime updatedAt;
}
