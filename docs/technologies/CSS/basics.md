---
id: CSS Basics
tags:
  - styling
  - css
---

Documentation Link: [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)

| background-color | Changes the color of the background. |
| :---- | :---- |
| color | Color of the element. |
| font-size | Changes the size of the text. |
| font-weight | Changes the style of text: (bold, ital) |
| text-align | How the text is aligned in the document. |
| margin | Border of elements |
| padding | Creates space around an element's content. |
| text-decoration | Appearance of Decorative lines in an HTML file. |
| border | Make a border around the element. |
| text-transform | Transforms an element (lowercase, uppercase) |
| letter-spacing | Space between characters. |
| :link | A link that has not been visited yet.  |
| :visited | A link that has been visited. |
| :hover | Change on mouse hover |
| :focus | Only interactive elements: changes when focus is applied |
| :first-child | First element in a list. |

Introduction to CSS:

* CSS (Cascading Style Sheets) is a style sheet language used to describe the presentation of web pages.  
* Presentation Layer of the experience.   
  * Styles color, fonts, backgrounds, layout, etc.  
* Makes content adaptable between devices, screens, and resolutions.  
* Reasons to separate structure from presentation  
  * Semantics   
  * Efficient  
  *  HTML is not a presentation language.  
* CSS makes the development and management of websites more efficient by making changes faster and easier to do.   
* Animations can be done in CSS as well.

	  
Ways to add CSS to a page:

* Inline Styles  
  * CSS is written into the html file inside of a style tag.  
  * NOT CONSIDERED GOOD PRACTICE  
  * Lowest level of the CSS cascade  
    * Powerful and specific.  
    * Overrides internal or external style sheets.   
* Internal styles  
* External Stylesheets  
* Browsers use a user agent stylesheet that gives elements default styling.  
* Inspect element allows you to see the css user agent applied styling.  
* Author styles are the styling sheets that developers create

Internal Styles:

* Embedded in the head section of the HTML document.   
* Defined using the style tag.  
* Useful for smaller scale sites: in production or for testing only  
* On larger scale projects, there a numerous HTML files  
* Browsers would have to download the styles each time a page is loaded.  
* Lots of code duplication, not very efficient.  
* DRY: Don’t repeat yourself

Adding CSS to HTML: External Stylesheets

* Most common and efficient method.  
* Allows the entire website’s look to change instead of one file.  
* To link a stylesheet to an html file, html’s link element is used.   
  * \<link rel=”stylesheet” href=”css/style.css”  
* Advantages  
  * Flexibility  
    * Multiple HTML files can be linked to one sheet  
  * The style sheet file gets cached, so download time goes down and it is only downloaded one time.  
* Standard practice to link in the head of the HTML file. The styling sheets get loaded first before the html.  
* Multiple links can be used, but it adds the number of requests needed to load a webpage. 

Introducing CSS Selectors

* CSS Rules are made up of two parts.  
  * The selector is the first part that targets html elements  
  * The declaration block, which is surrounded by curly braces, holds the declarations that stype the element.   
    * The property and value it takes on are separated by a colin, and ends with a semicolon.  
    * Multiple declarations can be used.  
* Universal selector selects every element on the page at once and applies the set style.  
  * Denoted by an asterisk  
  * Not used very often, precision is preferred.  
* A type/element selector is used to select an element on the webpage.  
  * The selector’s name is the name of the element.   
* Order doesn’t matter most times, but its organization should match the HTML file.

ID Selectors

* Allows you to style specific elements in the HTML page.   
* Targets the id attribute.   
* Denoted by a \# followed by the id name.  
* Ids are unique to a page, so multiple elements cannot have the same id. An element can also only have one id. How do we style multiple html tags with the same styles? 

Class Selectors:

* Class selectors allow developers to target elements based on their class attribute.   
* Unlike ids, classes can classify and target multiple elements.  
  * Makes them way more flexible.  
* Defined with a . and the class name.  
* Should only use an ID when you are certain that it will be unique.   
* Can be reused throughout the entire page.  
* Meaningful names should be used to understand their purpose for existence.  
* Multiple classes can be applied to a single HTML element.   
* Id and class selectors can be put onto the same html element.   
* ID selectors override the class selectors if they have a merge conflict.

Descendant Selectors

* Can combine selectors to make a descendant selector.   
* More specific type of selector.  
* Done by naming the element from top to bottom in the selectors.  
* Instead of elements, classes and ids can be used in descendant selectors as well  
* Using too many descendant selectors will make a lot of code less reusable. 

Pseudo-classes

* Target elements dynamically by select elements in a certain state (hovered by a mouse, selected using a keyboard). Based on characteristics like pressing a button.  
* Do not use attributes.  
* Documentation has a list of these classes.  
* Syntax: selector:pseudo-selector  
* Often used to detect user activity. 

Comments in CSS

* Used for notes or hints in the stylesheet.  
* Start with /\* and end with a \*/  
* It is ignored by a browser.   
* Useful when testing and debugging. 