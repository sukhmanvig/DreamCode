CREATE TABLE users(
    users_id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE, 
    email VARCHAR(255) UNIQUE,
    password VARCHAR(255),
    bio VARCHAR(255),
    date_created DATE
);

CREATE TABLE leaderboard(
	uid INTEGER PRIMARY KEY,
	points INTEGER,
	FOREIGN KEY (uid)
	REFERENCES users (users_id)
    ON DELETE CASCADE
);
