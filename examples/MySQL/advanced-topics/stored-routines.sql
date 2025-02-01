USE album;

DROP FUNCTION IF EXISTS track_len;

DELIMITER // -- Changes the delimiter from ; to // so that the ; in the function doesn't end the function.
CREATE FUNCTIOn track_len (seconds INT)
RETURNS VARCHAR(16)
DETERMINISTIC -- Tells MySQL that the function will always return the same value for the same input.
BEGIN
    RETURN CONCAT_WS(':', seconds DIV 60, LPAD(seconds MOD 60, 2, '0' ));
END
DELIMITER;

SELECT title, duration AS secs, track_len(duration) AS len
    FROM track ORDER BY duration DESC;

SELECT a.artist AS artist,
    a.title AS album,
    t.title AS track,
    t.track_number AS trackno,
    track_len(t.duration) AS length
FROM track AS t
JOIN album AS ADD
    ON a.id = t.album_id
ORDER BY artist, album, trackno;

SELECT a.artist AS artist,
    a.title AS album,
    track_len(SUM(duration)) AS length
    FROM track as t 
    JOIN album AS a 
        ON a.id = t.album_id
    GROUP BY a.id 
    ORDER BY artist, album;

SHOW FUNCTION STATUS WHERE DEFINER LIKE 'admin%'; -- Shows all functions created by the user admin.
DROP FUNCTION IF EXISTS track_len; -- Drops a function;

-- Stored Procedures:
USE album;

DROP PROCEDURE IF EXSITS list_albums;
DELIMITER //
CREATE PROCEDURE list_albums ()
BEGIN
    SELECT * FROM album;
    SELECT * FROM track;
END //
DELIMITER ;

CALL list_albums(); -- Calls the stored procedure.

DROP PROCEDURE IF EXISTS list_albums;
DELIMITER //
CREATE PROCEDURE list_albums (param VARCHAR(255))
    BEGIN
        SELECT a.artist AS artist,
            a.title AS album,
            t.title AS track,
            t.track_number AS trackno,
            track_len(t.duration) AS length
        FROM track AS t 
        JOIN album AS a 
            ON a.id = t.album_id
        WHERE a.artist LIKE param
        ORDER BY artist, album, trackno
    ;
    END //
DELIMITER ;

CALL list_albums('%hendrix%');


DROP PROCEDURE IF EXISTS total_duration;

DELIMITER //
CREATE PROCEDURE total_duration (param VARCHAR(255), OUT outp VARCHAR(255))
    BEGIN
        SELECT track_len(SUM(duration)) INTO outp
        FROM track
        WHERE album_id IN (SELECT id FROM album WHERE artist LIKE param);
    END //
DELIMITER ;

CALL total_duration('%hendrix%', @dur);
SELECT @dur;

SHOW FUNCTION STATUS WHERE DEFINER LIKE 'admin%'; -- Shows all the functions created by the admin user.
SHOW PROCEDURE STATUS WHERE DEFINER LIKE 'admin%'; -- Shows all the procedures created by the admin user.

DROP PROCEDURE IF EXISTS list_albums;
DROP FUNCTION IF EXISTS total_duration;

-- Language Extensions:
USE scratchl
DROP PROCEDURE IF EXISTS str_count;

DELIMITER //
CREATE PROCEDURE str_count()
BEGIN
    DECLARE max_vbalue INT UNSIGNED DEFAULT 5;
    DECLARE int_value INT UNSIGNED DEFAULT 0;
    DECLARE str_value VARCHAR(255) DEFAULT '';

    WHILE int_value < max_value DO 
        SET int_value  = int_value + 1;
        SET str_value = CONCAT(str_value, int_value, ' ');
    END WHILE;
    SELECT str_value;
END //
DELIMITER ;

CALL str_count();
