

| wp\_mail(“email”, “subject”, “message”) | Allows you to send an email.  |
| :---- | :---- |
| add\_action( “hook”, “callback function” ) | Hooks an action. |
| add\_filter( ‘hook’, ‘callback function’ )  | Adds a filter to the designated hook, changing the content.  |
| register\_activation\_hook(\_\_FILE\_\_, “callback function”) | Runs when the plugin is activated |
| register\_deactivation\_hook(\_\_FILE\_\_, “callback function”) | Runs when the plugin is deactivated |
| register\_uninstall\_hook()  | Runs when the plugin is uninstalled. |
| current\_user\_can( ‘action’ ) | Checks if the current user has the permissions to perform the requested action.  |
| add\_option( ‘option’, value ) | Adds an option.  |
| delete\_option( ‘option’, value ) | Deletes the option |
| flush\_rewrite\_rules() | Flushes the rewrite rules |
| wp\_die(“message”) | Good for debugging, will cause wordpress to die and a message to be shown.  |
| function\_exists() | Checks if the named function exists.  |
| wp\_logout()  | Pluggable function that handles what happens when a user logs out.  |
| is\_email()  | Checks if an email is valid |
| term\_exists()  | Checks if term exists |
| username\_exists()  | Checks if the username exists |
| preg\_match(“regex”, “string”) | Checks if a string matches the pattern stated.  |
| sanitize\_email() | Sanitizes data as an email address. |
| sanitize\_text\_field() | Sanitizes data for text fields. |
| sanitize\_user() | Sanitizes data as a username. |
| wp\_nonce\_field( 'myplugin\_form\_action', 'myplugin\_nonce\_field', false ) | Adds a hidden nonce to a form. |
| wp\_verify\_nonce( $nonce, 'myplugin\_form\_action' ) | Verifies that the nonce exists and accepts the results of the form.  |
| is\_singular() | Single post or page |
| is\_single() | Single post |
| is\_page() | Single page |
| is\_archive() | Archive page |
| isset() | checks if a variable is set |
| function\_exists() | checks if a function exists |
| class\_exists() | checks if a class exists |
| defined() | checks if a constant is defined |
| // exit if file is called directly if ( \! defined( 'ABSPATH' ) ) { 	exit; } | Ensures that the PHP files are being called from wordpress directly.  |
| get\_posts() | Useful for creating side loops, get the posts on the page. |
| pre\_get\_posts | Hook for customizing the main loop |
| WP\_Query | USeful for creating custom  loops and multiple loops. |

Course Overview:

* Wordpress \- free open source content management system based on PHP and MySQL.  
* The WordPress core is the set of main core files.   
* Wordpress allows people to create their own websites with powerful features.  
* Plug-ins allow you to add packages of code that extend the core functionality of WordPress.   
* Plugins can do:  
  * Improve Security  
  * Improve SEO functionality  
  * Improve performance with caching  
  * Integrate third-party services  
  * Customize the WordPress admin area  
  * Customize just about anything  
* Using the Codex and developer documentation is a great idea. 

Preparing for Development:

* You need to set up a web server either locally or on a virtual machine.   
* Version control allows you to back up the website and increase organization.   
* There are also numerous dev tools for developing plugins.   
* There are numerous development plugins that are really useful for making plugins:  
  * Developer  
  * WP-Dev-Tools  
  * Query Monitor  
  * Debug Bar  
* You want to go into wp-config.php and turn on ‘WP-Debug’  
  * You can view the logs directly on the web pages by doing:  
    * define(‘WP\_DEBUG\_DISPLAY’, true);  
  * You can also log debug into into a file at /wp-content/debug.log by doing  
    * define(‘WP\_DEBUG\_LOG, true’)

Explore WordPress plugs:

* The golden rule is to not modify the wordpress core file:  
  * Updates will overwrite your changes.  
  * Changes can break things  
  * Use plugins instead.   
* There are numerous plugins already available:  
  * There are over 50,000 available plugins. Be sure to check before you start building.   
  * You can use already built projects to save yourself time and effort.   
  * Pro-Plugins are around the web and cost money to use and download.   
  * All plugins hosted at the plugins wordpress page and open source.   
  * Be sure to look at the license attached to the code you are using.

Get Started:

* The simplest plugin can consist of only one file, but there are numerous plugins that have hundreds of files.   
* It can include JS, CSS, HTML, PHP, and some other languages.  
* It is good practice to develop a plugin in its own folder.   
* Every plugin must have the required header, which can be found in the WordPress documentation.   
* The header contains metadata:  
  * Name  
  * Author  
  * Version  
  * License  
  * Description  
  * Etc.  
* Most plugins are licensed under the GPL GNU Public license version 2 or better, same as the wordpress core.   
* You also want to add a copying permission statement to the file header along with including the actual license itself.   
* In the wordpress admin area, you can activate your plugin in the plugin menu.   
* You can install plugins in two different ways:  
  * Manually install the plugin into the file directory.  
  * Install into the mu-plugins directory, which is automatically activated and must be used.   
    * You may need to create this folder.   
* Must-Use Plugins:  
  * Pros  
    * Must-use plugins are always activated  
    * No need to activate manually via the admin area  
    * Users cannot disable by accident  
    * Loaded before the normal plugins  
  * Cons:  
    * No automatic or one-click updates  
    * No update notifications  
    * No activation/deactivation hooks  
    * No plugin directories-single PHP files only  
* Plugin Naming Guidelines:  
  * Plugin name should match the main plugin file.  
  * Plugin name should match the main plugin folder  
  * Do some research to avoid clashing with existing names. 


Explore WordPress APIs:

* All the code used to build the plugin should utilize the wordpress API.   
* API \- Application Programming Interface  
* Wordpress APIs  
  * Plugin API  
  * Quicktags API  
  * Rewrite API  
  * Settings API  
  * Shortcode API  
  * Transients API  
  * Widgets API  
  * XML-RPC API  
* There are also numerous classes, functions, and template tags that can be used.   
  * See the documentation for more functionalities.   
* Reasons to Use the WP API  
  * Makes development easier  
  * Saves time \- no need to ‘reinvent the wheel’  
  * Does the heavy lifting for many complex tasks  
  * Ensure forward and backward compatibility  
  * Offers seamless integration with the WordPress admin area. 

Action and Filter Hooks:

* Hooks allow for the modification, extension, and removal of core functionality.   
* There are two types of hooks.  
  * Action \- Allows you to run custom code at specific points during the execution of wordpress.  
    * Ex: echo output, write to a file, modify a database.  
  * Filters \- modify the data during the execution of wordpress  
    * Ex: modify post content before sending it to the user.   
* Callback functions are needed to use hooks.  
* wp\_mail(“email”, “subject”, “message”) Allows you to send an email.  
* add\_action( “hook”, “callback\_function” ) allows you to hook a callback function to an action.   
* There is an order that hooks are executed in.   
* add\_filter( ‘hook’, ‘callback function’ ) adds a filter to the designated hook, changing the content.   
* You can add your own hooks to your plugins. This allows other developers to extend your plugin if they wish.   
* You can also remove or disconnect filters and actions. 

Plugin Activation and Deactivation: 

* Three important hooks when developing plugins:  
  * register\_activation\_hook() \- runs when the plugin is activated  
    * Useful hook when adding default options, making database tables, and sets options.  
    * Ex: register\_activation\_hook( \_\_FILE\_\_, ‘callback function’ )  
      * \_\_FILE\_\_ is a PHP constant of the PWD.  
  * register\_deactivation\_hook() \- runs when the plugin is deactivated  
    * Ex: register\_deactivation\_hook( \_\_FILE\_\_, 'callback function' );  
  * register\_uninstall\_hook() \- runs when the plugin is uninstalled.  
    * Ex: register\_uninstall\_hook( \_\_FILE\_\_, 'myplugin\_on\_uninstall' );  
* current\_user\_can( ‘action’ ) \- Checks if the user can perform the requested action.   
* add\_option( ‘option’, value ) \- Sets the option to the requested value.   
* register\_activation\_hook() must be called from within the main plugin file.  
* register\_activation\_hook() must not be registered from within another hook (e.g., "plugins\_loaded" or "init"), because such hooks are called before the plugin is activated.

Pluggable Activation and Deactivation:

* WordPress provides a small set of Core functions that can be replaced by our own custom functions.  
  * The list of functions can be found in ‘wp-includes/pluggable.php’  
* Ex: wp-logout() handles the logging out of any users.   
  * This connects to the ‘wp\_logout’ hook. You could change the functionality by hooking an action to that hook  
  * You can also make your one wp\_logout() function by naming it the same thing in your file.  
* Pluggable functions allow for further customization, maybe even more than hooks offer.   
* All pluggable functions are wrapped in function\_exists() functions that check if they exist. This makes them pluggable. 

Develop Secure WordPress Plugins:

* Security is important to consider when creating plugins.   
* Security is added as you build by validating visitors, sanitizing input/output, using nonces, and performing data validation.  
* Examples of Data Validation:  
  * Check if an address exists  
  * Check if the number of items is greater than zero  
  * Check if a credit card number contains only numbers  
  * Check if formatting is correct.  
  * Check if a submission is not blank.   
* WP Validation Functions:  
  * is\_email() \- checks if an email is valid  
  * term\_exists() \- checks if term exists  
  * username\_exists() \- checks if the username exists  
* You can create your own validation functions that return a boolean on whether or not it is valid.   
* Data Sanitization \- The process of cleaning or filtering data to make it safe.   
* WP Sanitization Functions  
  * sanitize\_email()  
  * sanitize\_text\_field()  
    * Checks for invalid UTF-8  
    * Converts single less-than characters to entity  
    * Strips all tags  
    * Removes line breaks, tabs, and extra white space.  
  * sanitize\_user()  
* Nonces \- Generated strings used to verify requests for security purposes.   
  * Ex: wp\_nonce\_field( 'myplugin\_form\_action', 'myplugin\_nonce\_field', false )  
  * Check that the nonce is correct: wp\_verify\_nonce( $nonce, 'myplugin\_form\_action' )  
  * Creates a hidden nonce field used for verification. 

Best Practices for Plugins:

* File Organization  
  * Separate admin assets from public assets  
  * Put general PHP files in the /includes/ folder  
  * Add a proper file header to the main plugin file  
  * Keep the root directory as clean as possible.  
* Plugin Architecture  
  * Depends on the size of the plugin.  
  * Falls into three camps:  
    * Single plugin file, containing functions  
    * Single plugin file, containing a class  
    * Main plugin file, then one or more class files.   
  * Keep your code well organized  
  * Comment your code as needed  
  * Separate CSS and JavaScript Files  
  * Use conditional loading of code and assets  
    * WP Conditional Tags:  
      * is\_singular() \- single post or page  
      * is\_single() \- single post  
      * is\_page() \- single page  
      * is\_archive()-  archive page  
* Avoid Naming Collisions  
  * Plugins have the same names on files, classes, variables, functions  
  * Prefix everything\! (namespacing)  
    * Namespacing \- Group of elements that share a unique name or identifier  
    * Functions, Classes, Hooks, global variables, public variables, and database entries should be prefixed  
  * Check for existing implementations  
    * PHP Functions:  
      * isset() \- checks if a variable is set  
      * function\_exists() \- checks if a function exists  
      * class\_exists() \- checks if a class exists  
      * defined() \- checks if a constant is defined.  
  * Use object-oriented programming (OOP)  
    * Simplifies needing to check if the class already exists.  
  * Use WordPress API and core functions  
* Choose a good name for your plugin  
  * Avoid using WordPress or Plugin  
  * Do not include trademarked names without permission  
  * Do not use vulgar or offensive names  
  * Choose a unique name and avoid copyright issues  
  * Take your time and do research  
* Write Great Documentation  
  * Follow the readME documentation file on the website.  
  * There is a validator on wordpress.org to ensure that readMEs are valid.   
* Plugin Boilerplates  
  * It is a builtin starter point.  
* Keep a good changelog  
* Use semantic versioning

**ALL CODE IS DOCUMENTED IN FILE**

Creating the Plugin Directory and Files:

* The admin folder is for anything styling or code written for the admin pages.  
* The public folder is for any styling and code outfacing.   
* The includes folder is for any PHP files that are being used anywhere.  
* The languages folder is for translation.   
* Index.php is empty, it is just for security, it hides the file directory  
  * Add it to the admin, includes, languages, and public folders.  
* For security reasons, you want to prevent direct access to the PHP files, add this line above each PHP file:  
  * // exit if file is called directly  
  * if ( \! defined( 'ABSPATH' ) ) {  
  * 	exit;  
  * }

Add Administration Menus

* There are two types of admin menus:  
  * Top-Level Menu  
    * May contain sub-levels  
    * Best for plugins with multiple settings pages  
  * Sub-Level Menu  
    * Adding to an existing top level menu  
    * Best for plugins with only one setting page  
* To add a menu:  
  * add\_menu\_page(  
  *            string   $page\_title,  
  *            string   $menu\_title,  
  *            string   $capability,  
  *            string   $menu\_slug,  
  *            callable $function \= '',  
  *            string   $icon\_url \= '',  
  *            int      $position \= null  
  *        )  
  * This is hooked to the admin\_menu hook as an action.  
* To add a sub-menu:  
  * add\_submenu\_page(  
  * 		string   $parent\_slug,  
  * 		string   $page\_title,  
  * 		string   $menu\_title,  
  * 		string   $capability,  
  * 		string   $menu\_slug,  
  * 		callable $function \= ''  
  * 	);  
  * This is also hooked to the admin-menu hook as an action.  
* Don’t forget to add the no-access code to any new files.  
* To include files in the admin area:  
  * if (is\_admin()) {  
  *   
  *    // include dependencies  
  *    require\_once plugin\_dir\_path(\_\_FILE\_\_) . 'admin/admin-menu.php';  
  *    require\_once plugin\_dir\_path(\_\_FILE\_\_) . 'admin/settings-page.php';  
  * }

Add The Plugin Settings Page:

* The settings API provides built-in security and visual consistency. It also handles all the form processing.   
* Types of HTML inputs supported in plugins:  
  * Text input  
  * Radio input  
  * Checkbox  
  * Textarea  
  * Select Menu  
* The first argument in register\_settings must match the settings\_fields from the display settings page function.  
* The register\_settings function can be hooked to admin init.  
* The register\_settings function should register the settings, add the sections, and finally add the settings.

Add Settings Callback Functions:

* get\_option('myplugin\_options', myplugin\_options\_default());  
  * The first argument is defined in the register\_settings() function.  
  * The second parameter is the function that returns the default option if they can’t find the options.   
*  checked() is a function that checks if a radio button is checked.  
* wp\_kses\_allowed\_html('post')  
  * Allows basic tags and markup  
* selected() \- checks if identical marks are selected. 

Validate Plugin Settings:

* Sanitizes the URL: esc\_url($input\['custom\_url'\])  
* Checks if an array key exists: array\_key\_exists(  
* Sanitizes text fields with markup: wp\_kses\_post(

Add Custom Functionality:

* Files that are for both the admin and public view should be placed outside the is\_admin() statement.   
* Will change the login header.  
  * add\_filter('login\_headerurl', 'callback function');  
* Will change the title of the logo link at the login page.  
  * add\_filter('login\_headertitle', 'callback function);  
* Will add a stylesheet:  
  * wp\_enqueue\_style(handle, path);  
* You can also remove the toolbar:  
  * global $wp\_admin\_bar;  
  * $wp\_admin\_bar-\>remove\_menu('comments');  
  * $wp\_admin\_bar-\>remove\_menu('new-content');  
  * Hook:  
    * add\_action('wp\_before\_admin\_bar\_render', 'callback', 999);

Include JavaScript and CSS:

* There are two different wp\_enqueue functions for javascript and CSS:  
  * CSS  
    * wp\_enqueue\_style(handle, URL/Path, array\_of\_depencies, URL query string, media attribute of style sheet);  
  * JavaScript  
    * wp\_enqueue\_script(hande, URL/PATH , array of dependencies, URL Query String, true  );  
* Hook: ‘login\_enqueue\_scripts’

Plugin Internalization:

* Internationalizing means that it is ready for users to translate into other languages.   
* General Steps:  
  * Prepare Folders and Files  
    * Add a /language/ folder  
    * Use the same slug/name for the main plugin folder and file  
    * Add “Text Domain” and “Domain Path” to the file header. (main plugin file and readme.txt  
  * Add Localization Functions  
    * Include load\_plugin\_textdomain()  
      * function myplugin\_load\_textdomain()  
      * {  
      *   
      *    load\_plugin\_textdomain('myplugin', false, plugin\_dir\_path(\_\_FILE\_\_) . 'languages/');  
      * }  
      * add\_action('plugins\_loaded', 'myplugin\_load\_textdomain');  
      * The hook is called ‘plugins\_loaded’  
    * Replace all text strings with a localization function.  
      * \_\_( ‘string‘, ‘plugins text domain’ )  
  * Generate the POT file  
    * (Default Translation File)  
    * Tools for i18n and I10n  
      * Loco Translate (Wordpress Plugin)  
* General I10n Functions:  
  * \_\_()  
  * \_e() \- Echo instead of return.  
  * \_x() \- Provides an extra parameter for context  
* Safeer General I10n Functions:  
  * Escapes for Markup:  
    * esc\_html\_\_()  
    * esc\_html\_\_e()  
    * esc\_html\_\_x()  
  * Will do sanitization and prevent unwanted code from running

Add an Uninstall Feature

* Any good plugin will clean itself up if it is uninstalled.   
* This is good to add from the beginning so you can keep track of what you are adding.   
* Uninstall Methods:  
  * register\_uninstall\_hook(path, ‘callback function’)  
    * delete\_option('myplugin\_options');  
      * Will run automatically if the plugin is uninstalled.   
      * Preferred Method  
      * Can also do:  
        * delete\_transient()  
        * delete\_metadata()  
  * Uninstall.php file.

Test and Debug:

* Be sure to check your debug.log to ensure that there are no errors occurring in the background.   
* Be sure to test each of your functions when developing.  
* You can also check on different WP Versions  
  * Current WP Version  
  * Nightly Development Version  
  * WordPress Multisite  
  * Older version(s) of WordPress  
  * WordPress setup for other languages  
* Check the details:  
  * Proper file headers in readme and main plugin file  
  * Do not include the closing tags at the end of PHP files  
  * Include the no direct access tag and the end of PHP files  
  * Properly namespace and public functions, classes, etc  
  * Delete any empty folders and files (optional)

Customize the WordPress Loop:

* About the wordpress loop:  
  * Displays sets of posts  
  * Is included in theme templates  
* Custom Loop Techniques:  
  * get\_posts() \- Useful for creating side loops  
  * pre\_get\_posts \- Useful for customizing the main loop  
  * WP\_Query \- Useful for creating custom loops and multiple loops

Create Widgets:

*  Wordpress provides a Widgets API that allows you to create your own widget.  
* You create a widget by extending the widget class.  
* Four functions need to be addedL  
  * widget() \- Output content  
  * form() \- Outputs the form fields that appear in the admin area for widgets.  
  * update() \- Processes the Options  
  * \_\_construct() \- Inits the Widget  
* You need to register\_widget( ‘widget class’ ) in a call back function and then hook it to the widget\_init action hook.   
* The documentation does a walkthrough of creating a widget in the documentation.   
* wp\_kses\_post() Will remove any illegal HTML tags.   
* Widget Variables:  
  * $name  
  * $id  
  * $description  
  * $class  
  * $before\_widget  
  * $after\_widget  
  * $before\_title  
  * $after\_title  
  * $widget\_id  
  * $widget\_name

Manage Users and Roles:

* All user data is stored in the Users table in the database.  
* They all have username, passwords, and emails  
* Easiest way to create a user:  
  * wp\_create\_user( $username, $password, $email )  
* wp\_generate\_password() will generate a random password.   
* The best hook to use when processing form data is ‘admin\_init’  
* wp\_update\_user( $userData ) allows you to update a user's credentials.   
  * The $userData parameter is an array of data.   
* A single piece of user data can be changed via update\_user\_meta()  
* You can also delete existing users using wp\_delete\_user( $id )  
* User Roles and Capabilities  
  * Each role has its own set of capabilities  
  * Checking for proper capabilities is critical for security  
  * Each user should have the least permissive capabilities required to do the intended task  
  * Each role inherits all the previous roles in the hierarchy  
* Default WP Roles:  
  * Super Admin  
  * Administrator  
  * Editor  
  * Author  
  * Contributor  
  * Subscriber  
* Changing or Modifying WP Roles  
  * add\_role() \- Add role or assign capabilities  
  * get\_role() \- Gets an already created role  
  * remove\_role() \- Removes a role from WP.  
* current\_user\_can() is a great security function to ensure that the user can perform the action they are attempting. 

Work with JavaScript and CSS:

* JavaScript:  
  * Include a JavaScript file with wp\_enqueue\_script()  
  * Include inline JavaScript with wp\_add\_inline\_script()  
* CSS  
  * Include a CSS file with wp\_enqueue\_sstyles()  
  * Include inline CSS with wp\_add\_inline\_styles()  
* The admin\_ enqueue \_scripts styles allow you to add to the admin pages.  
* The wp\_enqueue\_scripts allows you to add CSS or JavaScript to existing public pages.  
* The login pages hook is login\_enqueue\_scripts  
* Inline styles can be added using wp\_add\_inline\_style() function  
* Front-End Hook: wp\_enqueue\_scripts  
* Admin Area Hook: admin\_enqueue\_scripts  
* Login Page Hook: login\_enqueue\_scripts

Use the Options API

* Allows you to add and delete options and update them.  
* Main Functions:  
  * get\_option(name)  
  * add\_option(name, value)  
  * update\_option(name, value)  
  * delete\_option(name)  
* The options API and the settings API store settings in the same Table.   
* The add and update are hooked onto the admin\_init

Add Custom Post Types and Taxonomies

* It is easy to add custom post types and taxonomies  
* Custom post types are made when the default options don’t fit.  
* Taxonomies are useful for categories of products that don’t fit  
  * Category  
  * Post\_tags  
  * Link\_category  
  * Post\_format  
* Functions can be hooked to the ‘init’ hook when you want to use it every time a page is loaded.  
* register\_post\_type($name, $args array) \- Will register a new post type.   
* register\_taxonomy($name, $post type, $array args)

Work with Custom Fields

* Custom Fields are a type of Metadata  
* Types of MetaData  
  * Post metadata \- get\_post\_meta( $id, custom field name, is\_array)  
    * get \_the\_id() will get the post id.  
  * User metadata \- get\_user-meta()  
  * Comment metadata \- get\_comment\_meta()  
  * Term metadata \- get\_term\_meta()  
* You can also add, update, and remove  
*  Custom Fields:  
  * Metadata for posts  
  * Key-Value Pairs  
  * Key names can be used more than once  
* You can add a custom field manually in the admin console.   
* get\_post\_custom() will allow you to get all custom fields attached to a post.   
* Any fields that start with an \_ are hidden in the admin console.   
  * This allows you to hide custom fields from the end user.   
* The ‘the\_content’ hook fires every time a post is loaded, so it works great for working with custom fields.   
* add\_post\_meta( get\_the\_ID(), name, $value, is\_unique)  
* update\_post\_meta( get\_the\_ID(), name, $newvalue, $previous value) will change the custom field.   
* delete\_post\_meta( get\_the\_ID() , $nameoffield) will delete the specified custom field. 

Add Meta Boxes:

* Allows you to add Meta Boxes to the wordpress admin area.   
* Metaboxes can be moved by clicking and dragging or hiding the meta boxes in the screen options.  
  * To add a new meta box:  
    * add\_meta\_box(  
    *            'myplugin\_meta\_box',         // Unique ID of meta box  
    *            'MyPlugin Meta Box',         // Title of meta box  
    *            'myplugin\_display\_meta\_box', // Callback function  
    *            $post\_type                   // Post type  
    *        );  
    * Hook onto the ‘add-meta-boxes’ hook.   
    * The post types are the posts you want to add to.   
  * To update the meta box:  
    * update\_post\_meta(  
    *            $post\_id,                                            // Post ID  
    *            '\_myplugin\_meta\_key',                                // Meta key  
    *            sanitize\_text\_field( $\_POST\[ 'myplugin-meta-box' \] ) // Meta value  
    *        );  
    * Hook onto ‘save\_post’ to ensure that the meta box is saved.   
  * get\_post\_meta( $post-\>ID, '\_myplugin\_meta\_key', true ) allows you to hide the meta box from everything except your new section by including an \_ in the name.

Working with Custom Database Queries:

* Wordpress provides hundreds of functions to get the data from the database.  
  * Ex:  
    * get\_post()  
    * get\_userdata()  
    * get\_category()  
    * get\_comment()  
    * get\_attached\_media()  
    * get\_metadata()  
* The wpdb class makes a global variable called wpdb  
  * The class contains a set of functions  
  * Interacts with the database for you  
  * Use $wpdb, not the class itself.   
* Wpdb methods:  
  * \-\>prepare( $query, $column, $field ) Escape a SQL query to avoid SQL injections  
  * \-\>get\_results() \- Get generic results  
  * \-\>get\_var() \- Get a variable  
  * \-\>get\_col() \- Get a column  
  * \-\>get\_col\_info() Get column information  
  * \-\>get\_row() \- Get a row  
  * \-\>insert() \- Insert row  
  * \-\>replace() \- replace row  
  * \-\>update() \- Update row  
  * \-\>delete() \- Delete row  
  * \-\>query() \- Run general query  
* Using prepare()  
  * Define the query  
    * $query \= “SELECT \* FROM $wpdb-\>users WHERE ID=$user\_id”  
  * Replace the variable with a placeholder  
    * $query \= “SELECT \* FROM $wpdb-\>users WHERE ID= $d”  
  * Prepare the Query  
    * $prepared\_query \= $wpdb-\>prepare( $query, $user\_id )  
  * Execute the query:  
    * $results \= $wpdb-\>get\_var( $escaped\_query )  
* To use the class, all you need to do is declare the global variable:  
  * Global $wpdb;

Integrate Admin Notices

* Admin notices are displayed at the top of the page when an update, error, or warning occurs.   
* If menus are in the settings menu, Wordpress takes care of admin messages for you. Outside of the settings menu you are on your own.   
* To add the admin notices, you add the settings\_errors(); to the HTML of the page you want to add the notice to.   
* You can also add admin notices by hooking a callback function with that line to the ‘admin\_notices’ hook.   
* get\_current\_screen() will get the current screen.   
* You can also make your own HTML notices and hook them to the same hook to make custom Admin Notices.   
* CSS Classes for Notices  
  * Notice-error \- Error message displayed in red  
  * Notice-warning \- warning message with a yellow border  
  * Notice-success with a success message, green border  
  * Notice-info \- info message blue border.

Use the Transients API

* Stores cached data in the options table  
* Transients expire at a specific time set  
  * The default time is twelve hours.   
* Very useful for storing temporary data  
* Functions used with Transients  
  * get\_transient( ‘transient\_name’ )  
  * set\_transient( ‘name’, $var, expire-time)  
  * delete\_transient( ‘name’ )

Use the HTTP API:

* Allows you to work with APIs outside of WordPress.  
* HTTP \- Communication protocol for the internet.  
* Request Methods \- GET, POST, HEAD  
* HEAD requests get the header of the request before making the full request.   
* HTTP requests return a status code dictating what happened.   
* WP\_Http Class allows you to make requests  
* Main Functions  
  * wp\_safe\_remote\_get( $url, $args ) \- Retrieve a raw response from an HTTP request using the GET method.  
  * wp\_safe\_remote\_post( $url, $args ) \- Retrience a raw response from an HTTP request using the POST method.   
  * wp\_safe\_remote\_head( $url, $args ) \- Retrieve a raw response from an HTTP request using the HEAD method.  
  * wp\_safe\_remote\_request( $url, $args ) \- Retrience a raw response from an HTTP request using any valid method.   
* is\_wp\_error( $response ) will check if the HTTP request was successful or not.   
* There are also a bunch of utility functions that allow you to get specific parts of the response of the request  
  * See the documentation for these numerous functions.   
* Performance:  
  * External APIs can slow down your site  
  * It time extra time to process and return requests  
  * API’s have limits to requests, so be careful when making numerous API requests  
* To improve Performance  
  * Use transients to cache response data  
  * Check the status of the resource via the HEAD request  
  * Only make full GET or POST requests if the content has changed. 

Use WP-Cron

* Allows you to make time based tasks or at registered intervals.   
* It is a pseudo cron service, it only runs on the page load.   
  * It is not set by minute, the queue of requests can add up if pages are not loaded.  
* Default Intervals  
  * Hourly  
  * Twice Daily  
  * Daily  
* You can set your own intervals for CRON events.   
* To create your own interval: make your own array with the interval and custom display name. Add it to the schedules array and hook it to the ‘cron\_schedules’ hook.  
* To schedule an event:  
  * wp\_schedule\_event( time(), interval, name of hook)  
* Be sure to check that the event has not already been scheduled.   
* These can be hooked to the register\_activation\_hook  
* Then, the action you want to perform should be hooked onto your newly created hook.   
* You can run WP\_cron manually by loading the wp-cron.php file on your browser.  
* You can also define WP-CRON constants in the wp-config file. \\  
* Be sure to remove any hooks from your plugin if it is uninstalled.  
  * wp\_clear\_scheduled\_hook( ‘event\_name’)   
  * Then: register\_deactivation\_hook(\_\_FILE\_\_, ‘hook\_name’)

Implement Ajax:

* Ajax allows for interactions with the server without requiring a page reload.  
* The three functions included with the class has the ajax-admin.php file that uses Ajax on the server.   
* The JS file also needs to be included that was included with the class: ajax-public.js  
* There are two useful hooks for Ajax: wp\_ajax\_public\_hook and wp\_ajax\_nopriv\_public\_hook

Using the REST API:

* Provides database data in JSON format  
* Enables CRUD via client-side JavaScript  
* Enables interaction with external apps  
* Provide public data to anonymous clients  
* Provides private data to authorized clients  
* Is included in WordPress 4.7 and later  
* Benefits:  
  * Enables interaction with data via JS  
  * Opens WordPress to other programming languages  
  * Provides an alternative to WordPress Ajax API  
  * Handles nonce verification and data sanitization

Develop with Gutenburg:

* Wordpress provided a new block editor called Gutenburg to edit pages.  
* Gutenberg allows you to add different blocks to your post, along with any other blocks the plugins you add on allow. 

