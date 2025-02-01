---
id: CRUD Operations
tags:
  - php
  - mysql
---

What is CRUD?:

* CRUD \- Create, remove, update, delete.  
* CRUD is everything you would want to do in a database for an application. 

Connecting to the Database

* PHP’s Data Object, or PDO, connects the application to the database.   
* You can create a new PDO object by performing  
  * $db \= new PDO();  
* You use the PDO\_SQLITE\_DSN for connecting to SQLite databases  
* To connect to a database on disk, you add the absolute path to the database.   
  * $db \= new PDO("sqlite:".\_\_DIR\_\_."/database.db");  
* Be sure to handle the case if the connection to the database cannot be established. 

Handling Exceptions

* Remember that exceptions are exceptional, they should not occur for something that you expect to happen.   
* You want to use a try catch block when connecting to databases.   
* You also want to tell the PDO that all errors should be handled as an exception:  
  * $db-\>setAttribute(PDO::ATTR\_ERRMODE, PDO::ERRMODE\_EXCEPTION);

Reading Project Data:

* It is important to understand the structure of the data that you are working with.   
* It is a good idea to map the relationships between the tables in a relational database.   
* Note: It is a very good idea to separate concerns:  
  * Code that pulls information from the database should be separate from the code that displays the data.   
* To query the database: $db-\>query(‘Query’)  
* Querying the database throughout the files should also include a try catch block as well.   
* To access the results of a query, you can loop through the results using the for each and pull information by using the column name as the key. 

Accepting User Data:

* When handling values from outside the code, you need to filter input and escape output.   
* There are two possible form submission types, get and post.  
* In general GET is used when merely retrieving or getting data.   
  * Recall that the values become part of the URL.  
* POST is used when it is taking other actions.  
* POST advantages:  
  *  Name-value pairs are not displayed in the URL  
  * URLS can be refreshed multiple times  
    * Causing duplication  
  * More data can be submitted.   
* First, you want to check that POST is being used:  
  * if ($\_SERVER\['REQUEST\_METHOD'\] \== "POST"  
* You also want to use filter\_input() to ensure that no malicious code is being sent in.  
* Lastly, it is a good idea to trim the input of any whitespace. 

Adding Projects:

* Auto-incrementing IDS allow you to add records to a database without needing to add a primary key.  
* A prepared statement is a template for a SQL statement that can be customized to fit our needs.   
* A prepared statement also escapes the variables so that no SQL injection can occur.   
* For each value in the prepared statement, you want to bind a value to it.  
* Then, execute the statement in a try catch block.  
  * $results \= $db-\>prepare($sql);  
  * $results-\>bindValue(1, $title, PDO::PARAM\_STR);  
  * $results-\>bindValue(2, $category, PDO::PARAM\_STR);  
  * $results-\>execute();

Reading Task Data:

* Same process as the projects list.

Remembering Form Data:

* You can remember the form data by setting the variables as empty string before the server checks for the request method.  
* Be sure to add it to the webpage so it shows up\!

Validating Dates:

* Ensuring that the dates are correct makes the data more valid.   
* It also avoids SQL from erroring out..  
* It is good to check that the date will split into three different sections of the correct date. \\  
* Then the checkDate(month, day, year) can check to ensure that the date is actually a valid date. 

Totaling Time:

* Reports allow you to understand what you have and make a story.  
  * It can Describe  
    * Visitors  
    * Forecast inventory  
    * Which pages are the most popular?

Summarizing Project Time:

* To fetch all of the results from a query:  
  * return $results-\>fetchAll(PDO::FETCH\_ASSOC);  
* The next() function can look at the next item in an array.

Filtering By Project:

* The is\_array() function checks if the argument inserted is an array.   
* It is useful to include the WHERE clause outside of the made SQL statement so it is easy to modify. 

Filtering by Category:

* Using a switch statement can be really powerful when applying filters to tons of data.   
* It is also a good idea to build the project so that it is scalable, even if it may not be. 

Filtering by Time Period:

* Date reports are really common. They are normally separated by ranges.   
* strtotime() can be used in a multitude of ways:  
  * First day of last month  
  * Last day of last month  
  * \-1 Saturday

Naming Reports:

* Be sure to tell the user what they are looking at.   
* ucwords() will title case the string inserted into it.

Updating Projects:

* Requirements change, so flexibility is needed when creating projects.   
* You can make a list from a call by doing:  
  * list($list elements….) \= get\_project($project\_id)

Updating Tasks:

* Similar to updating projects. 

Deleting Tasks:

* You need to be very careful when giving the option to delete entities. If an entry is accidentally deleted, there is no turning back from it.

Preserving Data Integrity:

* When adding and removing data, you need to be aware of how it is viewed on the website.   
* If you remove a piece of data, it should not affect how other data appears on the page. 

