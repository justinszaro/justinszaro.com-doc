---
id: MySQL Advanced Topics
tags:
  - mysql
---

# MySQL Advanced Topics

## Why Index?

- Index - a small data structure that can rapidly locate an item in a larger data structure.
- Most databases use a form of binary tree for their indexes
  - Drastically reduces the number of comparisons
- Index Use Cases:
  - Rapid Lookups
  - Enforcing Queries
  - Ordered Queries
- Costs of Indexing
  - Each write operation corresponds with one or more write operations in the index.
  - Storage Space
    - Indexes take space!
- When to use indexes
  - Primary Keys
  - Columns used for `ORDER BY`
  - Columns used in `WHERE` clauses
    - `WHERE col = value`
    - `WHERE col > value`
- Indexes are dropped when a table is dropped.
- Schema and databases are terms that are used interchangeably.

## Views & Subselects

- Views are just saved queries that can be used like tables. This is fantastic when you know a query is going to be used over and over again.

## Stored Routines

- Stored Routine - A set of SQL statements that are stored on a database server and can be used by any client with permissions to use them.
- Benefits of stored routines:
  - Normalized operations
  - Centralized Maintenance
  - Reduced Traffic between client and server
  - Enhanced security: allows clients to interact with the database with reduced permissions
- Drawbacks of stored routines:
  - Migrations can be way more costly.
  - Maintenance Challenges
- Two types of stored routines:
  - Functions:
    - Functions return a value.
  - Procedures:
    - Procedures are called separately using the `CALL` statement.
    - Can return result sets or result variables.

### Creating a Stored Function

```sql
CREATE FUNCTION testfunc ( s VARCHAR(255) )
RETURNS VARCHAR(255)
    BEGIN
        RETURN CONCAT( 'Hello, ', s, '!' );
    END;

SELECT testfunc('Bill'); -- Hello, Bill!
```

### Creating a Stored Procedure

```sql
CREATE PROCEDURE testproc ( n VARCHAR(16) )
BEGIN
    SELECT CONCAT( 'Hello, ', n, '!' );
END;

CALL testproc('Bill'); -- Hello, Bill!
```

## Transactions

- Transactions: a group of operations that are handled as one unit of work.
- If any of the operations fails, the entire group of operations is considered failed and the database returns to its original state.

```sql
BEGIN TRANSACTION;
  INSERT INTO TABLE1;
  INSERT INTO TABLE2;
  SELECT *;
COMMIT;
```

- Transactions are used for concurrent operations.
  - Each transaction for multiple people will be treated as its own transaction.
- It also improves performance when there are numerous write operations.
- For 10000 rows, the performance is about 10-1.

## Triggers

- Operations that are automatically performed when a specific database action occurs.
- `FOR EACH ROW` is required.
- `NEW.` will allow you to access the new row that is being added.
- `SHOW TRIGGERS;` - Show all triggers associated with a database.
- Triggers are dropped if the table is dropped.
- `DROP TRIGGER <triggerName>;` - Allows you to drop a trigger.
- Triggers can allow you to restrict rows from being changed.
- You can do a before edit using `BEFORE UPDATE ON <table_name>`.
- `SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'cannot update reconciled row: widgetSale';`
- `AFTER INSERT ON`/`BEFORE INSERT ON` allows you to do actions before or after inserts.

## Foreign Keys

- Foreign key constraints keep data consistent across tables.
- Allows propagation of changes throughout the database.
- Foreign keys reference another table.
- `UPDATE` (any update)
- `CASCADE` (Update or delete)
- `RESTRICT` (Doesn't allow the operation)
- `NULL` (sets it to null)
- Indexes are required for foreign keys.
- Reference another key in a different table `REFERENCE <table.column>`.
- Two options: `ON DELETE` and `ON UPDATE`.