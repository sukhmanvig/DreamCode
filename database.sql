CREATE DATABASE LoginSystem;

CREATE TABLE users(
    users_id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE, 
    email VARCHAR(255) UNIQUE,
    password VARCHAR(255),
    bio VARCHAR(255),
    date_created DATE
);

CREATE TABLE playerstats (
	id int PRIMARY KEY,
    name VARCHAR(30),
    birthday DATE,
    xp int CHECK(xp >= 0),
    CONSTRAINT FK_id FOREIGN KEY(id) REFERENCES users(user_id)
);

CREATE TABLE emails (
    id int,
    email VARCHAR(255) PRIMARY KEY,
    CONSTRAINT FK_id FOREIGN KEY(id) REFERENCES users(user_id)
);

CREATE TABLE follow (
	following_id int NOT NULL,
	followed_id  int NOT NULL,
	CONSTRAINT FK_following_id FOREIGN KEY(following_id) REFERENCES player(id),
	CONSTRAINT FK_followed_id  FOREIGN KEY(followed_id)  REFERENCES player(id),
	PRIMARY KEY(following_id, followed_id)
	-- A friend is someone who mutually follows each other.
);

CREATE TABLE quest (
	id int PRIMARY KEY,
	name varchar(30) NOT NULL
);

CREATE TABLE prerequisite (
	prereq_id int NOT NULL,
	nextquest_id int NOT NULL,
	CONSTRAINT FK_prereq_id FOREIGN KEY(prereq_id) REFERENCES quest(id),
	CONSTRAINT FK_nextquest_id FOREIGN KEY(nextquest_id) REFERENCES quest(id),
	PRIMARY KEY(prereq_id, nextquest_id)
);

CREATE TABLE leaderboard (
	datecompleted datetime, -- Can be null
	player_id int, -- Can be null
	quest_id int NOT NULL,
	CONSTRAINT FK_player_id FOREIGN KEY(player_id) REFERENCES player(id),
	CONSTRAINT FK_quest_id FOREIGN KEY(quest_id) REFERENCES quest(id)
);