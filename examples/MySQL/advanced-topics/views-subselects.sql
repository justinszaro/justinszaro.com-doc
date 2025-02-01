use world;
DROP TABLE IF EXISTS t;
CREATE TABLE t ( a TEXT, b TEXT);
INSERT INTO t VALUES ( 'NY0123', 'US4567' );
INSERT INTO t VALUES ( 'AZ9437', 'GB1234' );
INSERT INTO t VALUES ( 'CA1279', 'FR5678' );
SELECT * FROM t;

SELECT SUBSTR(a, 1, 2) AS STate, SUBSTR(a, 3) AS SCode,
    SUBSTR(b, 1, 2) as Country, SUBSTR(b, 3) AS CCode FROM t;

SELECT ss.CCode FROM (
    SELECT SUBSTR(a, 1, 2) AS STate, SUBSTR(a, 3) AS SCode,
    SUBSTR(b, 1, 2) as Country, SUBSTR(b, 3) AS CCode FROM t
) as ss
JOIN Country AS co ON co.Code2 == ss.Country;

DROP TABLE t;

USE album;

SELECT DISTINCT album_id FROM track WHERE duration <= 90;

SELECT * FROM album WHERE id IN (
    SELECT DISTINCT album_id FROM track WHERE duration <= 90
);

SELECT a.title as album, a.artist, t.track_number as seq, t.title, t.duration AS secs
    FROM album AS a
    JOIN track as t 
        ON t.album_id = a.id 
    WHERE a.id IN (SELECT DISTINCT album_id WHERE track WHERE duration <=90)
    ORDER BY a.title, t.track_number;

-- OR

SELECT a.title as album, a.artist, t.track_number as seq, t.title, t.duration AS secs
    FROM album AS a
    JOIN (SELECT DISTINCT album_id, track_number, duration, title WHERE track WHERE duration <=90) as t 
        ON t.album_id = a.id 
    ORDER BY a.title, t.track_number;

-- Creating Views:
USE album;

SELECT id, album_id, title, track_number, duration DIV 60 as m, duration MOD 60 AS s FROM track;

CREATE VIEW track_view AS
    SELECT id, album_id, title, track_number, duration DIV 60 as m, duration MOD 60 AS s FROM track; -- Creates a view:

SELECT * FROM track_view;

SELECT a.title AS album, a.artist, t.track_number AS seq, t.title, t.m, t.s 
    FROM album AS a 
    JOIN trackView as t 
        ON t.album_id = a.id 
    ORDER BY a.title, t.track_number;

USE album;

CREATE VIEW joinedAlbum AS
SELECT a.artist AS artist,
    a.title AS album,
    t.title AS track,
    t.track_number AS trackno,
    t.duration DIV 60 AS m,
    t.duration MOD 60 AS s,
FROM track AS t 
    JOIN album AS a 
        ON a.id = t.album_id
    ORDER BY a.artist, t.track_number;

SELECT * FROM joinedAlbum WHERE artist = 'Jimi Hendrix';

DROP VIEW IF EXISTS joinedAlbum;

