  
Introduction:

* Building your own child theme is a great start to becoming a WordPress developer.  
* Developing your own theme is similar to creating your own Plugin, so it is a great start.

Setting up a Local Development Environment

* Turn your computer into a mini web server for testing and developing sites.  
* Much faster than working on the actual web server.   
* I downloaded and set up an app called Local.  
* \!important in a css file will make sure that nothing overwrites that style. 

Use Real Content:

* When making a child theme, you need to know what the content will look like.  
* Be sure to have all the content for the site before writing code.   
* This makes the development process way simpler and faster.   
* Use the WordPress Admin import feature to import all the content before you begin. 

What is a Child Theme:

* Themes control the look and feel of the site.   
* Child themes modify existing themes (parent theme)  
* CSS Files  
  * The parent theme will be loaded first.  
  * The child's theme will then be loaded second.   
* Templates  
  * The child’s template file will be loaded first.  
  * The parent’s template file will be loaded if the child’s template was not.  
* Function files  
  * Child’s functions are loaded first.  
  * Parent’s functions are loaded second. 

Picking a Parent Theme:

* You want to find a theme that is as close to the theme you want so it is the easiest to modify.  
* You can filter by layout in wordpress.org.  
  * Themes can also be previewed on site.   
* You cannot make grand-child themes. 

Creating and Activating a Child Theme:

* Wordpress.org has documentation on creating a child theme.  
* First, make a new folder for your theme.  
* Naming Conventions:  
  * Name of parent then \-child  
  * Name of the client you are making the template for.   
* Every theme needs a stylesheet, so make a style.css file.  
* Create a header for the style file.  
  * The [docs](https://developer.wordpress.org/themes/advanced-topics/child-themes/) contain what the header should include.

Including Stylesheets

* The convention is to use functions.php to include the stylesheets.  
* Create a new file called functions.php and create the opening php tag.  
* The code needed is also in the documentation. It hooks to wp\_enqueue\_scripts to load the child theme along with the parent themes.   
* Add your own wp\_enqueue\_style with the child theme to add the styles.  
  * Use get\_stylesheet\_directory\_uri() and then concat with the /style.css.

Best Practices for Including your Own Stylesheets:

* It is best practice to force WordPress to load the parent’s css first.   
  * Add array( 'parent-style' ) to the second wp\_enqueue\_style call to load the parent CSS first.  
* It is also good practice to include the version to avoid caching issues.  
  * Add wp\_get\_theme()-\>get('Version')) to include the version.

Employing the Laziness Principle:

* Only write code when necessary\!  
* Copy code from the parent theme and modify it for what you need.

Designing in the Browser:

* Put the content in the browser and modify the layout within the browser. Then, copy and paste into the file.  
* Right click on an element, hit inspect, and modify the css within the browser, and then save it to the file.   
* M is a relative unit that is based on the test size of the page.   
* Element.style is the element applied directly to the selected element.   
* You can experiment really easily within the browser without needing to modify the code.  
* Refreshing will reset the page.  
  * Be sure to work in small increments so your changes are not lost\!  
* HTML can also be added and removed for experimentation. 

Modifying Existing Styles

* There are settings you can change within the customizer within the WordPress control panel.   
* Then, change the code for anything you cannot change within the customizer.  
* When pasting the changes made in style.css, remove any of the code that you didn’t change. This works with the laziness principle. 

Add New Styles:

* The child stylesheet can also contain brand new styles.   
* You can create a new style rule that selects the current selector.  
* You sometimes need to dig through the HTML and CSS to figure out how it works so that you can find a proper change. 

Add Flair: 

* Doing CSS can be very time consuming, sometimes it can take up to thirty minutes to make a change.   
* A pseudo-element changes a specific part of the selected element.   
* Changing the HTML can break the CSS so the client needs to be educated on how the HTML is formatted. 

Understanding functions.php:

* The developer documentation lists the functions that you can use to customize.  
* Functions.php is the file used to modify the functionality of a theme.   
* New functions, functions that modify the parent functions, and the removal of features can all be included in the child’s functions.php file.   
* Plugable Function \- function wrapped in a statement to see if the function already exists. 

Finding Functions in the Parent Theme:

* The functions.php file shows what files are included, which can give a hint as to where functions are.   
* It is helpful to search for keywords to find the functions you want to modify.  
* Pluggable functions will be wrapped, so it is safe to copy and paste the function into your child’s functions.php.  
* the\_posts\_pagination () controls how the blog posts are paginated into multiple pages.   
* W3.org has a list of symbols that you can include in HTML such that it doesn’t get misinterpreted as html.  
  * This is best practice. 

Hooks, Filters, and Action:

* Filters and Actions are functions that interact with Hooks.   
* Hook \- A place in wordpress code that invites other functions to add to it.  
* Hooked Function \- Custom PHP function that can “hook into” WordPress at the locations specified by hooks.  
  * Actions \- Any type of functionality.  
  * Filters \- Modify Existing Output

Filtering A Function:

* Made to modify content.   
* Common one is the\_title, which modifies the title of a post.   
* In\_category checks if a post is within a category or not. 

Hooking Functions:

*  It is common that there is functionality that is not needed.  
  * It is best practice to remove these sections.   
* Functionality needs to be added before it can be removed.   
* To remove functionality, create a function that removes it, then add the action to the same hook.

Change Posted By:

* When adding empty functions, be sure to include documentation on what it is doing and why it is there.

Customizing Templates:

* Themes have a bunch of different template files included.   
* Templates files include the PHP wrapped in HTML.   
* There is a template hierarchy that is documented in the documentation.   
* Show Current Template is a nice plugin that states what template is being used when a page is loaded. 

Changing an Existing Template:

* Same as functions, you want to copy the template part to your child-theme so it does not get overwritten when the parent theme gets an update.   
* get\_the\_author\_meta () can grab information from the author page in the authors section of the admin page. 

Adding New Template Files:

* You can make a new template that does not exist in your child theme.  
* Copy and paste the php file that is the closest to the theme you want to make. 

Managing Backwards Compatibility:

* There is a disadvantage with using templates. It at times cannot work with backwards compatibility.   
* When modifying functions and CSS, new additions to the template are handled and compatible.

Custom 404 Page:

* Unsplash is great for looking for images that are royalty free.   
* Images you use on your site should be included in your template files. 

Finding Existing Functionality:

* It is common to add, edit, or remove menus from a theme.   
* These can be added in the functions.php file.  
* Do the same process, look for the existing code in the parent theme. 

Changing Menu Output with Properties:

* It is better to restrict functionality so that the theme is easier to use.   
* When making decisions, it is best to decide on behalf of the users who will be using the site. 

Conditional Widgetized Area:

* is\_single() checks if its a single post  
* is\_page() checks if it is a page.   
* is\_singular() will do both of these conditional checks.   
* Sometimes the PHP code is easier or more difficult than a template change. There is an efficient way of doing things. 

Shiny New Web Fonts:

* You can replace the font on your site with external fonts.   
* This needs to be added to your child theme directly.   
* Copy the HTML link included with the fonts.  
* wp\_enqueue\_style() can be used. Replace the style sheet with the link to the fonts.   
* Replace the font family on the elements you wish to change.   
* If there are styles that you are not using, it is best practice to dequeue the style that is going unused:  
  * wp\_dequeue\_style()

Adding a Screenshot:

* When completed, it is best to add a screenshot as your preview to your theme.   
* Make a screenshot.png and include it in your theme to set the preview.   
* There are exact dimensions, but it is only important if there are a lot of people using your theme. 

Migrating:

* Because we are in a local environment, you need to upload it to the WordPress Admin.  
* Zip up the theme package, and then upload it. If you did anything in the admin customizer, you will need to redo these changes in the admin console.  
* If you want to update the theme and customize at the same time, you want to export the site, work on it locally, and then reupload it. 

