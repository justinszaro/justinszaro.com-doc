"use strict";(self.webpackChunkjustinszaro_com_docs=self.webpackChunkjustinszaro_com_docs||[]).push([[2254],{6016:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>t,contentTitle:()=>d,default:()=>o,frontMatter:()=>c,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"technologies/PHP/PHP and MySQL","title":"PDO Basics","description":"- Creates a new PDO object for SQLite database.","source":"@site/docs/technologies/PHP/php-and-mysql.md","sourceDirName":"technologies/PHP","slug":"/technologies/PHP/PHP and MySQL","permalink":"/docs/technologies/PHP/PHP and MySQL","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"php","permalink":"/docs/tags/php"},{"inline":true,"label":"mysql","permalink":"/docs/tags/mysql"}],"version":"current","frontMatter":{"id":"PHP and MySQL","tags":["php","mysql"]},"sidebar":"technologies","previous":{"title":"Introducing Superglobals $_GET and $_POST","permalink":"/docs/technologies/PHP/PHP Superglobals"},"next":{"title":"PHP Basics","permalink":"/docs/technologies/PHP/PHP Basics"}}');var r=s(4848),l=s(8453);const c={id:"PHP and MySQL",tags:["php","mysql"]},d="PDO Basics",t={},h=[];function a(n){const e={code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"pdo-basics",children:"PDO Basics"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-php",children:'$db = new PDO("sqlite:".__DIR__."/database.db");\n'})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Creates a new PDO object for SQLite database."}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"__DIR__"}),": Path of the file being worked on."]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"new"}),": Keyword used to create new objects."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-php",children:"try {\n    // ...\n} catch (Exception $e) {\n    echo $e->getMessage();\n}\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Try-catch block for handling exceptions."}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"getMessage()"}),": Returns and prints the exception error message."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-php",children:"$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Sets PDO to throw exceptions for errors."}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-php",children:'$db->query("SQL COMMAND");\n'})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Queries the database for requested data."}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-php",children:"$db->prepare();\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Prepares a query for execution. ? can be used as a placeholder."}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-php",children:"$results->bindParam(placeholderNumber, $id, PDO::PARAM_INT);\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Binds a parameter to the query statement with specified data type."}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-php",children:"$results->execute();\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Executes the prepared statement."}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-php",children:'$db->query("SQL COMMAND")->fetchAll();\n'})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Queries the database and returns results as an array."}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-php",children:'$db->query("SQL COMMAND")->fetch();\n'})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Fetches one result from a SQL query."}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-php",children:'$db->query("SQL COMMAND")->fetchColumn();\n'})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Gets only one column from the requested query."}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-php",children:"filter_input();\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Sanitizes user's input to avoid SQL injection."}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-php",children:"empty($variable$);\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Checks if the variable is empty."}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-php",children:"RANDOM();\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Built-in SQL command that returns random rows."}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-php",children:"LOWER();\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Forces a SQL string to be lowercase."}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-php",children:"LIMIT #;\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Limits the number of rows returned by a query."}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-php",children:"ORDER BY variable;\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Orders the returned rows from a query."}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-php",children:"REPLACE();\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Built-in function that replaces characters when using ORDER BY."}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-php",children:"ceil();\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Rounds up to the next whole number."}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-php",children:"header();\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Redirects the user to a different page."}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-php",children:"LIMIT;\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Specifies how many items are limited to a page."}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-php",children:"OFFSET;\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Specifies the starting number for SQL."}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-php",children:"bindValue();\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Binds the variable at the moment of binding."}),"\n"]}),"\n",(0,r.jsx)(e.h1,{id:"project-overview",children:"Project Overview"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Personal media library stores data in an associative array."}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Databases are suitable for advanced sorting and holding large data."}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Tables: Media, Genre, Role, and People."}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Relationships: Media-Role-People, Media-Genre."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h1,{id:"introducing-objects",children:"Introducing Objects"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"PHP uses PDO for connecting to databases."}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Object combines properties and methods."}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"->"})," allows access to object properties/methods."]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"A class defines properties and methods."}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"An object instantiates its class."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h1,{id:"getting-started-with-pdo",children:"Getting Started with PDO"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Link to find the driver for a new PDO object."}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"PDO can connect to SQL databases locally or elsewhere."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-php",children:'$db = new PDO("mysql:host=localhost;dbname=DATABASE_NAME;port=3306", "USERNAME", "PASSWORD");\n'})}),"\n",(0,r.jsx)(e.h1,{id:"handling-exceptions",children:"Handling Exceptions"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Handling exceptions is crucial when connecting to external systems."}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Use try-catch blocks for handling exceptions."}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Specific exceptions should be caught."}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Set PDO to throw exceptions on error."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-php",children:"$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);\n"})}),"\n",(0,r.jsx)(e.h1,{id:"querying-the-database",children:"Querying the Database"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Queries retrieve data from the database."}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Handling exceptions is important."}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["Use ",(0,r.jsx)(e.code,{children:'$db->query("SQL COMMAND")'})," to query the database."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h1,{id:"retrieving-the-result-set",children:"Retrieving the Result Set"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Result of a query is a PDOStatement Object."}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Use methods of PDOStatement."}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"fetchAll"})," organizes data into an array."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h1,{id:"working-with-query-results",children:"Working with Query Results"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"fetchAll"})," returns a multi-layered array."]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["Use ",(0,r.jsx)(e.code,{children:"FETCH_NUM"})," for column number index."]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["Use ",(0,r.jsx)(e.code,{children:"FETCH_ASSOC"})," for column name index."]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"fetchAll(PDO::FETCH_ASSOC)"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h1,{id:"integrating-database-results",children:"Integrating Database Results"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Limit code relying on the database for faster changes."}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Separate concerns for easier maintenance."}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Use includes for reusable code."}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Proper database usage improves performance."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h1,{id:"refactoring",children:"Refactoring"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Restructure and improve existing code."}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Make code easier to read and maintain."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h1,{id:"understanding-relationship-tables",children:"Understanding Relationship Tables"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Relational databases establish data relationships."}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Types: One-to-one, Many-to-one, Many-to-many."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h1,{id:"querying-multiple-tables-with-join",children:"Querying Multiple Tables with JOIN"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"JOIN"})," combines tables for more data."]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"LEFT OUTER JOIN"})," grabs matching rows from the right table."]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"fetch"})," retrieves one result from a query."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h1,{id:"understanding-sql-injections",children:"Understanding SQL Injections"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Prevent injecting SQL statements into the browser."}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Filter input and escape output."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h1,{id:"preparing-sql-statements",children:"Preparing SQL Statements"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Filter and sanitize all inputs for security."}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["Use ",(0,r.jsx)(e.code,{children:"prepare"})," to set a query without executing."]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["Use ",(0,r.jsx)(e.code,{children:"bindParam"})," to set placeholder and variable."]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["Use ",(0,r.jsx)(e.code,{children:"execute"})," to run the prepared statement."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h1,{id:"adding-a-second-query",children:"Adding a Second Query"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Early return: return object if condition is met."}),"\n"]}),"\n",(0,r.jsx)(e.h1,{id:"fetching-in-a-while-loop",children:"Fetching in a While Loop"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Use a while loop for formatting results."}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-php",children:'while ($row = $results->fetch(PDO::FETCH_ASSOC)) {\n    $item[$row["role"]][] = $row["fullname"];\n}\n'})}),"\n",(0,r.jsx)(e.h1,{id:"getting-specific-with-queries",children:"Getting Specific with Queries"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Make efficient queries for faster loading."}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["Use ",(0,r.jsx)(e.code,{children:"RANDOM()"})," for random entries."]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["Use ",(0,r.jsx)(e.code,{children:"LIMIT #"})," for row limits."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h1,{id:"filtering-data-by-category",children:"Filtering Data by Category"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["Use ",(0,r.jsx)(e.code,{children:"LOWER()"})," to make a SQL string lowercase."]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["Use ",(0,r.jsx)(e.code,{children:"ORDER BY variable"})," for row ordering."]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["Use ",(0,r.jsx)(e.code,{children:"REPLACE()"})," for character replacement."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h1,{id:"setting-up-pagination-variables",children:"Setting Up Pagination Variables"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Pagination is valuable for large datasets."}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Know items per page, total items, and current page."}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["Use ",(0,r.jsx)(e.code,{children:"fetchColumn"})," for one column from a query."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h1,{id:"calculations-and-links",children:"Calculations and Links"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["Use ",(0,r.jsx)(e.code,{children:"ceil()"})," to round up to the next whole number."]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["Use ",(0,r.jsx)(e.code,{children:"header()"})," to redirect the user."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h1,{id:"setting-limits",children:"Setting Limits"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Set limits in SQL queries for faster pages."}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["Use ",(0,r.jsx)(e.code,{children:"LIMIT"})," for item limits."]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["Use ",(0,r.jsx)(e.code,{children:"OFFSET"})," to specify starting point."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h1,{id:"adding-pagination-links",children:"Adding Pagination Links"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Use for loop for iteration."}),"\n"]}),"\n",(0,r.jsx)(e.h1,{id:"simplifying-with-a-function",children:"Simplifying with a Function"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Use SQL correctly for simpler HTML forms."}),"\n"]}),"\n",(0,r.jsx)(e.h1,{id:"setting-up-the-search-form",children:"Setting Up the Search Form"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Search functionality is crucial."}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["Use form attributes ",(0,r.jsx)(e.code,{children:"action"})," and ",(0,r.jsx)(e.code,{children:"method"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["Use ",(0,r.jsx)(e.code,{children:"GET"})," for data retrieval, ",(0,r.jsx)(e.code,{children:"POST"})," for actions."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h1,{id:"matching-search-patterns",children:"Matching Search Patterns"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Insert user input into a variable."}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["Use ",(0,r.jsx)(e.code,{children:"LIKE"})," operator for pattern matching."]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["Include wildcards ",(0,r.jsx)(e.code,{children:"%"})," at both ends of pattern."]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["Use ",(0,r.jsx)(e.code,{children:"bindValue()"})," for parameter binding."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h1,{id:"creating-the-search-function",children:"Creating the Search Function"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Make it clear to the user what they are seeing."}),"\n"]}),"\n",(0,r.jsx)(e.h1,{id:"accounting-for-empty-results",children:"Accounting for Empty Results"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Inform the user when no results are found."}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["Use ",(0,r.jsx)(e.code,{children:"htmlspecialchars()"})," for output filtering."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h1,{id:"combining-search-and-pagination",children:"Combining Search and Pagination"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Integrate search with pagination"}),"\n"]})]})}function o(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>c,x:()=>d});var i=s(6540);const r={},l=i.createContext(r);function c(n){const e=i.useContext(l);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),i.createElement(l.Provider,{value:e},n.children)}}}]);