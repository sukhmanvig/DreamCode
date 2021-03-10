CREATE TABLE users(
    users_id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE, 
    email VARCHAR(255) UNIQUE,
    password VARCHAR(255)
);
