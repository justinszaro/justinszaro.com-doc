---
id: PHP File Handling
tags:
  - php
---

| scandir(‘path’) | Will scan the files in the requesting directory. Will only do the first level.  |
| :---- | :---- |
| is\_dir(“path”) | Will return a boolean on whether or not a path is a directory. |
| fopen(‘file’, ‘mode’) | A function that opens a connection to a file and returns a file handler.  |
| fclose($file\_handler) | Will chose the file handler and close the file.  |
| feof($file\_handler) | Returns of a boolean of whether or not you are at the end of the file.  |
| fgets($file\_handler) | Will get the line and move the pointer to the next line.  |
| strpos($line, $regex) | Will check if a string contains the regex line (Like .contains() in java).  |
| str\_replace(‘pattern’, ‘replaced\_pattern’, $string) | Will replace a pattern in a string with a different pattern.  |
| file\_put\_contents(‘path\_to\_file’) | Will get the entire contents of the file and store it as a string.  |
| file(‘path\_to\_file’) | Will store the contents of a file as a string.  |
| fwrite($file\_handler, ‘string’) | This function will write a string to a file.  |
| strcasecmp($a, $b) | A capitalized and binary safe way to compare strings.  |
| strip\_tags($str) | Will strip any HTML tags off a string.  |
| usort($array, ‘function\_name’) | Will sort an array based on the function fed into it.  |
| file\_put\_contents() | Will write an array to a file using the write mode or the append mode. |
| fgetcsv($fh) | Will return a line of csv as an array |
| array\_flip($array) | Will flip an array such that the key is the value and the value is the key. |
| extract($array) | Will pull out the keys of an array into its own variable.  |
| fputcsv($fh, $array) | Puts a new line in csv format to the end of a file.  |
| json\_decode($str) | Turns a string of JSON into a PHP object.  |
| is\_object() | Will check if a variable is an object.  |
| json\_encode($books, JSON\_PRETTY\_PRINT | JSON\_UNESCAPED\_SLASHES); | Will encode PHP objects back into JSON in a pretty format.  |
| opendir($dir) | Will open the entire directory as a file holder.  |
| readdir($fh) | Will read the name of each file in the open directory. |
| $xml-\>addChild(‘item’, opt ‘value’) | Add items to an XML file.  |
| $xml-\>asXML($file) | Load the XML data into the file.  |

Directory and File Structures:

* Everything on a computer is stored on some sort of file.   
* Opening and processing a file is common for application:  
  * Opening and interpreting a config file.  
  * Exporting data/order details.   
* Permissions control who has access to files. If a file cannot be opened, be sure to view its permissions.   
* Recall:   
  * . is the current directory  
  * .. is the parent directory  
  * Any file that starts with a dot is a hidden file.   
* is\_dir(‘path’) will return a boolean on whether or not a path is a directory.

Including and Opening files:

* When working with HTML files, you can use the include tag to add HTML.  
  * Ex: \<?php include 'data/html/countries.html'; ?\>  
* fopen(‘path’, ‘mode’) is a function that opens a connection to a file and returns a file handler.   
  * It is good to include this function in an if statement in case the file load fails.   
* fclose($file\_handler) is a function that will close the file handler and the file.   
* feof($fh) will return a boolean of whether or not you are at the end of a file.   
* fgets($fh) will grad the line and move the pointer to the next line.   
* str\_replace() is a function that will replace a section of a string with another piece. 

Reading Files Into a String or Array

* file\_put\_contents(“path”) will get the contents of the entire file and store it as a string.   
* file(‘path’) will store the contents of the file as an array.   
* Three Ways to Interact with a File:  
  * Open a connection to the file and handle it line-by-line before closing it  
  * Work with the entire file as a string  
  * Work with the entire file as an object or array.

Writing Files Line by Line:

* Writing files allows you to change files to update what is going one.   
* You can open the file for writing by using the ‘w’ mode:  
  * fopen(‘file\_name’, ‘w’);  
  * This will erase the contents, so be careful\!  
* fwrite($file\_handler, ‘string’)  
* PHP\_EOL.’string’ will add the proper end of line character when writing a file. 

Writing Files All at Once:

* Adding FILE\_IGNORE\_NEW\_LINES to the file() function will make it ignore all the newline characters \\n.  
* strcasecmp() is a binary safe string comparison function.   
* strip\_tags() will strip the HTML tags off of a string.   
* usort($array, ‘function\_name’) is a function that will sort an array based on the function fed into it.   
* file\_put\_contents(‘file\_path’, ‘string’) will write the contents of a string to a file. 

Personal Recommendations Project:

* Most popular file types:  
  * CSV  
  * JSON  
  * XML

Reading CSV:

* CSV stands for comma separated values  
* Normally contains a header, and then the values below it.   
* fgetcsv() will return an array of columns but only the line it is on.  
  * The first line will be the headers\!  
* Be sure to store the headers so you can use them when working with the rest of the file.

Writing CSV:

*  Start by making an array of the values you want to add.   
* Use the fputcsv($fh,  $array) function to add a csv line to a file.   
* Be sure to ensure that there is a newline before adding to a CSV.  
* fseek($fh, offset, whence) can change where the pointer is located when viewing a file. 

Reading JSON:

* JSON is an easy way to encode structured data. It is fairly easy for humans to read it.  
* JSON \- Javascript Object Notation.  
* JSON can be converted into Objects or arrays.   
* json\_decode() turns a string into a PHP object.   
* is\_object() will check if a variable is an object.   
* You can access the object by using \-\>.

Writing JSON:

* json\_encode can be used to turn a PHP object back into JSON. 

Reading XML:

* XML is a lot more detailed than JSON.  
* Used for rss feeds for blogs or podcasts.   
* When displaying XML, you need to include htmlspecialchars() so that the tags show up.   
* To open a whole directory, you can use the opendir() command.   
* readdir($fh) will read the file name of an open directory.   
* simplexml\_load\_file($file) will load the XML file into a PHP object.  
* This object can be accessed using the object syntax for PHP. 

Writing XML:

* To add data to an xml file, you use the addChild() function  
  * The function takes two arguments  
    * Key  
    * Value  
* XML does allow namespacing