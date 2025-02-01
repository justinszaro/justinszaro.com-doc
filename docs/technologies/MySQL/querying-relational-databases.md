---
id: Querying Relational Databases
tags:
  - mysql
---

| SELECT \<columns\> FROM \<table1\> INNER JOIN \<table2\> ON \<equality criteria\> WHERE \<search criteria\>; | Inner join two tables together by using equality criteria.  |
| :---- | :---- |
| SELECT \<columns\> FROM \<table1\> LEFT OUTER JOIN \<table2\> ON \<equality criteria\> WHERE \<search criteria\>; | Perform a left outer join, returning the left table and everything that matches in the right table. |
| SELECT \<columns\> FROM \<table1\> UNION SELECT \<columns\> FROM \<table2\>; | Makes a union by stacking the two tables on top of one another. There must be the same number of columns and order does matter.  |
| SELECT \<columns\> FROM \<table1\> UNION ALL SELECT \<columns\> FROM \<table2\>; | Makes a union all by stacking the two tables on top of one another. There must be the same number of columns and order does matter. Duplicates will be included.  |
| SELECT \<columns\> FROM \<table1\> INTERSECT SELECT \<columns\> FROM \<table2\>;  | Performs an intersect on two different tables, only returning the rows that match in both tables.  |
| SELECT \<columns\> FROM \<table1\> EXCEPT SELECT \<columns\> FROM \<table2\>;  | Only returns a set of rows that are in the first table and not in the second table.  |
| SELECT \<column\> FROM \<table1\> WHERE (SELECT \<column\> FROM \<table2\> WHERE \<\>) | A subquery can be used in a WHERE clause to narrow down the resulting set. Note that it is surrounded by parenthesis.  |
| SELECT \<column\> FROM \<table1\>  WHERE \<column\> IN (SELECT \<column\> FROM \<table2\>) | Using the IN keyword with a subquery can result in a powerful where clause. NOT IN also works too.  |
| SELECT \* FROM SALE AS s INNER JOIN (SELECT CarID FROM Car WHERE ModelYear \= 2015\) AS t ON s.CarID \= t.CarID | A subquery can be used to make temporary tables, allowing you to join tables together. Multiple columns can be used and it must have an alias.  |

Why We Make Databases “Relational”:

* In the real world, databases are huge with over 100s of rows.  
* They are called relational databases because the tables are related through attributes.   
* How schema is designed has a tremendous impact on speed and expandability.   
* Relational Database Benefits:  
  * Maximizing Storage  
  * Better Application Functionality  
  * Cleaner, Richer Data for Business Reporting  
* They organize data to give the numbers and words meaning and context. 

Database Normalization:

* There is a great deal of planning when creating the schema for a relational database.   
* The process of this planning is called normalization.   
* The goal is to group things together logically, in a way that is easy to process and shows context for everything.

How Normalization Helps Us:

* Separating data that is heavily duplicated saves space and helps the database move faster.   
* Normalizing the database also helps with making changes. Changes are faster, meaning less can go wrong and other developers will successfully see the changes.  
* Update Anomalies \- When the table is being updated and another developer makes a query or change before the update is completed.  
* Normalization drastically reduces the changes of an update anomaly and enforces the data’s integrity. 

Set Theory and Relational Databases:

* You can think of a database table as a set of data stored on a disk.   
* When you query a table, you get the set, or a subset of the data.  
* Set \- A grouping of similar things.   
  * Ex: You can have a set of clothing, and an even more specific set of shirts.   
* Sets can be visualized as a venn diagram.   
  * This venn diagram visualization also helps with joins.  
  * The middle section is called the intersection between sets.   
  * The whole venn  diagram is called the Union.  
  * Everything but the intersection is called the Except.   
* The Union, intersection, or except are called set operations.   
* Normalization allows you to perform set operations efficiently.

Unique Keys:

* Relational databases have tables that are linked by column attributes.   
* The attributes are the columns with common data that links data together.   
* These special columns are called keys.  
* Keys can also be used to ensure that each column is distinct. They can also ensure that a certain value doesn’t repeat within a particular column.  
* Three Primary Types of Keys:  
  * Unique Keys: Columns specifically configured such that no value can be completed within it.   
    * Ex: Social Security Column  
    * They can be null  
    * There can be multiple unique keys per table.  
    * They can be modified to new values.  
  * Primary Keys:   
  * Foreign Keys:

Primary key:

* Is a unique value.  
* Can never be NULL  
* Only one primary key is allowed per table.    
* Cannot be modified to a new value.  
* Normally not any useful values. Normally used as IDs (numbers are faster and take less storage then words)

Foreign Keys:

* A Foreign Key is a reference or pointer from one table to another.   
  * Ex: ProductID is a foreign key in the sales table linking it to the Products table.   
* When making a Foreign Key:  
  * The columns must be designed correctly. It should match properly in both tables.   
  * A constraint must be made so that the database knows that the two things are linked.  
  * A constraint is a rule that a database enforces.   
* Referential Integrity \- Foreign key values must also exist as primary key value in the reference table.   
  * Constraints need to be added to enforce Referential integrity.

One to Many Relationships:

* Three types of relationships between tables:  
  * One to one  
  * One to many  
  * Many to many  
* One to many relationships are the most common.   
* One row in one table can be linked to many rows in another table. This cannot happen the other way.   
* Foreign keys always goes on the many side.  
* Ex: A sale has 1 product but a product can be on many sales. 

Many to Many Relationships:

* One record is linked to many records in another table and vice versa.  
* Ex: Sales and Parts tables. Orders can consist of many parts and many parts can be on many orders.   
* Which part should have the foreign key? In Many to Many relationships, a third table is required with the primary key from both tables.   
  * This makes a multi-primary key table called a junction table or an associative table.  
* A many to many relationship is actually two one to many relationships with a junction table. 

One to One Relationship:

* One row from one table can only link to one row from another table.  
* This relationship is quite rare.   
* In practice, it is usually better to combine these relationships into one table.  
  * However, separating used and unused columns can boost performance.   
* One to One relationships can also be useful when you are including a third party database. 

Modeling Table Relationships:

* There is special softwares that allows you to model the relationships between tables.   
* Tables are seen as entities.   
* The models created are called entity relationship diagrams.   
* One to Many relationships are notated using the crow's foot notation. The “crows foot” goes on the side where the foreign key will go. Then a line will connect to the one side entity.   
* A one to one relationship connects a line with two perpendicular lines on each side.   
* A many to many relationship has crows feet on both sides. However, in practice, the junction table is included instead with a one to many relationship to each one. 

Querying Relational Databases:

* There are ways to query multiple tables at the same time. These are called Table Joins.   
* Two common types of join:  
  * Inner Join  
  * Outer Join  
* The keyword JOIN allows you to join two tables together.   
* Join can be used in any type of relationship. 

Inner Join:

* Most common kind of SQL join.   
* Ex: SELECT \<columns\> FROM \<table1\> INNER JOIN \<table2\> ON \<equality criteria\> WHERE \<search criteria\>;  
* The equality criteria will link the information together.   
* You may need to specify which table the column is in if they are named the same thing.   
* You can also alias tables in the form clause using the AS keyword. This is very helpful for long queries.   
* An inner join will return the rows where the values match on both sides.   
* An inner join is an Intersect.

Outer Join:

* As common as inner joins, but are normally used for more complex queries.  
* Outer joins return the middle of the venn diagram and the outsides as well.   
* Three types of outer joins:  
  * Left Outer Join \- Returns all the data on the left and any records from the right that match.  
  * Right Outer Join \- Returns all the data on the right and any records from the left that match.  
  * Full Outer Join \- Will match up all records that exist in both tables and then return the remaining unmatched data.   
* Ex: SELECT \<columns\> FROM \<table1\> LEFT OUTER JOIN \<table2\> ON \<equality criteria\> WHERE \<search criteria\>;  
* The table specified first will be considered the left table.   
* Note: the COUNT() function does not count null values.   
* Different joins can be combined to create more specific queries.

What are Set Operations?:

*  You can also join tables together using Set Operations  
* Set Operations \- Combine or limit results using two or more datasets.   
* Four Set Operations:  
  * Union \- Combine data from multiple tables into one table set.  
  * Union All \- Combine data from multiple rows into one table set including the duplicates.  
  * Intersect \- Produces a set from values of rows that are in common with the others.   
  * Except \- Produces a result set of values that exist in the first table but not in the second. 

Union Operations:

* Unions \- combine data from two tables, or sets, into one result set.   
* Similar to an inner join, however, it doesn’t use a foreign key relationship at all. It stacks the data vertically.    
* The columns of the two tables you are joining must match.   
* Ex: SELECT \<columns\> FROM \<table1\> UNION SELECT \<columns\> FROM \<table2\>;  
* The amount of columns and the order they are in does matter, so be careful.   
* You can filter down each portion of the Union statement to narrow the queries down.   
* You can order a query by including it in the second statement. 

Union All: 

* Basically the same as Union, but does not eliminate duplicates.   
* Ex: SELECT \<columns\> FROM \<table1\> UNION ALL SELECT \<columns\> FROM \<table2\>;

Intersect Operations:

* Similar to an inner join. Instead of bringing back both rows like a Union, it will only return the rows that match in both tables.   
* Ex: SELECT \<columns\> FROM \<table1\> INTERSECT SELECT \<columns\> FROM \<table2\>;

Except Operations:

* Uses the same format as intersect, but only returns the records that are not in the second table.   
* This is very useful when you want something that is in one but not the other.   
* Ex: SELECT \<columns\> FROM \<table1\> EXCEPT \<columns\> FROM \<table2\>;  
* The order of the tables and the same number of columns are required.   
* The rows need to match exactly to be removed, no matter the number of columns. 

What are Subqueries?:

* Subquery \- A query that is used in conjunction with another query.  
* Why use them?  
  * Criteria for a where clause not specifically known  
  * Need a temporary dataset to join with other tables in your database.  
* Ex: SELECT \<column\> FROM \<table1\> WHERE (SELECT \<column\> FROM \<table2\> WHERE \<\>)  
  * Note how the subquery is inserted into the parentheses.

Using IN with Subqueries to Filter Data:

* You can use the IN keyword with a subquery to create a powerful where clause.   
* Ex: SELECT \<column\> FROM \<table1\>  WHERE \<column\> IN (SELECT \<column\> FROM \<table2\>)  
* The subquery can only include one column, or else an error will be thrown.  
* The NOT IN keyword works the same way as well. 

Using a SubQuery to Create A Temporary Table:

* Derived Table \- When a subquery is used to create a temporary table.  
* Very useful when generating reports.  
* Ex: SELECT \* FROM SALE AS s INNER JOIN (SELECT CarID FROM Car WHERE ModelYear \= 2015\) AS t ON s.CarID \= t.CarID

