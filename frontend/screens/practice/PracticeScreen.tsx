import React, { useState } from 'react';
import { Volume2, Mic, Upload, ChevronLeft } from 'lucide-react';

type PracticeMode = 'skills' | 'camera' | 'tests';

interface Skill {
  id: string;
  name: string;
  emoji: string;
  topics: string[];
}

const PracticeScreen: React.FC = () => {
  const [mode, setMode] = useState<PracticeMode>('skills');
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [showCamera, setShowCamera] = useState(false);
  const [cameraResult, setCameraResult] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(false);

  const skills: Skill[] = [
    { id: '1', name: 'Nghe', emoji: '👂', topics: ['Gia đình', 'Trường học', 'Ăn uống'] },
    { id: '2', name: 'Nói', emoji: '🗣️', topics: ['Hội thoại', 'Phát âm', 'Tốc độ'] },
    { id: '3', name: 'Đọc', emoji: '📖', topics: ['Đoạn văn', 'Bài viết', 'Tin tức'] },
    { id: '4', name: 'Viết', emoji: '✍️', topics: ['Email', 'Bài luận', 'Chat'] },
  ];

  const handleScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setCameraResult({
        en: 'Apple',
        vi: 'Quả táo',
        pronunciation: '/ˈæp.əl/',
      });
      setIsScanning(false);
    }, 2000);
  };

  const handleUploadPDF = () => {
    setTimeout(() => {
      alert('PDF uploaded! Generating 10 practice questions...');
    }, 500);
  };

  if (mode === 'skills' && !selectedSkill) {
    return (
      <div className="practice-screen">
        <h2 className="section-title" style={{ marginBottom: '16px' }}>Luyện tập kỹ năng</h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="skill-card"
              onClick={() => setSelectedSkill(skill.id)}
            >
              <div className="skill-icon">{skill.emoji}</div>
              <div className="skill-name">{skill.name}</div>
              <div className="skill-level">Level 5</div>
            </div>
          ))}
        </div>

        <h2 className="section-title" style={{ marginTop: '24px', marginBottom: '16px' }}>
          Công cụ khác
        </h2>
        <div className="practice-modes">
          <button
            className="mode-button"
            onClick={() => setMode('camera')}
          >
            <div className="mode-icon">📷</div>
            <div className="mode-label">Camera AI</div>
          </button>
          <button
            className="mode-button"
            onClick={() => setMode('tests')}
          >
            <div className="mode-icon">📝</div>
            <div className="mode-label">Luyện đề</div>
          </button>
        </div>
      </div>
    );
  }

  if (mode === 'camera') {
    return (
      <div className="practice-screen">
        <button
          className="btn-secondary"
          onClick={() => setMode('skills')}
          style={{ marginBottom: '16px', width: '100%' }}
        >
          <ChevronLeft size={20} /> Quay lại
        </button>

        <h2 className="section-title">Camera AI Nhận Diện</h2>

        {!showCamera ? (
          <button
            className="btn-primary"
            onClick={() => setShowCamera(true)}
            style={{ width: '100%', marginBottom: '16px' }}
          >
            Mở Camera
          </button>
        ) : (
          <>
            <div className="camera-scanner">
              <div className={`scanning-animation ${isScanning ? '' : ''}`}></div>
              <div className="scanner-crosshair"></div>
              <div style={{ color: '#fff', textAlign: 'center', paddingTop: '160px' }}>
                Đặt vật thể vào khung
              </div>
            </div>
            <button
              className="btn-primary"
              onClick={handleScan}
              disabled={isScanning}
              style={{ width: '100%' }}
            >
              {isScanning ? 'Đang nhận diện...' : 'Nhận diện'}
            </button>
          </>
        )}

        {cameraResult && (
          <div className="card" style={{ marginTop: '16px' }}>
            <div style={{ fontSize: '24px', fontWeight: '700', color: '#1f2937', marginBottom: '8px' }}>
              {cameraResult.en}
            </div>
            <div style={{ fontSize: '14px', color: '#6b7280', marginBottom: '8px' }}>
              Tiếng Việt: {cameraResult.vi}
            </div>
            <div style={{ fontSize: '12px', color: '#9ca3af', marginBottom: '12px', fontFamily: 'monospace' }}>
              Phát âm: {cameraResult.pronunciation}
            </div>
            <button className="btn-secondary" style={{ width: '100%' }}>
              <Volume2 size={16} style={{ marginRight: '8px' }} /> Nghe phát âm
            </button>
          </div>
        )}
      </div>
    );
  }

  if (mode === 'tests') {
    return (
      <div className="practice-screen">
        <button
          className="btn-secondary"
          onClick={() => setMode('skills')}
          style={{ marginBottom: '16px', width: '100%' }}
        >
          <ChevronLeft size={20} /> Quay lại
        </button>

        <h2 className="section-title">Luyện Đề AI</h2>

        <div className="card">
          <div style={{ fontWeight: '700', marginBottom: '12px' }}>Upload PDF tiếng Anh</div>
          <button
            className="btn-primary"
            onClick={handleUploadPDF}
            style={{ width: '100%', marginBottom: '12px' }}
          >
            <Upload size={16} style={{ marginRight: '8px' }} /> Chọn File
          </button>
        </div>

        <div className="card" style={{ marginTop: '16px' }}>
          <div style={{ fontWeight: '700', marginBottom: '12px' }}>Hoặc chọn đề mẫu</div>
          {['TOEIC Sample', 'IELTS Sample', 'TOEFL Sample'].map((test) => (
            <button
              key={test}
              className="btn-secondary"
              style={{ width: '100%', marginBottom: '8px' }}
            >
              {test}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return null;
};

export default PracticeScreen;
