---
id: PHP Standards and Best Practices
tags:
  - php
  - best practices
---

# PHP Standards and Best Practices

| Command | Description |
| :---- | :---- |
| `new DateTime("year, month day")` | Creates a new datetime object |
| `echo $date->format("Format String")` | Formats a dateTime output into the requested string. |
| `new DateTime('2014-08-24 13:14', new DateTimeZone('UTC'))` | Made a datetime with the UTC timezone. |
| `$var = clone $variable` | Clones a datetime variable's properties and assigns it to another variable. |
| `$dateTime->setTimeZone(new DateTimeZone("America/New_York"))` | Sets a datetime’s timezone to eastern standard time. |
| `phpinfo()` | Outputs info about PHP() |
| `exit` | Stops a PHP script |
| `mb_internal_encoding('encode')` | Let mbstring know which encoder to use. |
| `mb_http_output('encode')` | Sets what encode http should use. |
| `header('Content-Type: text/html; charset=utf-8')` | Sets the header for the web page and specifies the character set. |
| `mb_strtoupper()` | Uppercase a string using mbstring |
| `mb_strlen()` | Length of a string using mbstring |
| `namespace name` | Makes a namespace for a class |
| `new namespace_name\Class` | Instantiates a class of the specified namespace. |
| `include 'path';` | Includes code from another file. |
| `composer require package-name` | Install a package. |
| `require 'path';` | Keywords like include, but will error if it is not found. |
| `error_reporting(E_ERROR | E_WARNING | E_PARSE);` | Choosing which errors are reported. |
| `error_reporting(E_ALL);` | Reports all errors. |
| `class ExceptionName extends Exception {}` | Makes a custom exception |
| `ini_set('display_errors', 1)` | Displays errors on the screen. |
| `$handle = fopen('file.txt.', 'r');` | Read a file in PHP |

## Introduction

* To keep the benefits of PHP, it is best to conform to best practices.
* There are groups that manage best practices:
  * IETF: HTTP Spec
  * WSC: HTTP

## History

* Historically, PHP was one of the first languages that developers learned.
* PHP had a lot of beginners, so it was common to find poor quality code in production.
* PHP Framework Interop Group - A group that writes standards for PHP projects to conform to.
* PHP the Right Way is an up-to-date information about packages and ways that tasks can be solved.

## Choosing a Database Extension

* Most PHP Applications interact with some kind of data store.
* SQL - Structured Query Language.
* Databases like SQL, PostgreSQL, and SQLite
* Can insert and query data using PHP.
* Three extensions can be used to interact with a MySQL database:
  * `mysql`
    * Deprecated, is being removed with the new version of PHP.
  * `mysqli`
    * A safe option for MySQL.
  * `pdo`
    * Normally worked with
    * Gives support for multiple types of databases.
* There are extensions for the other SQL

## Working with DateTime

* Has a core class called `DateTime`.
* Allows you to store and compare dates and times.
* `$date = new DateTime("year, month day")` makes a new datetime.
* Can be formatted with an echo: `echo $date->format("format string")`
  * `"m/d/Y" = 08/23/2022`
  * A SQL date string is the most commonly used format.
* Date times can also be created using keywords starting with a plus or a minus.
  * Ex:
    * `+2 week`
    * `tomorrow`
    * `next week`
  * The PHP manual has all of the supported formats.
  * If a format is not supported, we can make it.
    * `$raw_format = '10. 11. 1968';`
    * `$date = DateTime::createFromFormat('d. M. Y', $raw_format);`

## DateTime Comparisons

* DateTime objects can be compared directly.
* Avoid the old date and STR time functions.
* Avoid adding and subtracting specific numbers of seconds to change dates due to the difference in time zones.
* To find the difference between two datetimes:
  * `$var = $variable->diff($variable);`
* Can be formatted in a string using `%d` (day), `%m` (month), `%y` (year).
  * `echo $var->format("%y years, %m months, %d days");`

## Understanding Time Zones

* Time Zones are a big challenge for developers.
* Users should see the current time in their time zone.
* Things to remember:
  * Not all time zones are `+/- 1` hour, so storing integers does not work.
  * Not all time zones have daylight savings time
  * Political events can change time zones.
* Easy way is to store UTC dates into the database. Made into UTC on input and changed on the way out.
* To calculate times and offsets, developers store `+1` or `-4` as an integer in the database.
  * Is not the best way.
* SQL truncate floats, so only decimals can be included, so this isn’t useful.
* Best way is to store the time zone in the database and not just the offset.
* PHP uses IANA Time Zones, which is an international agency that keeps time zones up to date.
* To make a datetime with a UTC timezone: `new DateTime('2014-08-24 13:14', new DateTimeZone('UTC'))`

## Understanding UTF-8

* Unicode Transfer Format
* Collection of bits that coincide with a character set.
* UTF-8 is the most popular character encoding.
* Allows for emojis, international characters, and international symbols.
* Even if the website is in the US, people's names may need international symbols to write out.
* PHP working with UTF-8 is possible with a non-default extension called `mbstring`
* `phpinfo()`: Outputs information about installed and enabled modules.
  * `exit;` will stop the rest of the code from running.
* `mb_internal_encoding('encoding')`: Lets the `mbstring` extension know which encoding we are working with.
* `mb_http_output('encoding')`: Ensures that HTML is outputted using the proper encoding.
* The common PHP string functions are wrong in this case, so we need to use the `mbstring` functions instead.
* `mbstring` has a function for almost every string function, so just use the `mb_` prefix.
* Databases also need to be configured to use UTF-8.

## Namespaces

* Common idea in programming languages.
* Namespaces allow for two classes/functions of identical names to be used without causing conflicts.
* Can be used with classes, functions, and constants
* Using two classes of the same name will cause an error, unless the second one is in a namespace.
* You can declare a namespace in a class using the `namespace` command:
  * `namespace HTTP;`
* This can then be referenced when making the class:
  * `new HTTP\Client`

## Autoloading

* Very useful for Object Oriented Programming
* Allows for code that is needed to be autoloaded.
* The autoloader and files must have the same rules.
* Takes over the `include` keyword.
* The `spl_autoload_register` function will be called if PHP does not recognize a class.
* Double backslashes are used because the first one is an escape character.
* It may be a good idea to use the standard for autoloading and file paths so that autoloaders work properly.

## Composer

* Powerful dependency manager.
* Helps developers share and implement shared code.
* Can specify versions, stability levels, and easily run updates.
* Composer can be used in the terminal by using the `composer` command.
* Install a package: `composer require package`
* Makes a `composer.json` file with all of the packages that need to be installed, along with their versions.
* `league/flysystem` is a file manager package.
* Can use its own autoloader.

## Creating Components

* Components are also called packages.
* It is common to have a namespace and a class for the main class of the component.
* All of the code is in an `src` folder.
* Unit Testing is easier and more efficient than testing in the browser.
* To install `phpunit`: `composer require phpunit/phpunit --dev`
  * `--dev` means that it will not be installed on production environments.

## PSR-1

* It has become far more common for people to use standards and recommendations to increase compatibility between projects and code.
* PSR-1 is a standard recommendation for what to include in your PHP code:
  * Code must use a long tag (`<?php ?>`) or a short echo tag (`<?= ?>`).
  * Should be in UTF-8
  * A file should declare new symbols (classes, functions, constants, etc.) and cause no other effects, or it should execute logic with side effects, not both.
    * Side effects are generating output, explicitly using `require` or `include`, connecting to global services, reading and writing to a file, etc.
  * Namespaces and classes must follow PSR-0 or PSR-4
  * PSR-1 is not an automatic standard
  * Namespaces and Classes need to be studly caps.
    * Ex: Turtle, British, JumpingJacks
  * Functions are camelCase
    * Ex: jumpingJacks
* PSR-1 can be found on php-fig.org
* Keep file loading to a minimum.

## PSR-2

* More controversial recommendation.
* Is a style guide, which is more personal.
* Allows for everyone to conform to a chosen style guide.
* Works well for teams (where brackets go)
* Rules and Overview:
  * Code must be compliant with PSR-1
  * Code must use 4 spaces for indenting, not tabs.
  * There must not be a hard limit on line lengths, soft limit is 120 characters, lines should be 80 characters or less.
  * There must be one blank line after the one namespace declaration.
  * There must be one blank line after the block of use declarations.
  * Put curly brackets on their own lines.
  * Visibility must be declared on all properties and methods.
  * Abstract and Final must be declared before the visibility.
  * Static must be declared after the visibility.
  * Control Structure keywords must have one space after them.
    * If, else, switch, do, while, for each
    * Braces must go on the same line, closing after the body.
  * Method and function calls must not have a space after them.
* PHP code sniffer will match our code with PSR-2
  * To download: `composer require squizlabs/php_codesniffer`
  * To run: `./vendor/bin/phpcs src --standard=PSR2`
  * To fix automatically: `./vendor/bin/phpcbf src --standard=PSR2`

## Composer Metadata

* Extra data in the composer file needs to be defined so that it can be submitted to the repository.
* A name needs to be added that is unique. Includes a vendor name and a package name.
* A description is added about the package.
* Optional: An array of keywords of arbitrary strings in alphanumeric order.
* License: what can be done with the code
* Author: an array with square brackets of each author. Each author can have 4 properties.
  * Author name
  * Author email
  * Homepage - blog/github/company address
  * Role - “developer”
* Require: Packages that are required for your package to run.
  * Can specify a PHP version.
* The command: `composer validate` will ensure that the JSON file is valid.

## Semantic Versioning

* Composer enforces semantic versioning.
* Version numbers have 3 parts.
  * Major: Backwards incompatible changes
    * Renaming classes and methods
  * Minor: Backwards compatible changes
    * Anything that doesn’t break the API
  * Patch:
    * Doesn’t add functionality
    * For bug fixes and securities.
* Initially, a package has the version 0.1.0.

## Errors

* PHP is an exception light language.
* Errors are normally thrown instead of exceptions
* Errors have different levels.
* Most common errors are:
  * `E_ERROR`
  * `E_NOTICE`
  * `E_WARNING`
* PHP will normally keep executing if it has an error.
* A core error function is used to see what error is ignored or reported.
  * `error_reporting(E_ERROR | E_WARNING | E_PARSE);`
    * Reports these errors.
* To report all errors: `error_reporting(E_ALL);`
* In production, no errors should be displayed or thrown.

## Exceptions

* Exceptions are available if you want to include them in your code.
* Exceptions thrown make errors obvious.
* You can make your own exceptions: `class ExceptionName extends Exception {}`
* `Buzz\Browser` is a package that allows you to work with HTTP calls.
* Switch elements allow you to specify cases.
  * `default:` covers all other cases.
* Try catch blocks will attempt code and if it errors, it throws an exception. The catch block will catch exceptions and perform a different task instead.

## Converting Errors to Exceptions

* PHP can convert its errors to exceptions.
* Useful when errors cannot be avoided
  * Ex: Finding a file.
* Converting errors to exceptions can help you handle race conditions.
* To read a file: `$handle = fopen('file.txt.', 'r');`
* Errors can be converted to Exceptions using the `set_error_handler` function:
  ```php
  set_error_handler(function ($errno, $errstr, $errfile, $errline) {
    throw new ErrorException($errstr, 0, $errno, $errfile, $errline);
  });
  ```
* Once converted to an exception, the exception has to be caught.
* Helps to find hidden errors.

## Logging with PSR-3

* No errors or exceptions should be shown to the user in production.
* Errors and exceptions should be logged in production.
* PSR-3 standardizes the interfaces for basic logging interactions.
* You need to use an actual logger system to implement PSR-3.
* Monolog is a great logger system.
  * `composer require monolog/monolog`
* A new log channel should be made with its own `pushHandlers`.
* `debug`, `warning`, `critical`, and `error` are all provided by PSR-3.