# PDO Basics

```php
$db = new PDO("sqlite:".__DIR__."/database.db");
```
- Creates a new PDO object for SQLite database.

- `__DIR__`: Path of the file being worked on.

- `new`: Keyword used to create new objects.

```php
try {
    // ...
} catch (Exception $e) {
    echo $e->getMessage();
}
```
- Try-catch block for handling exceptions.

- `getMessage()`: Returns and prints the exception error message.

```php
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
```
- Sets PDO to throw exceptions for errors.

```php
$db->query("SQL COMMAND");
```
- Queries the database for requested data.

```php
$db->prepare();
```
- Prepares a query for execution. ? can be used as a placeholder.

```php
$results->bindParam(placeholderNumber, $id, PDO::PARAM_INT);
```
- Binds a parameter to the query statement with specified data type.

```php
$results->execute();
```
- Executes the prepared statement.

```php
$db->query("SQL COMMAND")->fetchAll();
```
- Queries the database and returns results as an array.

```php
$db->query("SQL COMMAND")->fetch();
```
- Fetches one result from a SQL query.

```php
$db->query("SQL COMMAND")->fetchColumn();
```
- Gets only one column from the requested query.

```php
filter_input();
```
- Sanitizes user's input to avoid SQL injection.

```php
empty($variable$);
```
- Checks if the variable is empty.

```php
RANDOM();
```
- Built-in SQL command that returns random rows.

```php
LOWER();
```
- Forces a SQL string to be lowercase.

```php
LIMIT #;
```
- Limits the number of rows returned by a query.

```php
ORDER BY variable;
```
- Orders the returned rows from a query.

```php
REPLACE();
```
- Built-in function that replaces characters when using ORDER BY.

```php
ceil();
```
- Rounds up to the next whole number.

```php
header();
```
- Redirects the user to a different page.

```php
LIMIT;
```
- Specifies how many items are limited to a page.

```php
OFFSET;
```
- Specifies the starting number for SQL.

```php
bindValue();
```
- Binds the variable at the moment of binding.

# Project Overview

- Personal media library stores data in an associative array.

- Databases are suitable for advanced sorting and holding large data.

- Tables: Media, Genre, Role, and People.

- Relationships: Media-Role-People, Media-Genre.

# Introducing Objects

- PHP uses PDO for connecting to databases.

- Object combines properties and methods.

- `->` allows access to object properties/methods.

- A class defines properties and methods.

- An object instantiates its class.

# Getting Started with PDO

- Link to find the driver for a new PDO object.

- PDO can connect to SQL databases locally or elsewhere.

```php
$db = new PDO("mysql:host=localhost;dbname=DATABASE_NAME;port=3306", "USERNAME", "PASSWORD");
```

# Handling Exceptions

- Handling exceptions is crucial when connecting to external systems.

- Use try-catch blocks for handling exceptions.

- Specific exceptions should be caught.

- Set PDO to throw exceptions on error.

```php
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
```

# Querying the Database

- Queries retrieve data from the database.

- Handling exceptions is important.

- Use `$db->query("SQL COMMAND")` to query the database.

# Retrieving the Result Set

- Result of a query is a PDOStatement Object.

- Use methods of PDOStatement.

- `fetchAll` organizes data into an array.

# Working with Query Results

- `fetchAll` returns a multi-layered array.

- Use `FETCH_NUM` for column number index.

- Use `FETCH_ASSOC` for column name index.

- `fetchAll(PDO::FETCH_ASSOC)`

# Integrating Database Results

- Limit code relying on the database for faster changes.

- Separate concerns for easier maintenance.

- Use includes for reusable code.

- Proper database usage improves performance.

# Refactoring

- Restructure and improve existing code.

- Make code easier to read and maintain.

# Understanding Relationship Tables

- Relational databases establish data relationships.

- Types: One-to-one, Many-to-one, Many-to-many.

# Querying Multiple Tables with JOIN

- `JOIN` combines tables for more data.

- `LEFT OUTER JOIN` grabs matching rows from the right table.

- `fetch` retrieves one result from a query.

# Understanding SQL Injections

- Prevent injecting SQL statements into the browser.

- Filter input and escape output.

# Preparing SQL Statements

- Filter and sanitize all inputs for security.

- Use `prepare` to set a query without executing.

- Use `bindParam` to set placeholder and variable.

- Use `execute` to run the prepared statement.

# Adding a Second Query

- Early return: return object if condition is met.

# Fetching in a While Loop

- Use a while loop for formatting results.

```php
while ($row = $results->fetch(PDO::FETCH_ASSOC)) {
    $item[$row["role"]][] = $row["fullname"];
}
```

# Getting Specific with Queries

- Make efficient queries for faster loading.

- Use `RANDOM()` for random entries.

- Use `LIMIT #` for row limits.

# Filtering Data by Category

- Use `LOWER()` to make a SQL string lowercase.

- Use `ORDER BY variable` for row ordering.

- Use `REPLACE()` for character replacement.

# Setting Up Pagination Variables

- Pagination is valuable for large datasets.

- Know items per page, total items, and current page.

- Use `fetchColumn` for one column from a query.

# Calculations and Links

- Use `ceil()` to round up to the next whole number.

- Use `header()` to redirect the user.

# Setting Limits

- Set limits in SQL queries for faster pages.

- Use `LIMIT` for item limits.

- Use `OFFSET` to specify starting point.

# Adding Pagination Links

- Use for loop for iteration.

# Simplifying with a Function

- Use SQL correctly for simpler HTML forms.

# Setting Up the Search Form

- Search functionality is crucial.

- Use form attributes `action` and `method`.

- Use `GET` for data retrieval, `POST` for actions.

# Matching Search Patterns

- Insert user input into a variable.

- Use `LIKE` operator for pattern matching.

- Include wildcards `%` at both ends of pattern.

- Use `bindValue()` for parameter binding.

# Creating the Search Function

- Make it clear to the user what they are seeing.

# Accounting for Empty Results

- Inform the user when no results are found.

- Use `htmlspecialchars()` for output filtering.

# Combining Search and Pagination

- Integrate search with pagination
