What is a Common Table Expression?:

* Most popular databases support CTEs: Oracle, SQL Server, SQLite, and MySQL  
* Common Table Expression (CTE): A query that you name and rescue within a longer query.  
* It is very similar to a temporary table.  
* WITH cte\_name AS ( QUERY )  
* CTEs are used like a table:  
  * SELECT \* FROM cte\_name;  
* When using a CTE, it will fail unless you are also performing a query.   
* Benefits of CTEs  
  * Code is easier to read.   
  * Organizes queries into reusable modules.   
  * Better matches how you think about data analysis

Convert a Subquery to a CTE:

* Normally CTEs are created from subqueries.   
* Subqueries are used to create derived tables.   
* Using subqueries hides the details within one large block. Using CTEs makes it more readable.   
* To convert, just pull the subquery out and replace it with a new name. Include the CTE above the query you are submitting

Using Multiple CTEs in a Query:

* CTEs allow you to organize queries to match how we think about a data question.  
* For data science questions, it allows you to break down the problem into bite sized queries, which can eventually converge to solve the larger problem.  