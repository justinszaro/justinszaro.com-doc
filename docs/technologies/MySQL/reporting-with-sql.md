

| SELECT \<columns\> FROM \<table\> ORDER BY \<column\>; | Order the results of the query in ascending order by the column named. You can also add the ASC and DESC to change the order.  |
| :---- | :---- |
| SELECT \<columns\> FROM \<table\> LIMIT \<integer\>; | Limit the number of rows returned from a query. |
| SELECT \<columns\> FROM \<table\> LIMIT \<int\> OFFSET \<int\>; | Sets an offset for a query where you want to skip a number of results. |
| UPPER(\<column\>) | Function that uppercase a string when returned from a query.  |
| SELECT first\_name || “ “ || last\_name FROM people; | The concatenation operator. It joins two strings together. Be sure to include a space.  |
| SELECT username, LENGTH(username) FROM customers; | The LENGTH() operator returns the length of a string.  |
| UPPER() | Make a string totally uppercase. |
| LOWER() | Makes a string totally lowercase.  |
| SUBSTR(\<value or column\>, \<start\>, \<length\>) | Provides a substring of a large body of text.  |
| REPLACE(\<value or column\>, \<target\>, \<replacement\>) | Used to replace portions of strings when returned from a query.  |
| COUNT(\<\>) | Allows you to count the total number of rows returned from a query.  |
| SELECT COUNT(DISTINCT \<column\>) FROM \<table\>; | The DISTINCT keyword only returns distinct values. |
| SELECT COUNT(\*) FROM \<table\> GROUP BY \<column\>; | Groups the queries based on the column named.  |
| SUM(\<column\>) | Sum the total number in the column |
| HAVING | A keyword used when aggregating SUM(). |
| AVG(\<numeric column\>) | Aggregates a numeric column to give you an average. |
| MIN(\<numeric column\>) | Finds the minimum value in a numeric column. |
| MAX(\<numeric column\>) | Find the maximum value in a numeric column.  |
| DATE(\<timestring\>, \<modifier\>, \<modifier\>) | Make, calculate, or find dates using SQL. |
| TIME(\<datetime\>) | Strip the date off the datetime and just give the time back.  |
| STRFTIME(\<format string\>, \<time string\>, \<modifier\>) | Outputs the string in the requested formatting.  |

Retrieving Results in a Particular Order:

* You may want to order results because:  
  * Sorting Contacts  
  * Sorting Movies by Year  
  * Sorting Products by Price  
  * Sorting Articles by Date  
* First, you need to start with a select statement and use the ORDER BY keyword to sort the column into ascending order.   
  * SELECT \<columns\> FROM \<table\> ORDER BY \<column\>;  
* You can also use the keywords ASC and DESC to change the order it is going in.   
* You can also order by multiple columns by including more columns after a comma.   
  * SELECT \<columns\> FROM \<table\> ORDER BY \<column\>, \<column2\>;  
  * Order is important\!

Limiting the Number of Results:

* To limit the number of results in a query. Use the keyword LIMIT and include an integer for how many results you want.   
  * SELECT \<columns\> FROM \<table\> LIMIT \<integer\>;  
* LIMIT must be used at the end of the query.   
* LIMIT can be different for other databases, so be sure to look up the syntax if the command throws an error. 

Paging Through Results:

* What if you want to limit the number of results because they are being paginated across pages.   
* In this case, you can use the OFFSET keyword.  
  * SELECT \<columns\> FROM \<table\> LIMIT \<int\> OFFSET \<int\>;  
* The OFFSET keyword comes after the LIMIT keyword. 

What Are Functions?:

* Functions are different from normal keywords because they can manipulate the results of the query in interesting ways.   
* Keyword \- Data presented as unaltered.  
* Operators \- Performs comparisons and simple manipulation  
* Functions \- Presents data differently through manipulation.   
  * Syntax: \<NAME\>(\<column\>)  
* Example:  
  * UPPER(\<column\>)  
  * SELECT UPPER(name) from passport\_holders;

Adding Text Columns Together:

* Recall that the AS keyword can be used to rename columns when the query is returned.   
* You can use the Concatenation Operator to join two string results together.  
* The Concatenation Operator for SQL Lite is ||.  
  * In other databases, it may be \+, or CONCAT()  
  * Ex: SELECT first\_name || last\_name FROM people;  
* Note: single quotes should be used for string literals and doubles quotes should be used for column aliases. 

Finding the Length of Text:

* There is a SQL function called LENGTH() that returns the length of a string.   
  * Ex: SELECT username, LENGTH(username) FROM customers;  
* Length can also be used in the WHERE clause as well. It can be included anywhere where a value or Column name is included. 

Changing the Case of Text Columns:

* There are two different functions for changing cases:  
  * UPPER() makes the string uppercase.  
  * LOWER() makes the string lowercase.

Creating Excerpts FROM Text:

* You don't want to overload information when serving it to the user.   
* For example, you may want to only return part of a blog post on its preview page.  
* Substring \- A smaller string from another string.   
* You want to use the SUBSTR function.  
  * SUBSTR(\<value or column\>, \<start\>, \<length\>)  
  * This does require all three arguments, unlike other operators which are normally one. 

Replacing Portions of Text:

* This is useful for handling confidential information or modifying it so that you can edit its HTML.  
* For this purpose, you would use the REPLACE() function:  
  * REPLACE(\<value or column\>, \<target\>, \<replacement\>) 

Counting Results:

* COUNT() is a function that allows you to  
  * count the number of rows in a table  
  * Count the number of results  
  * Distinct Entries  
  * Aggregates.  
* To get the total number of users:  
  * SELECT COUNT(\*) FROM customers ORDER BY id DESC LIMIT 1;  
* Count only counts the rows that have a value, the NULL values will not be counted. Using an \* is safer if you want everything.   
* The DISTINCT keyword causes the query to only return unique values. 

Counting Groups in Rows:

* What if you want to know how many objects are in which category.  
* In this case, we want to use GROUP BY keyword to group the categories.   
  * Ex: SELECT category, COUNT(\*) FROM books GROUP BY category;

Getting the Grand Total:

* The SUM() function sums any numeric column.   
* When the GROUP BY keyword is also used, you can sum by column.   
  * Ex: SELECT SUM(cost), user\_id FROM orders GROUP BY user\_id  
* SUM() cannot be used with a WHERE clause. Instead use a HAVING keyword after the GROUP BY Keyword.  
  * Ex: SELECT SUM(\<numeric column\>) AS \<alias\> FROM \<table\> GROUP BY \<another column\> HAVING \<condition\> ORDER BY \<column\>;

Calculating Averages:

* There is also an average keyword: AVG()  
  * Ex: SELECT AVG(cost) as “average” FROM orders;

Getting Minimum and Maximum Values:

* MAX() will find the maximum value in a numeric column.  
* MIN() will find the minimum value in a numeric column

Performing Math on Numeric Types

* We have already seen numerous operators for comparisons.  
* There are operators that can be performed on numeric types:  
  * Addition \+  
  * Subtraction \-   
  * Multiplication \*  
  * Division /   
* Ex: SELECT 4 \+ 9; Will return 13\.  
* For division, if a float is used, the output will be a float. If integers are only used, it will be rounded to the nearest whole number.  
* The ROUND() function will round a float number.  
  * Ex: SELECT name, ROUND(price \* 1.06, 2\) AS “Price in Florida” FROM products;

Differences Between Databases:

* Each database system has its own way of working with dates.   
  * They can change the function to calculate dates, how the date is formatted, and how it is readable in human form. 

Creating Up-to-the-Minute Reports:

* You can get today's date using a SQL function.   
* The DATE() function will give you back today’s date if you pass in the string “now”  
  * SELECT DATE(“now”) \-\> 2023-06-17

Calculating Dates:

* The DATE() function can also be used to calculate past or future dates using the modifier.   
* Date(\<time string\>, \<modifier\>, \<modifier\>)  
* Date(“2016-02-01”)  
  * Order is important\! Year-Month-Day  
* The modifiers can add or subtract months, days, or years using the numeric operator  
  * Date(“now”, “-7 Days”, “+1 Month” )

Formatting Dates for Reporting:

* There are three different types of date data types:  
  * Date: 2015-04-01  
  * Time: 23:12:01  
  * DateTime: 2015-04-01 23:12:01  
* This isn’t very readable. The DATE() function will trim the datetime to just date. TIME() will be the same thing.   
* There is a way to format the output of a datetime.   
* STRFTIME(\<format string\>, \<time string\>, \<modifier\>)  
  * Ex: STRFTIME(“%d/%m/%Y”, “2015-04-01 23:12:01”, \<modifier\>)  
  * Output: 01/04/2015

