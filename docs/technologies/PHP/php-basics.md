

| \<?php CODE ?\> | Tag around PHP code. |
| :---- | :---- |
| echo | Display information to the screen. |
| // | Creates a single line comment |
| /\*   \*/ | Multiline Comment |
| $variable; $variable \= value; | Ways of establishing variables in PHP. |
| var\_dump() | Returns the type of the variable.  |
| \+, \-, \*, /, \*\* | Mathematical Operators |
| \+=, \-=, \*=, /= | Combined Operators.  |
| \\n | Newline |
| \\t | tab. |
| . | Concatenate multiple strings/values together |
| .= | Concatenates multiple values into a string using an assignment operator. |
| \== | Compare two variables regardless of type. |
| \=== | Compares two variables but must be the same type. |
| if (condition) {   } | An if statement in PHP. |
| else {    } | An else statement in PHP. |
| elseif {    } | Chains if statements in PHP. |
| getlastmod() | Get the last time that the page was modified.  |
| Include ‘rel path’ | Include other php files into the webpage. |

Getting Started with PHP:

* One of the most widely used technologies.   
* First released in 1995\.  
* PHP: Personal Homepage Tools now PHP Hyper-text Preprocessor  
* Maintained by 10 developers and comes with many frameworks and packages.   
* No installation needed, comes preinstalled normally.   
* Can be embedded into HTML using code blocks.   
* Does not need to be compiled.   
* Server Side Language \- code is processed on the web server. The user only receives HTML.   
  * Will not see PHP code in browser when testing. 

Intro to Workspaces and PHP Code

* PHP can also be used as a general scripting language.  
* Can be run in a CLI. (Command Line Interface)  
* PHP Code is put into codeblocks.  
  * \<?php INSERT CODE HERE ?\>  
* echo : Command that displays information to the screen  
* Each line ends with a semicolon.  
* PHP does not care about extra whitespace  
  * Spacing is still best practice for readability.

PHP Comments:

* Comments allow you to make notes in code to make the code easier to read.   
* Can explain the how and why.   
* Comments allow for better organization.  
* Three types of comments:  
  * Single Line: Created using two forward slashes //  
    * Can be used to comment out lines.  
    * Can be as long as you want.  
  * Multi Line:  
    * A single line can span multiple lines if no hard returns are used.  
    * Can also use multiple single line comments.  
    * For multi lines: Use a forward slash and an asterisk. /\*     \*/  
  * Doc Block:   
    * Is used to give documentation for specific sections of code or the entire file.   
      * Should include author, summary, version, and license.   
      * Created using /\* and ends with \*/ but each line has a space and an asterisk. 

Variables in PHP

* Two parts of Code:  
  * Retrieval and storage of data.  
  * Logic of what to do with data and when.  
* Variables are boxes for data, it can change shape or form, but it is the same variable.   
* Variables are identified by their own unique name.   
* Always begin with a $ in PHP.   
* Variables cannot be started with a number.  
* Can be created empty by just putting the semicolon.   
* A value can be established using the \= sign.  
* 4 Scalar variable types are supported in PHP.  
  * Bool  
  * Int  
  * Floats  
  * Strings  
* There are also arrays and objects in PHP.  
* A variable reference must also have the $ sign. 

Integers

* Integers are whole numbers 1 \- 9 and can be negative.   
* Functions are snippets of code that perform a certain task.  
* var\_dump() : Prints in the output what a variable is and its type.  
* Supports all the normal operators. (+, \-, \*, /)

Floats:

* Keep track of fractional and decimal values.   
* Normally used to keep track of distance or currency.  
* Supports the basic operators.  
* A floating point will return a float type if it is used in any operator.


Arithmetic Operators

* Anything that takes two or more values and returns one value. Normally are the math operators.   
* \* is the multiplication operator.  
* / is the division operator.  
* The operators will return the type that is needed for the result of the operation.  
* \++ is the incrementing operator. Will add one to a value.  
* – is the decrementing operator. Will subtract one from a value.  
  * If these operators are before the variable, they will return the result in the same call. If they are after, they will not return the operated results.   
* Also supports combined operators: (+=, \-=, \*=, /=).

Creating a simple Unit Conversion Tool:

* Echo will output information all on the same line. 

Strings:

* A string is a series of characters specified between single or double quotations.  
* Single quotes strings represent each character in the string.  
* Double quoted strings allow you to represent variables inside the string.   
  * PHP adds/expands the variable in the string.

Escaped Sequences:

* Escape Sequences allow you to put certain symbols in strings using a backslash.  
* Break out of the way PHP normally interprets strings.  
* Two types:  
  * Backslashes with an alphanumeric character.  
    * Ex: /n: newline, /t: tab  
  * Backslashes with a symbol.  
    * Ex: /$  
* You can display the other types of quotes if it is surrounded by the first type:  
  * ‘This would show “double quotes”’  
* Escape sequences are only used for double quotes except for \\’. 

Combining Strings:

* Concatenation \- Combining data into a string.  
* Two string operators for concatenation:  
  * . : Adds 1 or more strings together  
  * .= Adds the argument on the right to the variable on the left.  
* Statements can be combined using multiple lines, but it is not normally as readable as on one line.   
  * If on multiple lines, start with the concatenation character. 

Booleans:

* Can either be true or false. Can take on no other values.  
* Not case sensitive when it comes to boolean values. Can either be true or True.  
  * Should normally be lowercase.   
* Order of Operations: Top down.   
* We can test program conditions using an if statement. 

Comparing Values

* Operators can also compare two values. These are called comparison operators.   
* Equal and Identical Comparers  
* PHP is a weakly or loosely typed language. Types do not need to be specified.   
* PHP will juggle types to make them usable in more situations.   
  * Ex: Adding a string to an integer will result in an int type.  
* \== compares two variables regardless of type.  
* \=== compares two variables but must be the same type. 

Adding logic to programs:

* Evaluating and taking actions with data is done by using conditional statements.  
* If statements are the simplest of these.  
* if (condition) { } is the syntax for an if statement.   
* An else statement will have the program do something if the if condition is not true.   
* else {    }

Daily Exercise Program

* The date() function. Attribute is the way we want the date to be formatted.  
  * ‘N’ is the day of the week.

HTML and PHP:

* PHP was defined to be used to make web pages.   
* PHP can be added anywhere in an HTML file by using the PHP code tag.  
* The server needs to know that there is php in the file by changing the html extension to PHP.

Don’t Repeat Yourself:

* Use PHP variables to change multiple elements throughout the code.   
  * Useful when you need to use the same string multiple times.   
* You can use multiple PHP blocks throughout a webpage.  
* You only see HTML in the inspect element, not the PHP code. 

Let PHP Do the Work:

* date() function allows you to pull the current date.  
* getlastmod() : Gets time of last page modification.

Combining Multiple Files with Includes:

* PHP allows the inclusion of other files of codes while keeping them separate.  
  * It allows for better organization.  
  * Allows for less repetition.  
* Files that are included in the webpage are normally in a file called inc.  
  * Include ‘rel path’  
* In php, to control the output of php echos, html tags can be included in the php string to control the output.

