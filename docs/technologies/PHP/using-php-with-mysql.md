

| $db \= new PDO("sqlite:".\_\_DIR\_\_."/database.db");  | Create a new PDO object. Includes the path. |
| :---- | :---- |
| .\_\_DIR\_\_ | Path of the file being worked on. |
| new | Keyword used to create new objects.  |
| try { } catch (Exception $e) | Try catch block that allows exceptions to be handled. |
| echo $e-\>getMessage(); | Returns the exception error message and prints it out.  |
| $db\-\>setAttribute(PDO::ATTR\_ERRMODE, PDO::ERRMODE\_EXCEPTION);  | Throws PDO Exceptions |
| $db-\>query(“SQL COMMAND”) | Queries the database for requested data and returns the results in an object.  |
| fetchAll() | A method for PDOStatement objects that returns the results of a query as an array.  |
| Function new\_function() { } | Makes a function in PHP and allows you to return a variable.  |
| fetch(); | Fetches one result from a SQL query |
| LEFT OUTER JOIN | SQL keyword that pulls the left table and any matching data from the right table.  |
| filter\_input() | Sanitizes the user's input to avoid SQL injection.  |
| $db-\>prepare() | Prepares a query for execution. ? can be used as a placeholder. |
| $results-\>bindParam(placeholderNumber, $id, PDO::PARAM\_INT); | Binds the parameter to the query statement, ensuring it is what was expected. This specifies the data type that is required.  |
| $results-\>execute(); | Executes the prepared statement. |
| empty($variable$); | Checks of the variable is empty.  |
| RANDOM() | Built-in SQL command that returns random rows that fit the requirements. |
| LOWER() | Forces a SQL string to be lowercase. |
| LIMIT \# | Limits the number of rows returned by a query.  |
| ORDER BY variable | Orders the returned rows from a query. |
| REPLACE() | Built in Function that replaces characters when using ORDER BY |
| fetchColumn() | Get only one column from the requested query.  |
| ceil() | Round up to the next whole number.  |
| header() | Redirects the user to a different page.  |
| LIMIT | How many Items are limited to a page |
| OFFSET | Lets SQL know what number to start on. |
| bindValue() | Binds the variable at the moment of the binding. Allows you to use concatenation.  |

Getting to Know the Project:

* A personal media library stores its data in an associative array.   
* Databases are great for advanced sorting and holding large amounts of data.   
* Tables: Media, Genre, Role, and People.   
  * Media is connected to Role, which connects to People.  
  * Media is also connected to Genre

Introducing Objects:

* PHP comes with a built-in object for connecting to a database called a PDO.  
* An object is a variable type that combines properties and methods into a single object. (Think of Java Object-Oriented Programming)  
* \-\> Allow you to access the properties/methods of an object: $mail-\>send()  
* A class is a type of object/object definition. Defines the properties and methods for an object.   
  * An object instantiates its class.   
* PHP Mailer is a class.   
* PDO is a built-in class, so no other packages are required. 

Getting Started with PDO:

* [This link](https://www.php.net/manual/en/pdo.drivers.php) can be used to find the driver for a new PDO object. It depends on the type of database being used and the path at which the database exists.   
* A PDO can also be used to connect to a SQL database hosted locally or elsewhere:  
* $db \= new PDO(“mysql:host=localhost;dbname=DATABASE\_NAME;port=3306”, “USERNAME”, “PASSWORD”)

Handling Exceptions:

* Handling exceptions is necessary when connecting to external systems.   
* Exceptions are exceptional, they should not be used for the things that are expected to happen.  
* Catching Exceptions are used when the code cannot work as intended.   
* Exceptions can be caught using a try catch block.  
* Assumption: Like Python, it is probably best practice to catch Specific exceptions.  
* The way the PDO is made in this instance seems to make a file if it does not exist. This is the new functionality. 

More Exceptions:

* When an exception is thrown, we want to gather as much information as possible.   
* Extending Exceptions PHP [Documentation](https://www.php.net/manual/en/language.exceptions.extending.php)  
  * This gives multiple methods to use.  
  * getMessage(); gets a string that states what went wrong and returns it.   
* PDO can also be set to throw exceptions whenever an error occurs.   
  * $db-\>setAttribute(PDO::ATTR\_ERRMODE, 3PDO::ERRMODE\_EXCEPTION);

Querying the Database:

* Querying the database retrieves data from the database.   
* A select statement is a query on the database that sends the requested data back.   
* Querying the database requires you to handle exceptions.   
* PDO comes with a query command.   
  * $db-\>query(“SQL COMMAND”)

Retrieving the Result Set:

* The result of a query is a new PDOStatement Object.   
  * This means that we can use its properties and methods.   
* [PDOStatement methods](https://www.php.net/manual/en/class.pdostatement.php) can be found using the PHP manual  
* The fetchAll method organizes the data returned into an array. 

Working with query results:

* The fetchAll() returns an array of multi-layered arrays.   
* The results come twice, one with an associated string key and once with an associated integer key.   
* Fetch\_style allows you to choose with the way the results are returned.   
  * FETCH\_NUM returns the array indexed by the column number.  
  * FETCH\_ASSOC returns an array indexed by the column name.  
    * fetchAlI(PDO::FETCH\_ASSOC);  
* Recall that the double colons are used to access a property of the method of the class itself. 

Integrating Database Results:

* Limiting the amount of code that relies on the database allows for changes to be made faster.  
* Separating Concerns: Allows for swapping out the data without having to change a lot of code. (Reduce coupling).  
* When using an include, if you name a variable the same on another file, you should be able to use it on the file that you are including it with.  
* Using databases correctly can allow for faster performance by not requiring all of the data to be loaded at once. 

Improve with Refactoring:

* Refactoring is the process of restructuring and improving existing code without changing external behaviors.   
* It should make the code easier to read, less complex, and make it more maintainable. 

Understanding Relationship Tables:

* Two types of databases: NoSQL and relational  
* Relational databases establish relationships between the data.  
  * Used when data fits neatly into rows and columns.  
* NoSQL is used when data is going to be fit into arrays or JSON formats.   
* There are three types of relationships  
  * One-to-one: One media item has one extra book information.  
  * Many-to-one: Many media items link to one genre.  
  * Many-to-many: Many movies link to many actors

Querying Multiple Tables with JOIN:

* JOIN allows you to combine tables in order to gather more data.   
* Joining two tables: SELECT title, category, img, format, year  
*        FROM Media JOIN Genres on Media.genre\_id \= Genres.genre\_id"  
* Left outer join allows you to grab only the matching rows from the right table.   
* fetch() will only fetch one result from a query. 

Understanding SQL Injections:

* People visiting your website can inject SQL statements into the browser to damage the database or gain access to hidden data.   
* Two main rules to avoid this:  
  * Filter input  
    * When making a HTML form, make sure to filter the types of input allowed.   
  * Escape Output   
* filter\_input(INPUT\_GET,"id", FILTER\_SANITIZE\_NUMBER\_INT);  
  * Sanitizes the input to ensure that it is an integer value.

Preparing SQL Statements:

* Functions can be called from multiple places, so it is good practice to filter and sanitize all inputs for security reasons.   
* PDO has a prepare method for this exact reason.   
* Prepare sets the query but does not execute it.  
* A ? can be used as a placeholder.   
* The bindParam can set the placeholder and sets the variable binded to that placeholder.   
  * $results-\>bindParam(1, $id, PDO:PARAM\_INT)  
    * Requires the parameter to be an integer.  
* The prepared statement can be executed using $results-\>execute();  
* empty(); checks if a variable is empty.

Adding a Second Query:

* Returning an object early due to a conditional being met is called an early return. 

Fetching in a While Loop

* FetchAll would give us a full array, which isn’t useful in this case.  
* Using a while loop allows you to format the results in the way that you want.  
* For example:  
  * while ($row \= $results-\>fetch(PDO::FETCH\_ASSOC)) {  
  *        $item\[$row\["role"\]\]\[\] \= $row\["fullname"\];  
  *    }


Getting Specific with Queries:

* Making efficient queries allows the website to load faster, making customers happier.  
* RANDOM() is a built in SQL function that grabs random entries.  
* LIMIT \# will limit the number of rows returned by a query.

Filtering Data by Category

* LOWER() makes a sql string lowercase.   
* ORDER BY variable orders the returned rows from a query.  
* REPLACE() will replace characters when using the ORDER by key  
  * REPLACE must be capitalized to work.

Setting Up Pagination Variables:

* Pagination is incredibly valuable when there is a lot of data that needs to be included on one page.   
* We need to know a few things:  
  * How many items per page we want to show.  
  * How many items in total we have.  
  * We need to keep track of the page a visitor is viewing.  
* To make an argument optional, set its value in the function.  
* fetchColumn will get only one column from the requested query.

Calculations and Links:

* ceil() rounds up to the next whole number.  
* header() redirects the user to a different page.

Setting LIMITs:

* Setting the limits in the SQL queries will help the pages load faster.  
* LIMIT sets the limit for the items returned.  
* OFFSET tells SQL where to start.

Adding Pagination Links:

* For iterating in for loops, this is best practice: for ($i \= 0; $i \< $total\_pages; $i++)  
  * Very similar to java. 

Simplifying with a function:

* Using SQL correctly can make HTML forms way simpler and easier to write. 

Setting Up the Search Form

* The ability to search is incredibly important to every website.   
* Forms have two attributes, action and method. This changes how the form is submitted and to which URL. More can be found in the HTML form document.   
  * Get should be used when you are getting data.   
    * Becomes part of the address, allowing for it to be bookmarked and shared to others.   
  * Post should be used when actions are being taken, either saving data or sending an email. 

Matching Search Patterns:

* User input should be inserted into a variable.   
* FILTER\_SANITIZE\_STRING was deprecated in the newest version of PHP.  
* Instead of an equal sign, use the LIKE operator to match the pattern.  
  * Be sure to include two wildcards: % at the front and the back of the pattern.   
* Because the parameter is more than just a variable, bindParam cannot be used.   
  * Instead, use bindValue()

Creating the Search Function:

* By default, the LIKE operator is not case sensitive.  
* We need to make it clear to the User what they are seeing, so if they are viewing search results or there are no results, we need to let them know. 

Accounting for Empty Results:

* When there are no results, we want the user to know that there were no items matching the search term and the search term they used.   
* .htmlspecialchars() will filter the output.

Combining Search and Pagination:

* Search needs to be integrated with the pagination such that the search results can span over multiple pages. 