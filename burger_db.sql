CREATE DATABASE burgers_db; 
USE burgers_db; 

DROP TABLE IF EXISTS burgers; 
CREATE TABLE burgers (
	id int NOT NULL AUTO_INCREMENT, 
    burger_name VARCHAR(255) NOT NULL, 
    devoured BOOL DEFAULT false, 
    PRIMARY KEY(id)
);

