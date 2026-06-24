import React, { useState } from 'react';
import { ChevronLeft, Play } from 'lucide-react';

interface Topic {
  id: string;
  name: string;
  emoji: string;
}

interface Checkpoint {
  id: string;
  number: number;
  completed: boolean;
}

interface LessonItem {
  id: string;
  type: string;
  name: string;
  difficulty: string;
}

const LearnScreen: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [selectedCheckpoint, setSelectedCheckpoint] = useState<string | null>(null);

  const topics: Topic[] = [
    { id: '1', name: 'Gia đình', emoji: '👨‍👩‍👧‍👦' },
    { id: '2', name: 'Trường học', emoji: '🏫' },
    { id: '3', name: 'Ăn uống', emoji: '🍽️' },
    { id: '4', name: 'Du lịch', emoji: '✈️' },
  ];

  const checkpoints: Checkpoint[] = [
    { id: '1', number: 1, completed: true },
    { id: '2', number: 2, completed: true },
    { id: '3', number: 3, completed: false },
    { id: '4', number: 4, completed: false },
    { id: '5', number: 5, completed: false },
    { id: '6', number: 6, completed: false },
    { id: '7', number: 7, completed: false },
    { id: '8', number: 8, completed: false },
  ];

  const lessons: LessonItem[] = [
    { id: '1', type: '🎴', name: 'Postcard: Từ vựng gia đình', difficulty: 'Dễ' },
    { id: '2', type: '❓', name: 'Trắc nghiệm từ vựng', difficulty: 'Dễ' },
    { id: '3', type: '✍️', name: 'Điền vào chỗ trống', difficulty: 'Trung bình' },
    { id: '4', type: '🎤', name: 'Luyện phát âm', difficulty: 'Trung bình' },
    { id: '5', type: '🔗', name: 'Ghép cặp từ', difficulty: 'Khó' },
    { id: '6', type: '📝', name: 'Review từ khó', difficulty: 'Khó' },
  ];

  if (!selectedTopic) {
    return (
      <div className="learn-screen">
        <h2 className="section-title" style={{ marginBottom: '16px' }}>Chọn chủ đề</h2>
        <div className="topics-grid">
          {topics.map((topic) => (
            <div
              key={topic.id}
              className="topic-card"
              onClick={() => setSelectedTopic(topic.id)}
            >
              <div className="topic-emoji">{topic.emoji}</div>
              <div className="topic-name">{topic.name}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!selectedCheckpoint) {
    const topic = topics.find(t => t.id === selectedTopic);
    return (
      <div className="learn-screen">
        <button
          className="btn-secondary"
          onClick={() => setSelectedTopic(null)}
          style={{ marginBottom: '16px', width: '100%' }}
        >
          <ChevronLeft size={20} style={{ marginRight: '8px' }} /> Quay lại
        </button>
        <h2 className="section-title">{topic?.name}</h2>
        <div className="checkpoint-path">
          {checkpoints.map((cp) => (
            <div
              key={cp.id}
              className={`checkpoint ${cp.completed ? 'completed' : selectedCheckpoint === cp.id ? 'active' : ''}`}
              onClick={() => setSelectedCheckpoint(cp.id)}
            >
              <div className={`checkpoint-number ${cp.completed ? 'completed' : ''}`}>
                {cp.completed ? '✓' : cp.number}
              </div>
              <div className="checkpoint-label">Mốc {cp.number}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="learn-screen">
      <button
        className="btn-secondary"
        onClick={() => setSelectedCheckpoint(null)}
        style={{ marginBottom: '16px', width: '100%' }}
      >
        <ChevronLeft size={20} style={{ marginRight: '8px' }} /> Quay lại
      </button>
      <h2 className="section-title">Mốc {selectedCheckpoint}</h2>
      <div className="lesson-list">
        {lessons.map((lesson) => (
          <div key={lesson.id} className="lesson-item">
            <div className="lesson-type-icon">{lesson.type}</div>
            <div className="lesson-type">{lesson.name}</div>
            <div className="lesson-difficulty">{lesson.difficulty}</div>
          </div>
        ))}
      </div>
      <button className="btn-primary" style={{ width: '100%', marginTop: '20px' }}>
        <Play size={20} style={{ marginRight: '8px' }} /> Bắt đầu
      </button>
    </div>
  );
};

export default LearnScreen;
