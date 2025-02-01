USE scratch;

DROP TABLE IF EXISTS text;

CREATE TABLE IF test (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    string1 VARCHAR(128) UNIQUE,
    string2 VARCHAR(128),
    INDEX i_str2 (string2) -- Creates an index on a created column (Can have the unique keyword in front of it)
);

CREATE INDEX i_str2 ON test(string2); -- Creates a new index after table creation.
-- CREATE INDEX <name> ON <table>(<column>);

SHOW INDEX FROM test; -- Will show all current indexes in the current database.
SHOW INDEXES FROM test; -- Same as above.
SHOW INDEXES IN test; -- Same as above.

SELECT DISTINCT table_name, index_name FROM information_schema.statistics WHERE table_schema = 'scratch'; -- Will show all indexes in the listed database.

DESCRIBE test; -- Will describe the selected table.

DROP INDEX i_str2 ON test; -- Will drop the selected index from the selected table.

CREATE TABLE multi_index (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    string1 VARCHAR(128),
    string2 VARCHAR(128),
    INDEX twostrs (string1,string2),
);

INSERT INTO multi_index (string1, string2) VALUES ('foo', 'bar'), ('foo', 'baz'), ('foo', 'qux'), ('foo', 'quux'), ('foo', 'corge'), ('foo', 'grault'), ('foo', 'garply'), ('foo', 'waldo'), ('foo', 'fred'), ('foo', 'plugh'), ('foo', 'xyzzy'), ('foo', 'thud');
SELECT string1, string2 FROM test ORDER BY string1, string2;

SHOW INDEX FROM test; 

EXPLAIN SELECT string1, string2 FROM test ORDER BY string1, string2; -- Will execute the query and then explain how it was executed.

DROP TABLE multi_index;

