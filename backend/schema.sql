-- PhilNITS / ITPEC FE Examination Database Schema

-- 1. Subject B (Afternoon) Scenario Context Table
CREATE TABLE IF NOT EXISTS pm_scenarios (
    scenario_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    exam_year INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    context_text TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_pm_scenarios_exam_year ON pm_scenarios(exam_year);

-- 2. Subject B (Afternoon) Dependent Sub-Questions Table
CREATE TABLE IF NOT EXISTS pm_questions (
    question_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    scenario_id UUID REFERENCES pm_scenarios(scenario_id) ON DELETE CASCADE,
    question_number INT NOT NULL,
    question_body JSONB NOT NULL,
    requires_pseudocode BOOLEAN DEFAULT FALSE,
    pseudocode_block TEXT,
    trace_table_spec JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_pm_questions_scenario_id ON pm_questions(scenario_id);

-- 3. Subject A (Morning) Discrete Questions Table
CREATE TABLE IF NOT EXISTS morning_questions (
    question_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    category VARCHAR(100) NOT NULL,
    subdomain VARCHAR(100) NOT NULL,
    exam_year INT NOT NULL,
    question_text TEXT NOT NULL,
    options JSONB NOT NULL,
    correct_index INT NOT NULL,
    explanation TEXT NOT NULL,
    difficulty_weight FLOAT DEFAULT 1.0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_morning_questions_category ON morning_questions(category);
CREATE INDEX IF NOT EXISTS idx_morning_questions_subdomain ON morning_questions(subdomain);

-- 4. Leitner Spaced Repetition User State Table
CREATE TABLE IF NOT EXISTS user_spaced_repetition (
    user_id UUID NOT NULL,
    question_id UUID NOT NULL,
    current_box INT NOT NULL DEFAULT 1 CHECK (current_box BETWEEN 1 AND 5),
    next_review_date DATE NOT NULL,
    last_reviewed_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user_id, question_id)
);

CREATE INDEX IF NOT EXISTS idx_user_spaced_repetition_due ON user_spaced_repetition(user_id, next_review_date);

-- 5. User Telemetry Interaction Logs Table (High-Throughput Buffer)
CREATE TABLE IF NOT EXISTS user_telemetry_logs (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL,
    question_id UUID NOT NULL,
    is_correct BOOLEAN NOT NULL,
    current_box INT NOT NULL,
    time_taken_seconds INT DEFAULT 0,
    processed BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_user_telemetry_unprocessed ON user_telemetry_logs(processed) WHERE processed = FALSE;

-- 6. Anki Flashcards Table
CREATE TABLE IF NOT EXISTS flashcards (
    card_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    topic VARCHAR(100) NOT NULL,
    front_text TEXT NOT NULL,
    back_text TEXT NOT NULL,
    diagram_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_flashcards_topic ON flashcards(topic);

-- 7. User Answer History & Analytics
CREATE TABLE IF NOT EXISTS user_answer_history (
    history_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    username VARCHAR(100) NOT NULL,
    question_id UUID NOT NULL,
    is_correct BOOLEAN NOT NULL,
    time_taken_seconds INT DEFAULT 0,
    answered_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    exam_type VARCHAR(20) NOT NULL CHECK (exam_type IN ('subject_a', 'subject_b', 'flashcard', 'leitner'))
);

CREATE INDEX IF NOT EXISTS idx_user_answer_history_username ON user_answer_history(username);
CREATE INDEX IF NOT EXISTS idx_user_answer_history_question ON user_answer_history(question_id);
CREATE INDEX IF NOT EXISTS idx_user_answer_history_type ON user_answer_history(exam_type);

-- 8. User Bookmarks
CREATE TABLE IF NOT EXISTS user_bookmarks (
    bookmark_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    username VARCHAR(100) NOT NULL,
    question_id UUID NOT NULL,
    bookmarked_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(username, question_id)
);

CREATE INDEX IF NOT EXISTS idx_user_bookmarks_username ON user_bookmarks(username);

-- 9. User Preferences & Settings
CREATE TABLE IF NOT EXISTS user_preferences (
    username VARCHAR(100) PRIMARY KEY,
    theme VARCHAR(20) DEFAULT 'dark',
    leitner_mode VARCHAR(50) DEFAULT 'study',
    leitner_browse_box INT DEFAULT 1,
    weak_area_spotlight BOOLEAN DEFAULT TRUE,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 10. AI Generated Questions (Low Priority)
CREATE TABLE IF NOT EXISTS ai_generated_questions (
    question_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    username VARCHAR(100) NOT NULL,
    question_type VARCHAR(20) NOT NULL CHECK (question_type IN ('subject_a', 'subject_b')),
    topic VARCHAR(255) NOT NULL,
    question_data JSONB NOT NULL,
    user_feedback INT DEFAULT 0 CHECK (user_feedback BETWEEN -1 AND 1),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    used_count INT DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_ai_generated_questions_username ON ai_generated_questions(username);
CREATE INDEX IF NOT EXISTS idx_ai_generated_questions_type ON ai_generated_questions(question_type);

-- 11. Question Attempt Tracking (to enable "only AI when base questions done")
CREATE TABLE IF NOT EXISTS question_attempt_tracking (
    tracking_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    username VARCHAR(100) NOT NULL,
    question_id UUID NOT NULL,
    is_ai_generated BOOLEAN DEFAULT FALSE,
    attempt_count INT DEFAULT 0,
    last_attempted TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(username, question_id)
);

CREATE INDEX IF NOT EXISTS idx_question_attempt_tracking_username ON question_attempt_tracking(username);
