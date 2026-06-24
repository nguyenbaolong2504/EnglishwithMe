package com.englishwithme;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class EnglishWithMeApplication {
    public static void main(String[] args) {
        SpringApplication.run(EnglishWithMeApplication.class, args);
    }
}
