CREATE DATABASE IF NOT EXISTS taskdb;

USE taskdb;

CREATE TABLE IF NOT EXISTS Tasks(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    descripcion TEXT,
    PRIMARY KEY (id)
);

INSERT INTO Tasks (title, descripcion) VALUES 
    ('Task 1', 'SOME DESCRIPTION'),
    ('Task 2', 'SOME DESCRIPTION 2');