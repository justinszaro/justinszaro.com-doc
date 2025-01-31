

| $(‘.id’).hide() | Hides the Element |
| :---- | :---- |
| $(‘.id’).show() | Shows the Element |
| $(‘.id’).click() | Causes a function to run when the element is clicked.  |
| alert(“Message”) | Causes a popup to appear on the screen with the described text. |
| delay() | Delays the next animation.  |
| fadeIn() | Causes an object to fade into the webpage |
| fadeOut() | Causes an object to fade out of view. |
| slideDown() | The object is revealed with a slide down motion. |
| slideUp() | The object is revealed with a slide up motion. |
| text(“text (optional)”) | Get, set, or change text within an HTML element.  |
| html(“\<p\>HTML optional\</p\>”) | Get, set, or change HTML within an HTML element.  |
| append($jQueryObject) | Appends a jQuery element to the end of the parent element.  |
| prepend($jQueryObject) | Prepends a jQuery element to the end of the parent element.  |
| mouseover() | Do something when the mouse hovers over this HTML object. |
| keypress()  | Do something when the user presses a key in the input element. |
| .focus() | Do something when the user tabs into an input field.  |
| on(‘EventListeners’) | Do something when any of the event listeners are triggered.  |
| mouseleave() | Trigger an event when the mouse leaves an element |
| eq() | Allows you to select the children of a parent element through indexing.  |
| css() | Takes an object with a style property name. |
| prev() | Grab the previous element of the one that is selected.  |
| next() | Grab the next element of the one that is selected.  |
| attr(‘attr name’, ‘optional attr value’) | Changes the attribute of an element.  |
| addClass(‘className’) | Adds a class to the specified element |
| removeClass(‘className’) | Removes a class from the specified element.  |
| toggleClass(‘className’) | Toggles a class on an object. |
| preventDefault() | Used to prevent the browsers default behavior.  |
| each() | Loops through a collection. |

What is jQuery:  
jQuery \- A widely used JavaSCript Library that helps you easily and quickly add interactivity to web pages.   
Ex: Animations, Manipulate Elements, Respond to User Interactions, and make Ajax requests.  
jQuery makes DOM (Document Object Model) programming easier.   
Was created due to the standardization of browsers at the time.   
DOM (Document Object Model) \- is a representation of your webpage.   
Think of a blueprint\!  
jQuery allows you to use CSS selectors to select HTML elements on a page and do something with them.   
You can create or hide HTML elements, manipulate them when hovered over, and many other things. 

jQuery: History and Relevance Today:  
Became popular in the mid-2000s.  
Browsers were different, so functions needed to be coded differently in different browsers.   
jQuery is still very popular and will be found in projects, so it is still good to know and understand.   
It is very useful for prototyping and adding functionality to small websites. 

jQuery vs Javascript:  
To use jQuery on an object, you need to select it using its class or ID.   
Using plain JavaScript:  
const box \= document.querySelector('.box');  
box.style.display \= 'none';  
Note: jQuery is just Javascript.  
It is a selection of functions that make things easier to code and easier to read.   
Making the box disappear using jQuery:  
jQuery('.box').hide();  
To save some typing, jQuery has a shorthand version: the $ sign.  
$(‘.box’).hide();  
Making the box display an alarm when clicked:  
Javascript:  
const box \= document.querySelector('.box');  
box.addEventListener('click', function() {  
   alert("You clicked me\!");  
})  
jQuery:  
$('.box').click(function() {  
   alert("You clicked me\!");  
})

Animating Elements with jQuery:  
Manipulating the DOM elements includes:  
Visability  
Content (Adding, Deleting, or Changing)  
Attributes  
Styles  
There are several built-in functions for animations with jQuery.  
fadeIn()  
fadeOut()  
slideDown()  
slideUp()  
delay()  
Flash Message \- designed to show a temporary message, like an alert.  
The goal is to show it for a few seconds when the page loads and then disappears.   
Remember that id’s are called using the \#.  
All jQuery animations last 400 milliseconds by default.   
To increase or decrease the amount of time, pass it in as an argument.   
2 seconds \= 2000 milliseconds  
jQuery also lets you chain together commands on the same element.  
Ex: $("\#flashMessage").hide().slideDown(1000).delay(3000).slideUp();  
Most jQuery functions return the element after the function is run.   
If it is too long, you can also indent it on the next line.   
If another animation is included, it will run at the same time. The number of delay() on one element does not affect the others. 

Blog Previewer: Changing Content Inside Elements:  
jQuery can insert Text or HTML into a webpage.   
There are getter and setter methods:  
.text() Get, Insert, or change text into a specific HTML element.   
.html()	Get, Insert, or change html into a specific HTML element.  
No arguments in a getter, getting the text or element within an html element.  
Including an argument will set or change text or html.   
Putting html in the text method will just print out the HTML. 

Blog Previewer: Getting Values from Form Fields:  
.val() will take the data from an HTML form field.  
This should all be done when the button is clicked, so it is wrapped in a click handler.    
console.log() will log a variable to the console in the developer tools. 

Adding jQuery to a Project:  
You need to add the jQuery source file from jQuery.com to add it to the project.  
You also need to add a path to the jquery file at the end of the HTML file.  
Including the scripts at the end of the page helps the HTML and CSS load faster.   
It also helps to ensure that everything we want to manipulate has been loaded into the browser.   
CDN’s can also be used to use jQuery.   
Any file using jQuery needs to be loaded after jQuery has been loaded. 

Spoiler Revealer: Breaking it Down:  
It is good to break down what you want to accomplish into actionable steps.   
You can use jQuery on html tags by just using the tag name:  
$(".spoiler span")  
The jQuery documentation is a great source for looking up the syntax for any jQuery function. 

Understanding Unobtrusive JavaScript:  
There is an approach to using JavaScript on webpages.  
Separation of Concerns: should be separate from the HTML and CSS.  
Cross-Browser Consistency: should work the same no matter what browser you are on.  
Progressive Enhancement: Functionality should be available even when Javascript is blocked, disabled, or not fully supported.   
Firewalls and plugins can block JavaScript  
It can also be turned off by employers, unavailable in older computers, or the script can even fail.   
Javascript can be turned off in the console. You should ensure that the core functionality of the website works without the use of Javascript. 

Adding New Elements to the DOM:  
To create an element in jQuery, pass a string with valid html into the jQuery method.   
It is a common convention to include a dollar sign in the beginning of the variable name when it is creating a jQuery element.   
Adding a jQuery element onto the page is done using the append() command.   
The element will be added to the end of the parent element it is being added to.   
Ex: $(".spoiler").append($button);  
Google allows you to search for jQuery methods.   
prepend() will do the opposite of append(). 

Event Handling:  
There are multiple other functions for event handling:  
mouseover() \- Do something when the mouse hovers over this HTML object.  
.keypress() \- Do something when the user presses a key in the input element.   
.focus() \- Do something when the user tabs into an input field.   
These have limitation:  
What if you want to use two different event listeners.   
The on() method allows you to use multiple event listeners to dictate what actions are done.   
Ex: on(‘click keypress’, function() {})  
mouseleave() \- trigger an event when the mouse leaves the element. 

Using Events with Dynamically Added Elements:  
When the code base gets larger, it is harder to know which listener events and which elements are added and in what order.   
Event Delegation \- attach an event listener to a parent element that fires when an event occurs on a child element.   
This means that any element added after the page load can also have an event listener attached to them.   
Event Propagation \- When an event moves through the DOM from child to a parent element. The event propagates, or moves from the DOM.   
This is done by adding the element tag, id, or class of the element you want to change in the arguments of the on() function. 

The Event Object:  
If there are multiple buttons and you want them to act differently, you need to use the Event Object.   
You need to pass in the event as a parameter in the function of the on() function.   
The event.target will return the element that the event listener acted upon.  
Another common name for the event variable is evt or e.

What is Traversal:  
Traversal is moving through the DOM from one element to the next.    
Traversal follows the parent, child, and sibling vocabulary.   
eq() allows you to find an element from a set of elements by indexing it.   
Ex: $(‘ol’).eq(1)  
.prev() returns the previous element of the selected element.  
.next() returns the previous element of the selected element.   
If you run off the list, it returns an empty jQuery object instead of throwing an error.   
This can be a problem if the HTML is going to change.   
css() changes the styling of an element.   
Ex: $(‘li’).css({color: green})  
Instead of using event.target, you can use the keyword this instead. 

JQuery Specific Selectors:  
There are two different categories of selectors you can use:  
CSS Selectors  
Can be done by element, class, ids, or pseudo-selectors  
jQuery specific Selectors  
:radio, :checkbox, :password   
:odd, :even   
Ex: $('a:odd').css({'color': 'red'});  
:visible, :hidden   
There is a large list of these in the documentation.  
Note: you can use functions directly on already created jQuery objects.  
Ex: $odd.show()  
You can also check if a link starts with a certain phrase:  
const $secureLinks \= $('a\[href^="http://"\]');  
The carrot symbol means starts with  
$ will search the end of the string instead. 

Changing Element Properties:  
The attr() method gets the attributes of an element.  
It is also a getter/setter method.   
Ex: $secureLinks.attr('target', '\_blank');

Changing Element Styles and Classes:  
There are two ways to change the style of an element:  
Modify the CSS directly.  
Modify the class that the element has.   
There are methods to add and remove classes.   
addClass(“className”);  
removeClass(“className”);  
toggleClass(“className)  
Be careful when adding CSS, you use camelCase for JavaScript instead of the “-”.

Stopping the Browser’s Default Behavior:  
To prevent an event from occuring, you call the preventDefault() method.   
This is useful for:  
Restricting downloads from happening automatically  
Restricting the web page from reloading automatically. 

Looping through a jQuery Collection:  
You can loop through a collection in a very similar way using the each() method.   
For example, logging each link:  
$('a').each(function(index, element) {  
   console.log(index, $(element).attr('href'))  
})  
The this keyword can also be used instead of including the index and link parameters in the function.   
This in this case replaces the link, not the index. 

Conclusion:  
CNN allows for better performance by hosting jQuery on servers around the world.   
You can find the minimized version on the jquery documentation and insert it into the html file. This removes the need to have the jquery file in your directory tree. 