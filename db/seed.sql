INSERT INTO hood (name, zipcode) VALUES ('Northern Liberties', '19123');
INSERT INTO hood (name, zipcode) VALUES ('Center City', '19102');
INSERT INTO hood (name, zipcode) VALUES ('University City', '19104');

-- POST SEEDS
-- Fishtown
INSERT INTO posts (title, body, location, createdAt, updatedAt, HoodId) VALUES ('test test', 'some body text', '701 Gaul St
Philadelphia, PA 19125', "2018-05-30 00:08:31", "2018-05-30 00:08:31", 1);
-- Old City
INSERT INTO posts (title, body, location, createdAt, updatedAt, HoodId) VALUES ('test test', 'some body text', '113 N Bread St
Philadelphia, PA 19106', "2018-05-30 00:08:31", "2018-05-30 00:08:31", 2);
-- Graduate Hospital
INSERT INTO posts (title, body, location, createdAt, updatedAt, HoodId) VALUES ('test test', 'some body text', '1999 Carpenter St
Philadelphia, PA 19146', "2018-05-30 00:08:31", "2018-05-30 00:08:31", 3);
-- Society Hill
INSERT INTO posts (title, body, location, createdAt, updatedAt, HoodId) VALUES ('test test', 'some body text', '210 Pine St
Philadelphia, PA 19106', "2018-05-30 00:08:31", "2018-05-30 00:08:31", 4);
-- Powelton Village
INSERT INTO posts (title, body, location, createdAt, updatedAt, HoodId) VALUES ('test test', 'some body text', '3599 Hamilton St
Philadelphia, PA 19104', "2018-05-30 00:08:31", "2018-05-30 00:08:31", 5);
-- Fairmount
INSERT INTO posts (title, body, location, createdAt, updatedAt, HoodId) VALUES ('test test', 'some body text', '889 N 21st St
Philadelphia, PA 19130', "2018-05-30 00:08:31", "2018-05-30 00:08:31", 6);