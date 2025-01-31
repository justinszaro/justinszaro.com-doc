Introducing Superglobals `$_GET` and `$_POST`
* PHP Superglobal - associative array of data that is created by the server to capture information from URLs, HTML forms, cookies, sessions, and web servers. 
   * This information is available everywhere in the script. 
* Superglobals can be used without typing global $variable.
* A complete list of superglobals can be found in the documentation. 


Working with `$_GET` Values:
* `$_GET` superglobal is populated with information from the URL in the form of a query string. 
   * Ex: A query string with a person's username would look like this: http://localhost:8080/index.php?name=jonathan
* A query string starts with a ? and the `$_GET` superglobal would grab the name=jonathan.
* There can be multiple parameters. In this case, the query string would include two items and they would be separated by an & symbol.
* Note: A form attributes method must be set to “get” for the form to submit data via a URL.
* Since `$_GET` is an associative array, you can use the key to get the data:
   * Ex: $name = `$_GET`[‘name’];
* Since there are no values on page load, be sure to use an if statement and the isset() function to ensure no errors are thrown. 
* Using query strings is useful, but there are some security issues with it.
* Implications of using the GET method:
   * Security Risk due to the query string being visible.
   * Query Strings can be modified by anyone.
   * You can only submit a limited amount of information in a query string, so they can’t hold lots of information. 
   * They are the most powerful for sending information that affects the content and the presentation of a webpage. 


Using `$_GET` variables in a Function:
* Note how you can manually change the URL to change the information on the page.
* Also, be sure to consider what happens if the values are not set. 


Working with ``$_POST`` Values
* The `$_POST` superglobal sends data to the server in a message body and is not displayed in the URL as a query string.
* You can access the `$_POST` variable in the same way as the `$_GET` variable. 
* Note: A form’s method attribute must be set to method=post to submit form so that it is accessible to the `$_POST` superglobal.


Choosing Between `$_GET` and `$_POST`:
* Use the `$_GET` method for information if you are not passing sensitive or security vulnerable information. 
* Use the `$_POST` variable if you want to send data to the database or a file or if the information is sensitive. 
   * Ex: Handing passwords should be done with a POST request. 


Always Filter Inputs:
* The filter_input() function filters and validates external variables coming from insecure sources. 
   * This is done to prevent attacks like SQL injection
   * Ex: http://yourdomain.com/index.php?name=<a href="https://google.com">Click Me</a>
      * This link makes an unwanted domain name. 
* To avoid unwanted input, you can use the filter_input function like this
   * filter_input( INPUT_GET, ‘name’, FILTER_SANITIZE_STRING );
   * This would strip everything in the link above except for the Click Me. 
* The filter_input() takes three arguments
   * Filter Type:
      * INPUT_GET
      * INPUT_POST
      * INPUT_COOKIE
      * INPUT_SERVER
      * INPUT_ENV
   * The name of the variable
   * The ID or name of the filer to apply (see documentation)


Always Escape Outputs:
* Output is any data leaving the application for something else. 
* Goal of escaping output data: represent data in a way that will not allow it to execute or get interpreted. 
* There are three main function for escaping HTML data using PHP:
   * strip_tags()
   * htmlspecialchars()
   * htmlentities()
* strip_tags() function removes all HTML tags except for the one you specify. 
* The strip_tags() function takes two different arguments
   * The string to process
   * A string containing the tags you want to allow. 
   * Ex: strip_tags($str, '<p> <img>'');
* When outputting data that could contain HTML, you need to encode special characters to ensure that you don't add malicious or broken HTML to the page
* The htmlspecialchars() and htmlentities() functions can be used when outputting data for storage in a database or outputting it back to the webpage. 
* Both functions encode the < and > tags with &lt; and %gt;
* htmlentites() will encode every character that has an HTML entity equivalent, including lots and lots of symbols.