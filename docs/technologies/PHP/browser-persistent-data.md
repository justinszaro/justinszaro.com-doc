---
id: Browser Persistent Data
tags:
  - php
---

| session\_start() | Checks if a session has been posted. |
| :---- | :---- |
| $\_SESSION | PHP’s Superglobal Session variable.  |
| htmlspecialchars() | Encodes the user data.  |
| unset() | Unsets a variable back to the default value.  |
| session\_destroy() | Destroys the current session.  |
| setcookie($name, $value, ‘expiration\_time’, ‘path that cookie can be accessed at’) | Sets a cookie that is saved on the user's browser.  |

Types Of Persistence:

* Data Persistence \- storing information for a prolonged period of time.   
* HTTP is a stateless protocol, so web servers don't normally keep track of who is visiting and where they are visiting.   
* Any database and file based storage system is a form of data persistence.   
* A user's browser can also keep track of specific information. 

Using Forms for Persistence:

* The most often used browser based persistence is through forms.   
* Forms allow you to share information from one page to the next.  
* You can also capture user input to be utilized for changing the page or sending an email.   
* When using the GET method, the constructed URL can be shared with others.   
* You can submit a get by entering it into the URL instead of doing the form.  
* POST can help users prevent doing things unintentionally by warning them when reloading the page.   
  * POST is also more secure.   
* There is a 2000 character limit in the POST method.   
* A URL parameter can be sent through with a form.  
* One of the limitations with forms is that by themselves they can only pass data over one request. 

Reading, Writing, and Destroying Sessions:

* Session \- a user’s time browsing a website.  
* It is very difficult to know when a user is done with a site. So the sessions is terminated in two ways:  
  * User closes the browser  
  * The session times out if a request has not been made in a certain period of time.  
    * By default, this is 1440 seconds, or 24 minutes.   
* You can set variables that are available for a user's sessions. These are called session variables.   
* First, you need to start a session.   
* Remember to escape the user data using htmlspecialchars()  
* You can use header(‘location:page.php’) to redirect someone. 

Writing Cookies:

* One of the main features and limitations of sessions is that they are only available for the current user session. They will terminate after a period of time.   
* For information that needs to be stored for longer then the users session, you can use cookies.   
* Cookie \- Piece of data sent from a website and stored on the users computer on their browser.   
  * Syntax: setcookie($name, $value, ‘expiration\_time’, ‘path that cookie can be accessed at’)  
  * Other parameters:  
    * Domain \- the subdomain that the cookie is available to.  
    * Secure \- Indicates that the cookie should only be accessible over https connections from the client.  
    * Httponly \- only accessible from http. Not scripting languages. 

Reading and Deleting Cookies:

* Note: substr($str, index1, index2) creates a substring from the string included  
* The stored cookies are found at $\_GET\[‘read’\];  
* explode(‘deliminator’, ‘string’) is like python’s split() function  
* array\_combine(keys, values) will change the array into a dictionary.   
* To delete a cookie:  
  * setcookie($\_GET\['delete'\], '', time() \- 3600, '/');  
  * This is setting a cookie to an empty string that expires in the past. 