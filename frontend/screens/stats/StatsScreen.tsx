import React from 'react';

const StatsScreen: React.FC = () => {
  const stats = [
    { label: 'Chuỗi học', value: 7, icon: '🔥' },
    { label: 'Điểm XP', value: 1250, icon: '⭐' },
    { label: 'Hạng đấu', value: 42, icon: '🏆' },
    { label: 'Ngày học', value: 15, icon: '📅' },
  ];

  const skills = [
    { name: 'Nghe', level: 5, xp: 320, progress: 80 },
    { name: 'Nói', level: 4, xp: 280, progress: 65 },
    { name: 'Đọc', level: 6, xp: 380, progress: 90 },
    { name: 'Viết', level: 3, xp: 270, progress: 55 },
  ];

  const badges = [
    { name: 'First Steps', emoji: '👣', earned: true },
    { name: '7 Days', emoji: '🔥', earned: true },
    { name: 'Century', emoji: '💯', earned: false },
    { name: 'Master', emoji: '👑', earned: false },
  ];

  return (
    <div className="stats-screen">
      <h2 className="section-title" style={{ marginBottom: '16px' }}>Thống kê của bạn</h2>

      <div className="stat-grid">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-card">
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>{stat.icon}</div>
            <div className="stat-number">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>

      <h2 className="section-title" style={{ marginTop: '24px', marginBottom: '16px' }}>
        Tiến độ kỹ năng
      </h2>
      {skills.map((skill) => (
        <div key={skill.name} className="skill-progress-card">
          <div className="skill-progress-header">
            <div className="skill-progress-name">{skill.name}</div>
            <div className="skill-progress-level">Cấp {skill.level}</div>
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${skill.progress}%` }}
            ></div>
          </div>
          <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '4px' }}>
            {skill.xp} XP
          </div>
        </div>
      ))}

      <h2 className="section-title" style={{ marginTop: '24px', marginBottom: '16px' }}>
        Huy hiệu
      </h2>
      <div className="badges-grid">
        {badges.map((badge) => (
          <div key={badge.name} className={`badge-item ${badge.earned ? 'earned' : ''}`}>
            <div className="badge-icon">{badge.emoji}</div>
            <div className="badge-name">{badge.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsScreen;
