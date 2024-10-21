CREATE DATABASE IF NOT EXISTS users_db;
USE users_db;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role ENUM('admin', 'editor', 'client') NOT NULL
);

INSERT INTO users (name, email, password, role) 
VALUES ('Juan', 'juan@example.com', '$2a$12$28jQCqAuItLXjF8WRJmeu.G6tk9U/9bE3.aVa4w5sDvQZKgiJil7K', 'admin');

INSERT INTO users (name, email, password, role) 
VALUES ('Maria', 'maria@example.com', '$2a$12$28jQCqAuItLXjF8WRJmeu.G6tk9U/9bE3.aVa4w5sDvQZKgiJil7K', 'editor');

INSERT INTO users (name, email, password, role) 
VALUES ('Luis', 'luis@example.com', '$2a$12$28jQCqAuItLXjF8WRJmeu.G6tk9U/9bE3.aVa4w5sDvQZKgiJil7K', 'client');
