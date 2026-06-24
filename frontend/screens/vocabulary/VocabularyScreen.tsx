import React, { useState } from 'react';
import { Volume2, ChevronLeft } from 'lucide-react';

interface VocabItem {
  id: string;
  word: string;
  pronunciation: string;
  meaning: string;
  example: string;
}

interface Topic {
  id: string;
  name: string;
  emoji: string;
  words: VocabItem[];
}

const VocabularyScreen: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [quizMode, setQuizMode] = useState(false);

  const topics: Topic[] = [
    {
      id: '1',
      name: 'Trường học',
      emoji: '🏫',
      words: [
        {
          id: '1',
          word: 'Teacher',
          pronunciation: '/ˈtiːtʃər/',
          meaning: 'Giáo viên',
          example: 'My teacher is very kind.',
        },
        {
          id: '2',
          word: 'Student',
          pronunciation: '/ˈstjuːdənt/',
          meaning: 'Học sinh',
          example: 'I am a student.',
        },
        {
          id: '3',
          word: 'Classroom',
          pronunciation: '/ˈklɑːsruːm/',
          meaning: 'Lớp học',
          example: 'We study in the classroom.',
        },
      ],
    },
    {
      id: '2',
      name: 'Gia đình',
      emoji: '👨‍👩‍👧‍👦',
      words: [
        {
          id: '1',
          word: 'Mother',
          pronunciation: '/ˈmʌðər/',
          meaning: 'Mẹ',
          example: 'My mother loves me.',
        },
        {
          id: '2',
          word: 'Father',
          pronunciation: '/ˈfɑːðər/',
          meaning: 'Bố',
          example: 'My father works hard.',
        },
        {
          id: '3',
          word: 'Sister',
          pronunciation: '/ˈsɪstər/',
          meaning: 'Chị/em gái',
          example: 'My sister is smart.',
        },
      ],
    },
    {
      id: '3',
      name: 'Ăn uống',
      emoji: '🍽️',
      words: [
        {
          id: '1',
          word: 'Apple',
          pronunciation: '/ˈæp.əl/',
          meaning: 'Quả táo',
          example: 'I eat an apple every day.',
        },
        {
          id: '2',
          word: 'Water',
          pronunciation: '/ˈwɔːtər/',
          meaning: 'Nước',
          example: 'Please drink some water.',
        },
      ],
    },
    {
      id: '4',
      name: 'Du lịch',
      emoji: '✈️',
      words: [
        {
          id: '1',
          word: 'Airport',
          pronunciation: '/ˈɛrpɔːrt/',
          meaning: 'Sân bay',
          example: 'The airport is very busy.',
        },
        {
          id: '2',
          word: 'Hotel',
          pronunciation: '/hoʊˈtɛl/',
          meaning: 'Khách sạn',
          example: 'We stayed in a nice hotel.',
        },
      ],
    },
  ];

  if (!selectedTopic) {
    return (
      <div className="vocabulary-screen">
        <h2 className="section-title" style={{ marginBottom: '16px' }}>Chọn chủ đề</h2>
        <div className="vocab-topics">
          {topics.map((topic) => (
            <div
              key={topic.id}
              className="vocab-topic-card"
              onClick={() => setSelectedTopic(topic.id)}
            >
              <div className="vocab-emoji">{topic.emoji}</div>
              <div className="vocab-topic-name">{topic.name}</div>
              <div className="vocab-count">{topic.words.length} từ</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const topic = topics.find(t => t.id === selectedTopic);

  if (quizMode) {
    return (
      <div className="vocabulary-screen">
        <button
          className="btn-secondary"
          onClick={() => setQuizMode(false)}
          style={{ marginBottom: '16px', width: '100%' }}
        >
          <ChevronLeft size={20} /> Quay lại
        </button>
        <h2 className="section-title">Kiểm tra từ vựng</h2>
        <div className="card" style={{ marginTop: '20px' }}>
          <div className="question-text">Dịch từ này sang tiếng Việt:</div>
          <div style={{ fontSize: '24px', fontWeight: '700', color: '#7c3aed', marginBottom: '20px', textAlign: 'center' }}>
            {topic?.words[0].word}
          </div>
          <div className="question-options">
            <button className="option-button">{topic?.words[0].meaning}</button>
            <button className="option-button">Sai đáp án 1</button>
            <button className="option-button">Sai đáp án 2</button>
            <button className="option-button">Sai đáp án 3</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="vocabulary-screen">
      <button
        className="btn-secondary"
        onClick={() => setSelectedTopic(null)}
        style={{ marginBottom: '16px', width: '100%' }}
      >
        <ChevronLeft size={20} /> Quay lại
      </button>
      <h2 className="section-title">{topic?.name}</h2>

      <div className="vocab-table">
        <div className="vocab-table-header">
          <div>Từ vựng</div>
          <div>Phát âm</div>
          <div>Nghĩa</div>
          <div></div>
        </div>
        {topic?.words.map((word) => (
          <div key={word.id} className="vocab-row">
            <div className="vocab-word">{word.word}</div>
            <div className="vocab-pronunciation">{word.pronunciation}</div>
            <div className="vocab-meaning">{word.meaning}</div>
            <button className="vocab-audio-btn">🔊</button>
          </div>
        ))}
      </div>

      <button
        className="btn-primary"
        onClick={() => setQuizMode(true)}
        style={{ width: '100%', marginTop: '20px' }}
      >
        Kiểm tra
      </button>
    </div>
  );
};

export default VocabularyScreen;
