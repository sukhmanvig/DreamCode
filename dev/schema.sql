DROP TABLE player CASCADE;
CREATE TABLE player (
	id int PRIMARY KEY, -- Can be made serial
	username varchar(50) NOT NULL,
	password varchar(50),
	xp int CHECK(xp >= 0)
);
INSERT INTO player VALUES(0, "#MASTER", null, 0); -- Default player

DROP TABLE playerinfo CASCADE;
CREATE TABLE playerinfo (
	id int PRIMARY KEY,
);

DROP TABLE follow CASCADE;
CREATE TABLE follow (
	following_id int NOT NULL,
	followed_id  int NOT NULL,
	CONSTRAINT FK_following_id FOREIGN KEY(following_id) REFERENCES player(id),
	CONSTRAINT FK_followed_id  FOREIGN KEY(followed_id)  REFERENCES player(id),
	PRIMARY KEY(following_id, followed_id)
	-- A friend is someone who mutually follows each other.
);

DROP TABLE quest;
CREATE TABLE quest (
	id int PRIMARY KEY,
	name varchar(30) NOT NULL
);

DROP TABLE prerequuisite;
CREATE TABLE prerequisite (
	prereq_id int NOT NULL,
	nextquest_id int NOT NULL,
	CONSTRAINT FK_prereq_id FOREIGN KEY(prereq_id) REFERENCES quest(id),
	CONSTRAINT FK_nextquest_id FOREIGN KEY(nextquest_id) REFERENCES quest(id),
	PRIMARY KEY(prereq_id, nextquest_id)
);

DROP TABLE leaderboard CASCADE;
CREATE TABLE leaderboard (
	datecompleted datetime, -- Can be null
	player_id, -- Can be null
	quest_id NOT NULL,
	CONSTRAINT FK_player_id FOREIGN KEY(player_id) REFERENCES player(id),
	CONSTRAINT FK_quest_id FOREIGN KEY(quest_id) REFERENCES quest(id)
);