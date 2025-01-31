

| alert(‘message’) | Display a message to the screen. |
| :---- | :---- |
| prompt(‘Message’) | A dialog box appears with the message and the requested input.  |
| console.log(“message”) | Outputs a log to the javascript console. Super useful for debugging. |
| document.write(“message”) | Writes a message to the webpage, but it completely removes the rest of the webpage.  |
| \<script src=”path”\>\</script\> | Adds the script to the HTML file.  |
| var name | Declare a variable. You can also assign a value.  |
| let name | Same as the var keyword, but the variable cannot be reassigned later in the program. |
| const name | The const keyword allows you to set a variable to a value that is unchangeable.  |
| string.length | Will return an integer of the number of characters in the string.  |
| string.toUpperCase() | Will transform a string to all uppercase characters |
| string.toLowerCase() | Will transform a string to all uppercase characters |
| prompt(“message”) | Asks the user to input some text. This text will be interpreted as a string.  |
| document.querySelector(‘tagname, class, or id’ ) | Will target the first HTML element that matches the tagname, class, or id. |
| document.querySelector(‘tagname, class, or id’ ).innerHTML | Allows you to change the text within an HTML element.  |
| add\_shortcode( ‘shortcode\_name’, ‘function name’ ) | Creates shortcodes that posts can easily use.  |
| wp\_create\_user( $username, $password, $email ) | Adds a new user to the Users table.  |

JavaScript Everywhere:

* JavaScript is usable in any web browser.  
* Started as a basic scripting language.  
* Where you can find JavaScript:  
  * Fun features to web pages.  
  * Complex animated experiences  
  * Games can be made using Javascript  
* You can run Javascript directly in the web browser.   
* Javascript files are suffixed by .js  
* You can run Javascript directly in the browser in the JS Console.   
  * Keybind: CMD \+ OPTION \+ J  
  * Great for running and testing javascript code.   
  * It allows you to change the webpage you are currently on.  
  * Refreshing will reset the page.   
* NodeJS is a web server choice that allows you to run javascript in it.

Display Messages in JavaScript:

* JavaScript can run in browsers, so you can start development right away.   
* You can perform basic math operations in the javascript console.   
* Strings can be echoed back by sending a string into the console.   
* alert(“message”); Will cause a dialog box to pop up on the screen.   
* All javascript statements end with a semicolon  
* console.log(“message”) \- Outputs a log to the javascript console.   
* document.write(“message”) \- Outputs a message to the current webpage.  
  * Document is the current webpage.

Your First JavaScript Program:

* Shift-Return will allow you to run multiple lines of code at the same time in the Javascript console.   
* HTML and Markup can be included in the document.write() function.

Add JavaScript to HTML:

* It is common to separate your HTML and JS code into separate files.  
* JavaScript Engine \- A program (or interpretor) built into the browser that executes JavaScript code.    
* You will write most of the JS code in its own file.   
* You link/connect your JS file to the HTML.  
* To include the javascript file in your html, you use the \<script\> tag.  
  * \<script src=”path”\>\</script\>  
  * This goes inside the head of the document.  
* You can also add JS directly inside the HTML using the script tags.  
  * Ex: \<script\> alert(); \</script\>  
* You cannot both link and execute HTML tags at the same time.   
* It is common to have more than one script tag.   
* You want to put the javascript at the bottom of the page so that the HTML loads into the browser first  
  * It improves performance.   
  * It should go just before \</body\>

Debug JavaScript in the Console:

* The javascript console will spew out any errors or exceptions that are thrown in the javascript engine.   
* JavaScript is a case-sensitive language. 

Introducing Variables:

* Information that changes is way more useful than having always set values.   
* Variables \- a way of storing and keeping track of information throughout the program.   
* Each variable needs to have its own unique name  
* Each variable starts with the keyword var.  
* To declare a variable:  
  * var name  
* Variables can be rewritten to take on a different value. 

Naming Variables:

* There are a few rules for naming variables.   
  * You cannot name a variable the same as a keyword.   
  * Names cannot start with a number  
  * Names can only contain letters, numbers, and the $ and \_ characters.   
* It is convention to use camelcase for naming variables in JavaScript.  
* Your variable should be named something that describes what the variable is being used for.

Change the Value in a Variable:

* You can change the value of a variable by assigning it to a different value.   
* The variables can also be used in mathematical operators if it is in integer or a float value.   
* There is a shorthand method for adding to the contents of a variable.  
  * score \+= 10;

Define Variables with let and const:

* There are also two new ways to declare variables: let and const  
* Let is used when you want a variable to be able to change throughout the program. However, you cannot redeclare the variable.  
* Const is used when you want to set a variable's value and make it unable to be overwritten.   
  * You cannot modify this variable through mathematical operators. 

Spacing and New Lines in Javascript:

* JavaScript does not care much for spaces.   
* Space is good when its addition makes the code easier to read and to understand.   
* Spaces do need to be added when you are using a JavaScript keyword.   
* You can also not separate the name of a variable. 

Introducing Strings:

* Values are the information put into variables.  
* Values are built-in data types.  
* Strings are used for words, sentences, and other things in a program.  
* Strings are surrounded by quotation marks.   
  * You can use double quotes or single quotes, but you must be consistent.   
* If you want to put a quotation mark in your string, use the other type to surround the string.   
* You can also use an escape character \\ to use quotation marks inside of string.  
* You cannot separate a string onto multiple lines without including a backslash at the end of each line. 

Transform and Manipulate Strings

* Strings are treated as objects behind the scene.   
* You can use properties and methods on strings to manipulate them.  
* You can view a strings length by doing string.length  
* You can access properties of objects using the . notation.   
* .length can also be used on a raw string.   
* A method is an action that you can perform on a string.  
* toUpperCase() will take a string and transform it to all uppercase letters.  
* toLowerCase() will take a string and transform it to all lowercase letters. 

Capture Input:

* Input can be captured many different ways.   
* prompt(): is a method that asks the user for input.  
  * This input needs to be captured in a variable.   
  * This input can be seen by sending the variable to the console logs. 

Combine Strings:

* Combining two strings together is called concatenation.   
* Concatenation \- The process of combining two or more strings to create a bigger string.   
* Strings can be combined using the plus operator. Be sure to include spaces if the strings don’t include it.  
* You can also use the addition assignment operator: \+=

Template Literals:

* Template Literals are more easily read.   
* Template Literals are created by using two backticks instead of quotes: \`  
* Template literals can have variables entered into them dynamically:  
  * \`Hello, ${name}\`  
* You can also do math within the curly braces in a template literal.   
* Quotes can also be used within the template literal.   
* Template literals can also stand over multiple lines without needing to use the escape character. The output is also conserved, meaning the format is the same. 

Display the Value of a String on the Page:

* The method document.querySelector(‘tagname, class, or id’, ) allows you to target an HTML element and manipulate it.   
* Using the .innerHTML property allows you to change the text within the HTML element.   
* You can learn more about strings on the MDM documentation pages for JavaScript.   
* Shortcode can be added directly to pages to change its functionality.   
  * Ex: \[get\_posts\_example posts\_per\_page=3 orderby=”rand”\]  
  * Adds three posts to the page.   
* Pre\_get\_posts is consistent and simple to use. It customizes the main WordPress query.  
* Get\_posts creates side loops  
* WP\_Query allows you to create your own custom loops. You can query your own posts and create your own code on how to manage them.  
  * ShortCode \[wp\_query\_example\]  
* It is common to output an error if no posts could be found. \\  
* add\_shortcode( ‘shortcode\_name’, ‘function name’ )

Introducing Conditional Statements:

* Syntax for an IF Statement:  
  * if (condition) {}  
* You can also include an else clause with an if statement in the same way as PHP  
  * else {}  
* Conditionals:  
  * \=== \- Strict equality operator, must be exactly the same

Comparison Operators:

* \>=  
* \>=  
* \>  
* \<  
* \== \- equal to  
* \=== \- Strict Equal to  
* \!= \- Not equal to  
* \!== Strict Not Equal To

Boolean Values:

* Conditions just create booleans  
* The two booleans are true and false  
* The \+ operator in front of a string will convert it to a number for comparison. 

Program Multiple Outcomes:

* If you want to include more than two outcomes, you can also use the else if statement.  
* Example:  
  * If (condition) {  
  * } else if (condition) {  
  * } else {  
  * }

Test Multiple Conditions With the && Operator:

* The && operator allows you to chain multiple conditions together.  
* Both of these conditions must both be true for the whole boolean to be true.   
* The conditions are evaluated separately

Test Multiple Conditions With the || Operator:

* The || operator allows you to chain multiple conditions together.  
* Only one of these conditions must both be true for the whole boolean to be true.   
* The conditions are evaluated separately

Document Your Code with Comments:

* A single line comment begins with two slashes: // This is a comment  
* A multi-line comment begins with an asterisk and slash and ends with an asterisk and a slash:  
* /\*  
* This is a multiline comment  
* \*/