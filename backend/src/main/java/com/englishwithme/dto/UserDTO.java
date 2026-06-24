package com.englishwithme.dto;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserDTO {
    private Long id;
    private String email;
    private String username;
    private Integer streak;
    private Integer totalXp;
    private Integer gems;
    private Integer hearts;
    private String level;
    private String avatar;
}
