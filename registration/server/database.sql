CREATE DATABASE LoginSystem;

CREATE TABLE users(
    users_id SERIAL PRIMARY KEY,
    username VARCHAR(255),
    password VARCHAR(255)
);