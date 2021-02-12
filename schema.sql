 
# Schema
DROP DATABASE IF EXISTS _db;
CREATE DATABASE quilava_db;
USE quilava_db;
CREATE TABLE artists
(
    id int NOT NULL AUTO_INCREMENT,
    artist_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);
SELECT * FROM artists;

