package com.englishwithme.dto;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserProgressDTO {
    private Long id;
    private Long userId;
    private Long lessonId;
    private Integer xpEarned;
    private Boolean completed;
    private Boolean starred;
}
