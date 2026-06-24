import React, { useState, useEffect } from 'react';
import HomeScreen from './screens/home/HomeScreen';
import LearnScreen from './screens/learn/LearnScreen';
import PracticeScreen from './screens/practice/PracticeScreen';
import VocabularyScreen from './screens/vocabulary/VocabularyScreen';
import StatsScreen from './screens/stats/StatsScreen';
import GamesScreen from './screens/games/GamesScreen';
import BottomNav from './components/BottomNav';
import './styles/global.css';

type TabType = 'home' | 'learn' | 'practice' | 'vocabulary' | 'stats' | 'games';

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [userData, setUserData] = useState({
    streak: 7,
    gems: 245,
    hearts: 5,
    totalXp: 1250,
  });

  const renderScreen = () => {
    switch (activeTab) {
      case 'home':
        return <HomeScreen />;
      case 'learn':
        return <LearnScreen />;
      case 'practice':
        return <PracticeScreen />;
      case 'vocabulary':
        return <VocabularyScreen />;
      case 'stats':
        return <StatsScreen />;
      case 'games':
        return <GamesScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <div className="app-container">
      <div className="status-bar">
        <div className="status-item">
          <span>🔥</span> {userData.streak}
        </div>
        <div className="status-item">
          <span>💎</span> {userData.gems}
        </div>
        <div className="status-item">
          <span>❤️</span> {userData.hearts}
        </div>
      </div>

      <div className="screen-container">
        {renderScreen()}
      </div>

      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

export default App;
