import React from 'react';
import { ChevronRight } from 'lucide-react';

interface Lesson {
  id: string;
  name: string;
  xp: number;
  level: number;
}

const HomeScreen: React.FC = () => {
  const dailyGoal = 65;
  const lessons: Lesson[] = [
    { id: '1', name: 'Bài 1: Giới thiệu bản thân', xp: 10, level: 1 },
    { id: '2', name: 'Bài 2: Hỏi tên', xp: 10, level: 1 },
    { id: '3', name: 'Bài 3: Số đếm', xp: 15, level: 2 },
  ];

  return (
    <div className="home-screen">
      <div className="home-header">
        <h1 className="home-title">Hello! 👋</h1>
        <p className="home-subtitle">Hôm nay bạn đã học được bao nhiêu?</p>
      </div>

      <div className="daily-goal-card">
        <div className="goal-title">Mục tiêu hôm nay</div>
        <div className="goal-progress">{dailyGoal}/100 XP</div>
        <div className="goal-bar">
          <div className="goal-bar-fill" style={{ width: `${dailyGoal}%` }}></div>
        </div>
      </div>

      <div className="lessons-section">
        <h2 className="section-title">Bài học được gợi ý</h2>
        {lessons.map((lesson) => (
          <div key={lesson.id} className="lesson-card">
            <div className="lesson-info">
              <div className="lesson-name">{lesson.name}</div>
              <div className="lesson-xp">+{lesson.xp} XP • Cấp {lesson.level}</div>
            </div>
            <ChevronRight size={20} className="lesson-arrow" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
