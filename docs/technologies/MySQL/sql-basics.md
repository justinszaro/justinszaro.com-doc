# Querys Outlined:

`SELECT * FROM <table name>;` - Select all information from a table.
`SELECT <column name>, <column name> FROM <table name>;` - Select specific columns from a table.
`SELECT <column name> AS “New Name” FROM <table name>;` - Queries specific columns from a table and renames them to the specified new name.
`SELECT <column name> FROM <table name> WHERE <column> <operator> <value>;` - Queries data from a table based on a specific condition. 
`SELECT <column name> FROM <table name> WHERE <condition 1> AND/OR <condition 2>;` - Querying information from a table based on multiple conditions.
`SELECT <columns> FROM <table> WHERE <column> NOT IN/IN (<value 1>, <value 2>, <value …>);` - Searching for data in a table where the value in the columns matches (or doesn’t) one of the request value sets.
`SELECT <columns> FROM <table> WHERE <column> BETWEEN <minimum> AND <maximum>;` - Selects columns where the column values are between two numerical values. 
`SELECT <columns> FROM <table> WHERE <column> LIKE <minimum>;` - Using a wildcard %, a search can be done using a character pattern. It is better when you do not know capitalization. 
`SELECT <columns> FROM <table> WHERE <column> IS/IS NOT NULL` - Filter out or look for missing values. 


#### Data is Everywhere:
- Databases drive most applications.
- Databases power business decisions through data analysis. 
- Information is data.
- Real World Implementation
    - Amazon stores data on the items they sell.
    - Amazon also stores customer data.
        - ex : Wishlist
    - Facebook stores messages and posts.

#### Talking to Databases With SQL:
- Data in databases helps you answer questions about the application or a business.
- Can also hold email addresses for clients of a newsletter or library.
- SQL (Structured Query Language) allows you to interact with a database.
- Querying is reading data from a database.
- SQL Databases:
  - MySQL (Used before)
  - PostgreSQL
  - Microsoft SQL
  - Oracle
  - SQLite (Core Data on Swift)
- NoSQL Databases:
  - MongoBD (Used years ago)
  - CouchBase
  - Redis

#### Organizing Data with Databases:
- Two important aspects of a database:
  - The data itself.
  - The schema - how the data is organized.
- The scheme describes sections of data into tables. 
- Columns are up and down, rows are left and right.
- MySQL can search through a table and organize it in a specified way. Searching does not add or remove data.

#### Types of Data:
- Table columns in the schema describe the data type of each attribute.
- Common Data Types:
  - Text - Stores names and descriptions of things.
  - Numeric - Store prices, ages, and quantities
  - Date - Anything time related.
- The schema can be thought of as a coin sorter, making sure the data types remain in the columns they are supposed to.
- Having correct data types allows you to perform better queries and more efficient sorting.

#### Your First SQL Language:
- Syntax - The vocabulary and grammatical structure of a programming language.
- Keyword - The vocabulary words of a programming language. They are commands issued to a user.
- SQL has its own set of keywords.
- Lines of SQL are statements or queries. 
- Query all information from a table: SELECT * FROM TABLE;
- The semicolon is like a period, it tells the database where the query ends. 

#### Retrieving Specific Columns of Information:
- When querying for specific columns of information, change out the asterisk with a list of columns requested. 
  - Ex: Select column1, column2 FROM table_name;
- The order of the list is determined by what order the columns are in when the query is submitted. 

#### Categorizing Your Output with ‘AS’:
- The as keyword allows for a column to be renamed when queried.
- This as keyword is just an alias, meaning the column is not renamed in the database.
  - Ex: Select title as Title, first_published as “First Published” From Books; 
- When using the AS keyword, a new name that has multiple words must be wrapped in quotes. What type of quotes depends on the SQL setting.
- The as keyword can be voided and the rename will still occur.
- This is not recommended and is not as readable. 
- Renaming the columns is great when a third party or user is going to be reviewing the results. 

#### Review and Practice with SQL Playgrounds:
- Keywords can be written in lowercase and the query will still run. 
- Keywords in uppercase makes the keywords easier to spot and distinguish.
- Uppercase keywords are also best practice.

#### Searching Tables with ‘WHERE’:
- A Where clause allows us to query table rows based on the condition.
- A WHERE clause is structured using: `<column> <operator> <value>`;
- An operator is the same as programming: =, >, <, !=, >=, <=, etc.
- The where column does not need to be included in the columns listed. 
- The value’s type is also important. Numbers do not need quotes, but strings and date types do.
- Operators are strict, meaning the operators are case sensitive. 
- `!=` is the inequality operator, meaning not equal.
- Using id’s in other tables instead of duplicating data is done using foreign keys. 
- Using foreign keys saves on disk space and increases performance.
- These tightly grouped tables are called relational databases. 

#### Filtering by Comparing Values:
- Queries can also be done by using comparison operators.
- Comparison Operators: `>, <, <=, >=`
- All operators are read from left to right. 
  - Ex: `SELECT product_name, price FROM products WHERE price <= 15.99;`

#### Filtering on More than One Condition
- Conditions can be chained using the ADD or the OR Keywords. 
  - Ex: `SELECT title from books WHERE author = “J.K. Rowling” AND first_published < 2000;`
- Be very careful with the conditional keyword being used: will drastically change the results. 

#### Filtering by Dates:
- The comparison operators can also be used with Date Types.
  - Ex: `SELECT * FROM loans WHERE loaned_on < “2015-12-13”;`
- All dates before a selected date are considered LESS THAN that date.

#### Searching Within a Set of Values:
- Searching within a set of values using multiple conditions is time-consuming and leaves you vulnerable to errors.
- Instead, using the IN keyword allows you to look for multiple values in a column. 
- All of the values are put into a list surrounded by parenthesis. 
  - Ex:` SELECT first_name, email FROM patrons WHERE library_id IN (“MCL1001”, “MCL1100”, “MCL1011”);`
- The `NOT IN` keyword does the exact opposite. It allows us to look for all column values that are not in our list.

#### Searching Within a Range of Values:
- Useful when searching between two set values. 
- Combines an `AND` and `OR` by using a `BETWEEN` keyword.
- Ex: `SELECT title FROM books WHERE first_published BETWEEN 1800 AND 1899;`
- The lower value must be first! Order Matters!
- BETWEEN can also be used for date ranges.

#### Finding Data that Matches a Pattern:
- Allows you to search for a specific pattern of characters. 
- The LIKE keyword allows you to look for a pattern of characters
- Requires a wildcard character to result in entries. 

#### Filtering Out or Finding Missing Information
- What if you are looking for a column that has missing information? 
- Missing values are designated as NULL values.
- Cannot be used with equality operators.
- Must be used with `IS` or `IS NOT NULL`.
