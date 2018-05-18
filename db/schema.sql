-- Drops the blogger if it exists currently --
DROP DATABASE IF EXISTS bulletin;
-- Creates the "blogger" database --
CREATE DATABASE bulletin;

USE bulletin;
CREATE TABLE neighborhoods(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  hoodname VARCHAR(100),
  lat VARCHAR(100),
  lon VARCHAR(100),
  PRIMARY KEY (id)
);

INSERT INTO neighborhoods (hoodname, lat, lon) values ('Fishtown', '39.972095', '-75.129644');
INSERT INTO neighborhoods (hoodname, lat, lon) values ('Old City', '39.952482', '-75.143034');
INSERT INTO neighborhoods (hoodname, lat, lon) values ('Graduate Hospital', '39.942489', '-75.173461');
INSERT INTO neighborhoods (hoodname, lat, lon) values ('Society Hill', '39.943731', '-75.147841');
INSERT INTO neighborhoods (hoodname, lat, lon) values ('Powelton Village', '39.962055', '-75.192044');
INSERT INTO neighborhoods (hoodname, lat, lon) values ('Fairmount', '39.968239', ' -75.169685');

