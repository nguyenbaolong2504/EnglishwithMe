package com.englishwithme.repository;

import com.englishwithme.entity.Lesson;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface LessonRepository extends JpaRepository<Lesson, Long> {
    List<Lesson> findByTopic(String topic);
    List<Lesson> findByCheckpoint(Integer checkpoint);
    List<Lesson> findByTopicAndCheckpoint(String topic, Integer checkpoint);
}
