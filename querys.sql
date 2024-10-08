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
VALUES ('Juan', 'juan@example.com', '$2y$10$gk.pATAiSD7552BZYGnyTOq81bxlrGYz.NF2Lx0825QZCGNBAl1rS', 'admin');

INSERT INTO users (name, email, password, role) 
VALUES ('Maria', 'maria@example.com', '$2y$10$gk.pATAiSD7552BZYGnyTOq81bxlrGYz.NF2Lx0825QZCGNBAl1rS', 'editor');

INSERT INTO users (name, email, password, role) 
VALUES ('Luis', 'luis@example.com', '$2y$10$gk.pATAiSD7552BZYGnyTOq81bxlrGYz.NF2Lx0825QZCGNBAl1rS', 'client');
