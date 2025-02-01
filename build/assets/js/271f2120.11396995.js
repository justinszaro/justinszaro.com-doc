"use strict";(self.webpackChunkjustinszaro_com_docs=self.webpackChunkjustinszaro_com_docs||[]).push([[2662],{7134:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"technologies/PHP/PHP Standards and Best Practices","title":"PHP Standards and Best Practices","description":"| Command | Description |","source":"@site/docs/technologies/PHP/php-standards-and-best-practices.md","sourceDirName":"technologies/PHP","slug":"/technologies/PHP/PHP Standards and Best Practices","permalink":"/docs/technologies/PHP/PHP Standards and Best Practices","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"php","permalink":"/docs/tags/php"},{"inline":true,"label":"best practices","permalink":"/docs/tags/best-practices"}],"version":"current","frontMatter":{"id":"PHP Standards and Best Practices","tags":["php","best practices"]},"sidebar":"technologies","previous":{"title":"PHP Basics","permalink":"/docs/technologies/PHP/PHP Basics"},"next":{"title":"Easy Peasy Tutorials","permalink":"/docs/technologies/React/Packages/EasyPeasy/tutorials"}}');var l=s(4848),t=s(8453);const r={id:"PHP Standards and Best Practices",tags:["php","best practices"]},d="PHP Standards and Best Practices",c={},o=[{value:"Introduction",id:"introduction",level:2},{value:"History",id:"history",level:2},{value:"Choosing a Database Extension",id:"choosing-a-database-extension",level:2},{value:"Working with DateTime",id:"working-with-datetime",level:2},{value:"DateTime Comparisons",id:"datetime-comparisons",level:2},{value:"Understanding Time Zones",id:"understanding-time-zones",level:2},{value:"Understanding UTF-8",id:"understanding-utf-8",level:2},{value:"Namespaces",id:"namespaces",level:2},{value:"Autoloading",id:"autoloading",level:2},{value:"Composer",id:"composer",level:2},{value:"Creating Components",id:"creating-components",level:2},{value:"PSR-1",id:"psr-1",level:2},{value:"PSR-2",id:"psr-2",level:2},{value:"Composer Metadata",id:"composer-metadata",level:2},{value:"Semantic Versioning",id:"semantic-versioning",level:2},{value:"Errors",id:"errors",level:2},{value:"Exceptions",id:"exceptions",level:2},{value:"Converting Errors to Exceptions",id:"converting-errors-to-exceptions",level:2},{value:"Logging with PSR-3",id:"logging-with-psr-3",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"php-standards-and-best-practices",children:"PHP Standards and Best Practices"})}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Command"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:'new DateTime("year, month day")'})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Creates a new datetime object"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:'echo $date->format("Format String")'})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Formats a dateTime output into the requested string."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"new DateTime('2014-08-24 13:14', new DateTimeZone('UTC'))"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Made a datetime with the UTC timezone."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"$var = clone $variable"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Clones a datetime variable's properties and assigns it to another variable."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:'$dateTime->setTimeZone(new DateTimeZone("America/New_York"))'})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Sets a datetime\u2019s timezone to eastern standard time."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"phpinfo()"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Outputs info about PHP()"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"exit"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Stops a PHP script"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"mb_internal_encoding('encode')"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Let mbstring know which encoder to use."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"mb_http_output('encode')"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Sets what encode http should use."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"header('Content-Type: text/html; charset=utf-8')"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Sets the header for the web page and specifies the character set."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"mb_strtoupper()"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Uppercase a string using mbstring"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"mb_strlen()"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Length of a string using mbstring"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"namespace name"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Makes a namespace for a class"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"new namespace_name\\Class"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Instantiates a class of the specified namespace."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"include 'path';"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Includes code from another file."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"composer require package-name"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Install a package."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"require 'path';"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Keywords like include, but will error if it is not found."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"`error_reporting(E_ERROR"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"E_WARNING"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"error_reporting(E_ALL);"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Reports all errors."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"class ExceptionName extends Exception {}"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Makes a custom exception"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"ini_set('display_errors', 1)"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Displays errors on the screen."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"$handle = fopen('file.txt.', 'r');"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Read a file in PHP"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"To keep the benefits of PHP, it is best to conform to best practices."}),"\n",(0,l.jsxs)(n.li,{children:["There are groups that manage best practices:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"IETF: HTTP Spec"}),"\n",(0,l.jsx)(n.li,{children:"WSC: HTTP"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"history",children:"History"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Historically, PHP was one of the first languages that developers learned."}),"\n",(0,l.jsx)(n.li,{children:"PHP had a lot of beginners, so it was common to find poor quality code in production."}),"\n",(0,l.jsx)(n.li,{children:"PHP Framework Interop Group - A group that writes standards for PHP projects to conform to."}),"\n",(0,l.jsx)(n.li,{children:"PHP the Right Way is an up-to-date information about packages and ways that tasks can be solved."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"choosing-a-database-extension",children:"Choosing a Database Extension"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Most PHP Applications interact with some kind of data store."}),"\n",(0,l.jsx)(n.li,{children:"SQL - Structured Query Language."}),"\n",(0,l.jsx)(n.li,{children:"Databases like SQL, PostgreSQL, and SQLite"}),"\n",(0,l.jsx)(n.li,{children:"Can insert and query data using PHP."}),"\n",(0,l.jsxs)(n.li,{children:["Three extensions can be used to interact with a MySQL database:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"mysql"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Deprecated, is being removed with the new version of PHP."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"mysqli"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"A safe option for MySQL."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"pdo"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Normally worked with"}),"\n",(0,l.jsx)(n.li,{children:"Gives support for multiple types of databases."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"There are extensions for the other SQL"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"working-with-datetime",children:"Working with DateTime"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Has a core class called ",(0,l.jsx)(n.code,{children:"DateTime"}),"."]}),"\n",(0,l.jsx)(n.li,{children:"Allows you to store and compare dates and times."}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:'$date = new DateTime("year, month day")'})," makes a new datetime."]}),"\n",(0,l.jsxs)(n.li,{children:["Can be formatted with an echo: ",(0,l.jsx)(n.code,{children:'echo $date->format("format string")'}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:'"m/d/Y" = 08/23/2022'})}),"\n",(0,l.jsx)(n.li,{children:"A SQL date string is the most commonly used format."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Date times can also be created using keywords starting with a plus or a minus.","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Ex:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"+2 week"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"tomorrow"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"next week"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"The PHP manual has all of the supported formats."}),"\n",(0,l.jsxs)(n.li,{children:["If a format is not supported, we can make it.","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"$raw_format = '10. 11. 1968';"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"$date = DateTime::createFromFormat('d. M. Y', $raw_format);"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"datetime-comparisons",children:"DateTime Comparisons"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"DateTime objects can be compared directly."}),"\n",(0,l.jsx)(n.li,{children:"Avoid the old date and STR time functions."}),"\n",(0,l.jsx)(n.li,{children:"Avoid adding and subtracting specific numbers of seconds to change dates due to the difference in time zones."}),"\n",(0,l.jsxs)(n.li,{children:["To find the difference between two datetimes:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"$var = $variable->diff($variable);"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Can be formatted in a string using ",(0,l.jsx)(n.code,{children:"%d"})," (day), ",(0,l.jsx)(n.code,{children:"%m"})," (month), ",(0,l.jsx)(n.code,{children:"%y"})," (year).","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:'echo $var->format("%y years, %m months, %d days");'})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"understanding-time-zones",children:"Understanding Time Zones"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Time Zones are a big challenge for developers."}),"\n",(0,l.jsx)(n.li,{children:"Users should see the current time in their time zone."}),"\n",(0,l.jsxs)(n.li,{children:["Things to remember:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Not all time zones are ",(0,l.jsx)(n.code,{children:"+/- 1"})," hour, so storing integers does not work."]}),"\n",(0,l.jsx)(n.li,{children:"Not all time zones have daylight savings time"}),"\n",(0,l.jsx)(n.li,{children:"Political events can change time zones."}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"Easy way is to store UTC dates into the database. Made into UTC on input and changed on the way out."}),"\n",(0,l.jsxs)(n.li,{children:["To calculate times and offsets, developers store ",(0,l.jsx)(n.code,{children:"+1"})," or ",(0,l.jsx)(n.code,{children:"-4"})," as an integer in the database.","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Is not the best way."}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"SQL truncate floats, so only decimals can be included, so this isn\u2019t useful."}),"\n",(0,l.jsx)(n.li,{children:"Best way is to store the time zone in the database and not just the offset."}),"\n",(0,l.jsx)(n.li,{children:"PHP uses IANA Time Zones, which is an international agency that keeps time zones up to date."}),"\n",(0,l.jsxs)(n.li,{children:["To make a datetime with a UTC timezone: ",(0,l.jsx)(n.code,{children:"new DateTime('2014-08-24 13:14', new DateTimeZone('UTC'))"})]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"understanding-utf-8",children:"Understanding UTF-8"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Unicode Transfer Format"}),"\n",(0,l.jsx)(n.li,{children:"Collection of bits that coincide with a character set."}),"\n",(0,l.jsx)(n.li,{children:"UTF-8 is the most popular character encoding."}),"\n",(0,l.jsx)(n.li,{children:"Allows for emojis, international characters, and international symbols."}),"\n",(0,l.jsx)(n.li,{children:"Even if the website is in the US, people's names may need international symbols to write out."}),"\n",(0,l.jsxs)(n.li,{children:["PHP working with UTF-8 is possible with a non-default extension called ",(0,l.jsx)(n.code,{children:"mbstring"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"phpinfo()"}),": Outputs information about installed and enabled modules.","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"exit;"})," will stop the rest of the code from running."]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"mb_internal_encoding('encoding')"}),": Lets the ",(0,l.jsx)(n.code,{children:"mbstring"})," extension know which encoding we are working with."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"mb_http_output('encoding')"}),": Ensures that HTML is outputted using the proper encoding."]}),"\n",(0,l.jsxs)(n.li,{children:["The common PHP string functions are wrong in this case, so we need to use the ",(0,l.jsx)(n.code,{children:"mbstring"})," functions instead."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"mbstring"})," has a function for almost every string function, so just use the ",(0,l.jsx)(n.code,{children:"mb_"})," prefix."]}),"\n",(0,l.jsx)(n.li,{children:"Databases also need to be configured to use UTF-8."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"namespaces",children:"Namespaces"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Common idea in programming languages."}),"\n",(0,l.jsx)(n.li,{children:"Namespaces allow for two classes/functions of identical names to be used without causing conflicts."}),"\n",(0,l.jsx)(n.li,{children:"Can be used with classes, functions, and constants"}),"\n",(0,l.jsx)(n.li,{children:"Using two classes of the same name will cause an error, unless the second one is in a namespace."}),"\n",(0,l.jsxs)(n.li,{children:["You can declare a namespace in a class using the ",(0,l.jsx)(n.code,{children:"namespace"})," command:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"namespace HTTP;"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["This can then be referenced when making the class:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"new HTTP\\Client"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"autoloading",children:"Autoloading"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Very useful for Object Oriented Programming"}),"\n",(0,l.jsx)(n.li,{children:"Allows for code that is needed to be autoloaded."}),"\n",(0,l.jsx)(n.li,{children:"The autoloader and files must have the same rules."}),"\n",(0,l.jsxs)(n.li,{children:["Takes over the ",(0,l.jsx)(n.code,{children:"include"})," keyword."]}),"\n",(0,l.jsxs)(n.li,{children:["The ",(0,l.jsx)(n.code,{children:"spl_autoload_register"})," function will be called if PHP does not recognize a class."]}),"\n",(0,l.jsx)(n.li,{children:"Double backslashes are used because the first one is an escape character."}),"\n",(0,l.jsx)(n.li,{children:"It may be a good idea to use the standard for autoloading and file paths so that autoloaders work properly."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"composer",children:"Composer"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Powerful dependency manager."}),"\n",(0,l.jsx)(n.li,{children:"Helps developers share and implement shared code."}),"\n",(0,l.jsx)(n.li,{children:"Can specify versions, stability levels, and easily run updates."}),"\n",(0,l.jsxs)(n.li,{children:["Composer can be used in the terminal by using the ",(0,l.jsx)(n.code,{children:"composer"})," command."]}),"\n",(0,l.jsxs)(n.li,{children:["Install a package: ",(0,l.jsx)(n.code,{children:"composer require package"})]}),"\n",(0,l.jsxs)(n.li,{children:["Makes a ",(0,l.jsx)(n.code,{children:"composer.json"})," file with all of the packages that need to be installed, along with their versions."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"league/flysystem"})," is a file manager package."]}),"\n",(0,l.jsx)(n.li,{children:"Can use its own autoloader."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"creating-components",children:"Creating Components"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Components are also called packages."}),"\n",(0,l.jsx)(n.li,{children:"It is common to have a namespace and a class for the main class of the component."}),"\n",(0,l.jsxs)(n.li,{children:["All of the code is in an ",(0,l.jsx)(n.code,{children:"src"})," folder."]}),"\n",(0,l.jsx)(n.li,{children:"Unit Testing is easier and more efficient than testing in the browser."}),"\n",(0,l.jsxs)(n.li,{children:["To install ",(0,l.jsx)(n.code,{children:"phpunit"}),": ",(0,l.jsx)(n.code,{children:"composer require phpunit/phpunit --dev"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"--dev"})," means that it will not be installed on production environments."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"psr-1",children:"PSR-1"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"It has become far more common for people to use standards and recommendations to increase compatibility between projects and code."}),"\n",(0,l.jsxs)(n.li,{children:["PSR-1 is a standard recommendation for what to include in your PHP code:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Code must use a long tag (",(0,l.jsx)(n.code,{children:"<?php ?>"}),") or a short echo tag (",(0,l.jsx)(n.code,{children:"<?= ?>"}),")."]}),"\n",(0,l.jsx)(n.li,{children:"Should be in UTF-8"}),"\n",(0,l.jsxs)(n.li,{children:["A file should declare new symbols (classes, functions, constants, etc.) and cause no other effects, or it should execute logic with side effects, not both.","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Side effects are generating output, explicitly using ",(0,l.jsx)(n.code,{children:"require"})," or ",(0,l.jsx)(n.code,{children:"include"}),", connecting to global services, reading and writing to a file, etc."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"Namespaces and classes must follow PSR-0 or PSR-4"}),"\n",(0,l.jsx)(n.li,{children:"PSR-1 is not an automatic standard"}),"\n",(0,l.jsxs)(n.li,{children:["Namespaces and Classes need to be studly caps.","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Ex: Turtle, British, JumpingJacks"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Functions are camelCase","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Ex: jumpingJacks"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"PSR-1 can be found on php-fig.org"}),"\n",(0,l.jsx)(n.li,{children:"Keep file loading to a minimum."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"psr-2",children:"PSR-2"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"More controversial recommendation."}),"\n",(0,l.jsx)(n.li,{children:"Is a style guide, which is more personal."}),"\n",(0,l.jsx)(n.li,{children:"Allows for everyone to conform to a chosen style guide."}),"\n",(0,l.jsx)(n.li,{children:"Works well for teams (where brackets go)"}),"\n",(0,l.jsxs)(n.li,{children:["Rules and Overview:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Code must be compliant with PSR-1"}),"\n",(0,l.jsx)(n.li,{children:"Code must use 4 spaces for indenting, not tabs."}),"\n",(0,l.jsx)(n.li,{children:"There must not be a hard limit on line lengths, soft limit is 120 characters, lines should be 80 characters or less."}),"\n",(0,l.jsx)(n.li,{children:"There must be one blank line after the one namespace declaration."}),"\n",(0,l.jsx)(n.li,{children:"There must be one blank line after the block of use declarations."}),"\n",(0,l.jsx)(n.li,{children:"Put curly brackets on their own lines."}),"\n",(0,l.jsx)(n.li,{children:"Visibility must be declared on all properties and methods."}),"\n",(0,l.jsx)(n.li,{children:"Abstract and Final must be declared before the visibility."}),"\n",(0,l.jsx)(n.li,{children:"Static must be declared after the visibility."}),"\n",(0,l.jsxs)(n.li,{children:["Control Structure keywords must have one space after them.","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"If, else, switch, do, while, for each"}),"\n",(0,l.jsx)(n.li,{children:"Braces must go on the same line, closing after the body."}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"Method and function calls must not have a space after them."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["PHP code sniffer will match our code with PSR-2","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["To download: ",(0,l.jsx)(n.code,{children:"composer require squizlabs/php_codesniffer"})]}),"\n",(0,l.jsxs)(n.li,{children:["To run: ",(0,l.jsx)(n.code,{children:"./vendor/bin/phpcs src --standard=PSR2"})]}),"\n",(0,l.jsxs)(n.li,{children:["To fix automatically: ",(0,l.jsx)(n.code,{children:"./vendor/bin/phpcbf src --standard=PSR2"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"composer-metadata",children:"Composer Metadata"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Extra data in the composer file needs to be defined so that it can be submitted to the repository."}),"\n",(0,l.jsx)(n.li,{children:"A name needs to be added that is unique. Includes a vendor name and a package name."}),"\n",(0,l.jsx)(n.li,{children:"A description is added about the package."}),"\n",(0,l.jsx)(n.li,{children:"Optional: An array of keywords of arbitrary strings in alphanumeric order."}),"\n",(0,l.jsx)(n.li,{children:"License: what can be done with the code"}),"\n",(0,l.jsxs)(n.li,{children:["Author: an array with square brackets of each author. Each author can have 4 properties.","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Author name"}),"\n",(0,l.jsx)(n.li,{children:"Author email"}),"\n",(0,l.jsx)(n.li,{children:"Homepage - blog/github/company address"}),"\n",(0,l.jsx)(n.li,{children:"Role - \u201cdeveloper\u201d"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Require: Packages that are required for your package to run.","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Can specify a PHP version."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["The command: ",(0,l.jsx)(n.code,{children:"composer validate"})," will ensure that the JSON file is valid."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"semantic-versioning",children:"Semantic Versioning"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Composer enforces semantic versioning."}),"\n",(0,l.jsxs)(n.li,{children:["Version numbers have 3 parts.","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Major: Backwards incompatible changes","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Renaming classes and methods"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Minor: Backwards compatible changes","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Anything that doesn\u2019t break the API"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Patch:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Doesn\u2019t add functionality"}),"\n",(0,l.jsx)(n.li,{children:"For bug fixes and securities."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"Initially, a package has the version 0.1.0."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"errors",children:"Errors"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"PHP is an exception light language."}),"\n",(0,l.jsx)(n.li,{children:"Errors are normally thrown instead of exceptions"}),"\n",(0,l.jsx)(n.li,{children:"Errors have different levels."}),"\n",(0,l.jsxs)(n.li,{children:["Most common errors are:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"E_ERROR"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"E_NOTICE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"E_WARNING"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"PHP will normally keep executing if it has an error."}),"\n",(0,l.jsxs)(n.li,{children:["A core error function is used to see what error is ignored or reported.","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"error_reporting(E_ERROR | E_WARNING | E_PARSE);"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Reports these errors."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["To report all errors: ",(0,l.jsx)(n.code,{children:"error_reporting(E_ALL);"})]}),"\n",(0,l.jsx)(n.li,{children:"In production, no errors should be displayed or thrown."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"exceptions",children:"Exceptions"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Exceptions are available if you want to include them in your code."}),"\n",(0,l.jsx)(n.li,{children:"Exceptions thrown make errors obvious."}),"\n",(0,l.jsxs)(n.li,{children:["You can make your own exceptions: ",(0,l.jsx)(n.code,{children:"class ExceptionName extends Exception {}"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Buzz\\Browser"})," is a package that allows you to work with HTTP calls."]}),"\n",(0,l.jsxs)(n.li,{children:["Switch elements allow you to specify cases.","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"default:"})," covers all other cases."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"Try catch blocks will attempt code and if it errors, it throws an exception. The catch block will catch exceptions and perform a different task instead."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"converting-errors-to-exceptions",children:"Converting Errors to Exceptions"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"PHP can convert its errors to exceptions."}),"\n",(0,l.jsxs)(n.li,{children:["Useful when errors cannot be avoided","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Ex: Finding a file."}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"Converting errors to exceptions can help you handle race conditions."}),"\n",(0,l.jsxs)(n.li,{children:["To read a file: ",(0,l.jsx)(n.code,{children:"$handle = fopen('file.txt.', 'r');"})]}),"\n",(0,l.jsxs)(n.li,{children:["Errors can be converted to Exceptions using the ",(0,l.jsx)(n.code,{children:"set_error_handler"})," function:","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-php",children:"set_error_handler(function ($errno, $errstr, $errfile, $errline) {\n  throw new ErrorException($errstr, 0, $errno, $errfile, $errline);\n});\n"})}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"Once converted to an exception, the exception has to be caught."}),"\n",(0,l.jsx)(n.li,{children:"Helps to find hidden errors."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"logging-with-psr-3",children:"Logging with PSR-3"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"No errors or exceptions should be shown to the user in production."}),"\n",(0,l.jsx)(n.li,{children:"Errors and exceptions should be logged in production."}),"\n",(0,l.jsx)(n.li,{children:"PSR-3 standardizes the interfaces for basic logging interactions."}),"\n",(0,l.jsx)(n.li,{children:"You need to use an actual logger system to implement PSR-3."}),"\n",(0,l.jsxs)(n.li,{children:["Monolog is a great logger system.","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"composer require monolog/monolog"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["A new log channel should be made with its own ",(0,l.jsx)(n.code,{children:"pushHandlers"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"debug"}),", ",(0,l.jsx)(n.code,{children:"warning"}),", ",(0,l.jsx)(n.code,{children:"critical"}),", and ",(0,l.jsx)(n.code,{children:"error"})," are all provided by PSR-3."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>d});var i=s(6540);const l={},t=i.createContext(l);function r(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);