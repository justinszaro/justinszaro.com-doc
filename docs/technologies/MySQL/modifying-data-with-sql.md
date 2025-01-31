

| INSERT INTO \<table\> VALUES (\<value1\>, \<value2\>, \<value3\>, ….); | Insert data into a table.  |
| :---- | :---- |
| INSERT INTO \<table\> (\<column1\>, \<column2\>, \<column3\>, ….) VALUES (\<value1\>, \<value2\>, \<value3\>, ….); | Inserting data into a table by specifying the column they should go into. To insert multiple values, they can be included like a list.  |
| UPDATE \<table\> SET \<column\> \= \<value\>; | Update a value in the table.  |
| UPDATE \<table\> SET \<column\> \= \<value\> WHERE\<CONDITION\>; | Used to update specific rows.  |
| DELETE FROM \<table\>; | Deletes all of the tables from the table. |
| DELETE FROM \<table\> WHERE \<CONDITION\>; | Deletes specific rows from the table.  |
| BEGIN TRANSACTION; or BEGIN; | Begins a transaction. |
| COMMIT; | Runs and saves all of the commands stored in a transaction.  |
| ROLLBACK; | This will rollback commands issued in a transaction before it is committed.  |

Introduction to CRUD

* Data must change over time, just like everything else.   
* CRUD:  
  * C \- Create or add data to the database  
  * R \- Read the Data  
  * U \- Update the data  
  * D \- Delete the data

Adding a Row to a Table:

* Every CRUD operation has its own keyword.  
  * Ex: Read is SELECT  
* The keyword for the create operation is INSERT INTO  
  * Ex: INSERT INTO \<table\> VALUES (\<value1\>, \<value2\>, \<value3\>, ….);  
  * These values need to be in the same order as the schema describes.   
* Example: INSERT INTO books VALUES (16, “1984”, “George Orwell”, “Fiction”, 1949);  
* Manually entering IDs can clash with other people and is a pain to find out.  
  * To fix this, there is an auto increment feature that will automatically assign an ID when data is created or removed.   
  * In this case, insert NULL into the ID and it will auto increment for you.  
  * Ex: INSERT INTO books VALUES (NULL, “1984”, “George Orwell”, “Fiction”, 1949);  
* You can also insert NULL into values that you do not have yet.   
* You can also include the list of column names that you are adding to before the values.  
  * Ex: INSERT INTO books (id, book\_id, patron\_id, loaned\_on, return by, returned\_on) VALUES (NULL, “1984”, “George Orwell”, “Fiction”, 1949);  
  * The order of the columns and the value’s added do need to line up correctly.   
  * You can make a value NULL by not including it in the column section and not giving it a value.   
* It is possible for a developer to enforce a rule that a value cannot be NULL.

Adding Multiple Rows to a Table:

* Adding rows 1 by 1 can be tedious and slow.   
* You can add multiple rows in a single command  
* Database seed files have multiple rows added in multiple lines to set up the database.  
* You can add multiple entries to a database by separating the value lists by a comma.   
  * Ex: INSERT INTO books (id, book\_id, patron\_id, loaned\_on, return by, returned\_on) VALUES (NULL, “1984”, “George Orwell”, “Fiction”, 1949), (NULL, “1984”, “George Orwell”, “Fiction”, 1949);

Update All Rows or Columns in a Table:

* The update keyword in SQL is UPDATE.  
* An update statement looks like this:  
  * UPDATE \<table\> SET \<column\> \= \<value\>;  
  * In this case, the equal sign is an assignment operator.   
* Without specifying, it will update every value in the table.  
  * Ex: UPDATE patrons SET last\_name \= “Anonymous”;  
* Update statements can also be chained in the same way as INSERT INTO statements.   
  * Ex: UPDATE \<table\> SET \<column\> \= \<value\>, \<column2\> \= \<value2\>;

Updating Specific Rows:

* To update a specific row, you can use any of the condition operators.   
  * Ex: UPDATE \<table\> SET \<column\> \= \<value\> WHERE \<CONDITION\> \<VALUE\> ;  
* You can also chain condition statements using the ADD or OR keywords.  
* It is a good idea to SELECT the rows you want to change to ensure you are changing the rows you actually wish to update.

Removing Data from ALL Rows in a Table:

* The last keyword for the CRUD operators is DELETE  
  * Ex: DELETE FROM \<table\>;  
* The DELETE operator is final. BE VERY CAREFUL WHEN USING THIS COMMAND.

Removing Specific Rows:

* Removing Specific rows requires the condition operators we used before.   
  * Ex: DELETE FROM \<table\> WHERE \<CONDITION\>;

Introduction to Transactions:

* When working in a database, you need to be sure that the command you are running is exactly the command that you want to run.   
* It is incredibly difficult to revert a database back to previous changes.   
* Every command you run automatically runs in AutoCommit mode, which means it gets saved to disk right away.  
* You may not want this to happen, for example, you may want multiple statements to run together.   
* Seeding \- Populating a database for the first time.  
* Scripting \- Making a SQL file that populates the database or runs multiple commands.  
* If a script is interrupted, you may have trouble figuring out what happened.   
  * To avoid this, you can use a Transaction instead.  
* To turn off autocommit: use the keyword BEGIN TRANSACTION; or BEGIN;  
* To end a transaction: use the keyword COMMIT;

Rolling Back from Transactions:

* What if you want to undo a transaction? You can use the keyword ROLLBACK;  
* This will undo the commands you ran in a transaction before committing the transaction. 

Databases with Frameworks:

* ORMS are used with most common programming languages  
* ORMS \- Object-Relational Mapping  
* It is a way to use another programming language instead of SQL to perform CRUD operations.  
* Benefits:  
  * Handles transactions  
  * Only one language is needed.  
* Examples:  
  * Hibernate for Java  
  * Django ORM for Python. 