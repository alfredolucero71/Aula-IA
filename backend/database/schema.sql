PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,

    email TEXT NOT NULL UNIQUE,

    password_hash TEXT NOT NULL,

    name TEXT NOT NULL,

    role TEXT NOT NULL DEFAULT 'teacher'
        CHECK (
            role IN ('teacher', 'admin')
        ),

    status TEXT NOT NULL DEFAULT 'pending'
        CHECK (
            status IN (
                'pending',
                'approved',
                'suspended',
                'rejected'
            )
        ),

    created_at TEXT NOT NULL
        DEFAULT CURRENT_TIMESTAMP,

    updated_at TEXT NOT NULL
        DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS
idx_users_email
ON users(email);

CREATE INDEX IF NOT EXISTS
idx_users_status
ON users(status);

CREATE INDEX IF NOT EXISTS
idx_users_role
ON users(role);