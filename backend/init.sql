-- Users table
CREATE TABLE IF NOT EXISTS users (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL,
    streak INT DEFAULT 0,
    total_xp INT DEFAULT 0,
    gems INT DEFAULT 0,
    hearts INT DEFAULT 5,
    level VARCHAR(50) DEFAULT 'BEGINNER',
    avatar VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_email (email),
    INDEX idx_username (username)
);

-- Lessons table
CREATE TABLE IF NOT EXISTS lessons (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    topic VARCHAR(100) NOT NULL,
    checkpoint INT NOT NULL,
    difficulty VARCHAR(50) DEFAULT 'BEGINNER',
    xp_reward INT NOT NULL,
    content LONGTEXT,
    type VARCHAR(50) DEFAULT 'LESSON',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_topic (topic),
    INDEX idx_checkpoint (checkpoint)
);

-- User Progress table
CREATE TABLE IF NOT EXISTS user_progress (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    user_id BIGINT NOT NULL,
    lesson_id BIGINT NOT NULL,
    xp_earned INT DEFAULT 0,
    completed BOOLEAN DEFAULT FALSE,
    starred BOOLEAN DEFAULT FALSE,
    completed_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (lesson_id) REFERENCES lessons(id) ON DELETE CASCADE,
    UNIQUE KEY uk_user_lesson (user_id, lesson_id),
    INDEX idx_user_id (user_id),
    INDEX idx_lesson_id (lesson_id)
);

-- Vocabulary table
CREATE TABLE IF NOT EXISTS vocabulary (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    word VARCHAR(100) NOT NULL,
    pronunciation VARCHAR(100),
    meaning_en TEXT,
    meaning_vi TEXT,
    example_en TEXT,
    example_vi TEXT,
    category VARCHAR(100),
    level VARCHAR(50) DEFAULT 'BEGINNER',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_category (category),
    INDEX idx_level (level)
);

-- Insert sample lessons
INSERT INTO lessons (title, description, topic, checkpoint, difficulty, xp_reward, type) VALUES
('Giới thiệu bản thân', 'Học cách giới thiệu bản thân bằng tiếng Anh', 'Gia đình', 1, 'BEGINNER', 50, 'LESSON'),
('Hỏi tên', 'Học cách hỏi và trả lời tên', 'Gia đình', 1, 'BEGINNER', 50, 'LESSON'),
('Số đếm', 'Học các số từ 1-20', 'Gia đình', 2, 'BEGINNER', 100, 'LESSON'),
('Trường học - Cơ bản', 'Từ vựng cơ bản về trường học', 'Trường học', 1, 'BEGINNER', 50, 'LESSON'),
('Thực phẩm và đồ uống', 'Học tên các thực phẩm', 'Ăn uống', 1, 'BEGINNER', 50, 'LESSON');

-- Insert sample vocabulary
INSERT INTO vocabulary (word, pronunciation, meaning_en, meaning_vi, example_en, example_vi, category, level) VALUES
('hello', '/həˈloʊ/', 'a greeting', 'lời chào', 'Hello, how are you?', 'Xin chào, bạn khỏe không?', 'greetings', 'BEGINNER'),
('apple', '/ˈæp.əl/', 'a red fruit', 'quả táo', 'I eat an apple every day', 'Tôi ăn một quả táo mỗi ngày', 'food', 'BEGINNER'),
('teacher', '/ˈtiːtʃər/', 'a person who teaches', 'giáo viên', 'My teacher is kind', 'Giáo viên của tôi rất tốt bụng', 'school', 'BEGINNER');
