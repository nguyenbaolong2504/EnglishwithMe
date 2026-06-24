import React from 'react';
import {
  Home,
  BookOpen,
  Dumbbell,
  Lightbulb,
  BarChart3,
  Gamepad2,
} from 'lucide-react';
import '../styles/components.css';

type TabType = 'home' | 'learn' | 'practice' | 'vocabulary' | 'stats' | 'games';

interface BottomNavProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'home' as TabType, label: 'Trang chủ', icon: Home },
    { id: 'learn' as TabType, label: 'Học', icon: BookOpen },
    { id: 'practice' as TabType, label: 'Luyện tập', icon: Dumbbell },
    { id: 'vocabulary' as TabType, label: 'Từ vựng', icon: Lightbulb },
    { id: 'stats' as TabType, label: 'Thống kê', icon: BarChart3 },
    { id: 'games' as TabType, label: 'Trò chơi', icon: Gamepad2 },
  ];

  return (
    <nav className="bottom-nav">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        return (
          <button
            key={tab.id}
            className={`nav-item ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
            title={tab.label}
          >
            <Icon size={24} />
            <span className="nav-label">{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default BottomNav;
