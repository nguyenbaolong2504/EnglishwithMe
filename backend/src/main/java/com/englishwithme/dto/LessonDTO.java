package com.englishwithme.dto;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class LessonDTO {
    private Long id;
    private String title;
    private String description;
    private String topic;
    private Integer checkpoint;
    private String difficulty;
    private Integer xpReward;
    private String type;
}
