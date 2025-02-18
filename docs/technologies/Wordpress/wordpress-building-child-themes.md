---
id: Wordpress Building Child Themes
tags:
  - php
  - wordpress
  - themes
---

# Wordpress Building Child Themes

| Command | Description |
| :---- | :---- |
| `wp_mail("email", "subject", "message")` | Allows you to send an email. |
| `add_action("hook", "callback function")` | Hooks an action. |
| `add_filter('hook', 'callback function')` | Adds a filter to the designated hook, changing the content. |
| `register_activation_hook(__FILE__, "callback function")` | Runs when the plugin is activated |
| `register_deactivation_hook(__FILE__, "callback function")` | Runs when the plugin is deactivated |
| `register_uninstall_hook()` | Runs when the plugin is uninstalled. |
| `current_user_can('action')` | Checks if the current user has the permissions to perform the requested action. |
| `add_option('option', value)` | Adds an option. |
| `delete_option('option', value)` | Deletes the option |
| `flush_rewrite_rules()` | Flushes the rewrite rules |
| `wp_die("message")` | Good for debugging, will cause WordPress to die and a message to be shown. |
| `function_exists()` | Checks if the named function exists. |
| `wp_logout()` | Pluggable function that handles what happens when a user logs out. |
| `is_email()` | Checks if an email is valid |
| `term_exists()` | Checks if term exists |
| `username_exists()` | Checks if the username exists |
| `preg_match("regex", "string")` | Checks if a string matches the pattern stated. |
| `sanitize_email()` | Sanitizes data as an email address. |
| `sanitize_text_field()` | Sanitizes data for text fields. |
| `sanitize_user()` | Sanitizes data as a username. |
| `wp_nonce_field('myplugin_form_action', 'myplugin_nonce_field', false)` | Adds a hidden nonce to a form. |
| `wp_verify_nonce($nonce, 'myplugin_form_action')` | Verifies that the nonce exists and accepts the results of the form. |
| `is_singular()` | Single post or page |
| `is_single()` | Single post |
| `is_page()` | Single page |
| `is_archive()` | Archive page |
| `isset()` | Checks if a variable is set |
| `function_exists()` | Checks if a function exists |
| `class_exists()` | Checks if a class exists |
| `defined()` | Checks if a constant is defined |
| `get_posts()` | Useful for creating side loops, get the posts on the page. |
| `pre_get_posts` | Hook for customizing the main loop |
| `WP_Query` | Useful for creating custom loops and multiple loops. |

```php
// exit if file is called directly
if (!defined('ABSPATH')) {
    exit;
}
```
Ensures that the PHP files are being called from WordPress directly.

## Course Overview

* WordPress - free open source content management system based on PHP and MySQL.
* The WordPress core is the set of main core files.
* WordPress allows people to create their own websites with powerful features.
* Plug-ins allow you to add packages of code that extend the core functionality of WordPress.
* Plugins can do:
  * Improve Security
  * Improve SEO functionality
  * Improve performance with caching
  * Integrate third-party services
  * Customize the WordPress admin area
  * Customize just about anything
* Using the Codex and developer documentation is a great idea.

## Preparing for Development

* You need to set up a web server either locally or on a virtual machine.
* Version control allows you to back up the website and increase organization.
* There are also numerous dev tools for developing plugins.
* There are numerous development plugins that are really useful for making plugins:
  * Developer
  * WP-Dev-Tools
  * Query Monitor
  * Debug Bar
* You want to go into `wp-config.php` and turn on `WP_DEBUG`
  * You can view the logs directly on the web pages by doing:
    ```php
    define('WP_DEBUG_DISPLAY', true);
    ```
  * You can also log debug info into a file at `/wp-content/debug.log` by doing:
    ```php
    define('WP_DEBUG_LOG', true);
    ```

## Explore WordPress Plugins

* The golden rule is to not modify the WordPress core file:
  * Updates will overwrite your changes.
  * Changes can break things
  * Use plugins instead.
* There are numerous plugins already available:
  * There are over 50,000 available plugins. Be sure to check before you start building.
  * You can use already built projects to save yourself time and effort.
  * Pro-Plugins are around the web and cost money to use and download.
  * All plugins hosted at the plugins WordPress page and open source.
  * Be sure to look at the license attached to the code you are using.

## Get Started

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
* Most plugins are licensed under the GPL GNU Public license version 2 or better, same as the WordPress core.
* You also want to add a copying permission statement to the file header along with including the actual license itself.
* In the WordPress admin area, you can activate your plugin in the plugin menu.
* You can install plugins in two different ways:
  * Manually install the plugin into the file directory.
  * Install into the `mu-plugins` directory, which is automatically activated and must be used.
    * You may need to create this folder.

### Must-Use Plugins

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

### Plugin Naming Guidelines

* Plugin name should match the main plugin file.
* Plugin name should match the main plugin folder
* Do some research to avoid clashing with existing names.

## Explore WordPress APIs

* All the code used to build the plugin should utilize the WordPress API.
* API - Application Programming Interface
* WordPress APIs:
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

### Reasons to Use the WP API

* Makes development easier
* Saves time - no need to ‘reinvent the wheel’
* Does the heavy lifting for many complex tasks
* Ensure forward and backward compatibility
* Offers seamless integration with the WordPress admin area.

## Action and Filter Hooks

* Hooks allow for the modification, extension, and removal of core functionality.
* There are two types of hooks.
  * Action - Allows you to run custom code at specific points during the execution of WordPress.
    * Ex: echo output, write to a file, modify a database.
  * Filters - modify the data during the execution of WordPress
    * Ex: modify post content before sending it to the user.
* Callback functions are needed to use hooks.
* `wp_mail("email", "subject", "message")` Allows you to send an email.
* `add_action("hook", "callback_function")` allows you to hook a callback function to an action.
* There is an order that hooks are executed in.
* `add_filter('hook', 'callback function')` adds a filter to the designated hook, changing the content.
* You can add your own hooks to your plugins. This allows other developers to extend your plugin if they wish.
* You can also remove or disconnect filters and actions.

## Plugin Activation and Deactivation

* Three important hooks when developing plugins:
  * `register_activation_hook()` - runs when the plugin is activated
    * Useful hook when adding default options, making database tables, and sets options.
    * Ex: `register_activation_hook(__FILE__, 'callback function')`
      * `__FILE__` is a PHP constant of the PWD.
  * `register_deactivation_hook()` - runs when the plugin is deactivated
    * Ex: `register_deactivation_hook(__FILE__, 'callback function');`
  * `register_uninstall_hook()` - runs when the plugin is uninstalled.
    * Ex: `register_uninstall_hook(__FILE__, 'myplugin_on_uninstall');`
* `current_user_can('action')` - Checks if the user can perform the requested action.
* `add_option('option', value)` - Sets the option to the requested value.
* `register_activation_hook()` must be called from within the main plugin file.
* `register_activation_hook()` must not be registered from within another hook (e.g., "plugins_loaded" or "init"), because such hooks are called before the plugin is activated.

## Pluggable Activation and Deactivation

* WordPress provides a small set of Core functions that can be replaced by our own custom functions.
  * The list of functions can be found in `wp-includes/pluggable.php`
* Ex: `wp_logout()` handles the logging out of any users.
  * This connects to the `wp_logout` hook. You could change the functionality by hooking an action to that hook
  * You can also make your own `wp_logout()` function by naming it the same thing in your file.
* Pluggable functions allow for further customization, maybe even more than hooks offer.
* All pluggable functions are wrapped in `function_exists()` functions that check if they exist. This makes them pluggable.

## Develop Secure WordPress Plugins

* Security is important to consider when creating plugins.
* Security is added as you build by validating visitors, sanitizing input/output, using nonces, and performing data validation.

### Examples of Data Validation

* Check if an address exists
* Check if the number of items is greater than zero
* Check if a credit card number contains only numbers
* Check if formatting is correct.
* Check if a submission is not blank.

### WP Validation Functions

* `is_email()` - checks if an email is valid
* `term_exists()` - checks if term exists
* `username_exists()` - checks if the username exists
* You can create your own validation functions that return a boolean on whether or not it is valid.

### Data Sanitization

* The process of cleaning or filtering data to make it safe.

### WP Sanitization Functions

* `sanitize_email()`
* `sanitize_text_field()`
  * Checks for invalid UTF-8
  * Converts single less-than characters to entity
  * Strips all tags
  * Removes line breaks, tabs, and extra white space.
* `sanitize_user()`

### Nonces

* Generated strings used to verify requests for security purposes.
  * Ex: `wp_nonce_field('myplugin_form_action', 'myplugin_nonce_field', false)`
  * Check that the nonce is correct: `wp_verify_nonce($nonce, 'myplugin_form_action')`
  * Creates a hidden nonce field used for verification.

## Best Practices for Plugins

### File Organization

* Separate admin assets from public assets
* Put general PHP files in the `/includes/` folder
* Add a proper file header to the main plugin file
* Keep the root directory as clean as possible.

### Plugin Architecture

* Depends on the size of the plugin.
* Falls into three camps:
  * Single plugin file, containing functions
  * Single plugin file, containing a class
  * Main plugin file, then one or more class files.
* Keep your code well organized
* Comment your code as needed
* Separate CSS and JavaScript Files
* Use conditional loading of code and assets

### WP Conditional Tags

* `is_singular()` - single post or page
* `is_single()` - single post
* `is_page()` - single page
* `is_archive()` - archive page

### Avoid Naming Collisions

* Plugins have the same names on files, classes, variables, functions
* Prefix everything! (namespacing)
  * Namespacing - Group of elements that share a unique name or identifier
  * Functions, Classes, Hooks, global variables, public variables, and database entries should be prefixed

### Check for Existing Implementations

* PHP Functions:
  * `isset()` - checks if a variable is set
  * `function_exists()` - checks if a function exists
  * `class_exists()` - checks if a class exists
  * `defined()` - checks if a constant is defined.

### Use Object-Oriented Programming (OOP)

* Simplifies needing to check if the class already exists.
* Use WordPress API and core functions

### Choose a Good Name for Your Plugin

* Avoid using WordPress or Plugin
* Do not include trademarked names without permission
* Do not use vulgar or offensive names
* Choose a unique name and avoid copyright issues
* Take your time and do research

### Write Great Documentation

* Follow the `readme` documentation file on the website.
* There is a validator on wordpress.org to ensure that `readme`s are valid.

### Plugin Boilerplates

* It is a built-in starter point.
* Keep a good changelog
* Use semantic versioning

## Creating the Plugin Directory and Files

* The `admin` folder is for anything styling or code written for the admin pages.
* The `public` folder is for any styling and code outfacing.
* The `includes` folder is for any PHP files that are being used anywhere.
* The `languages` folder is for translation.
* `index.php` is empty, it is just for security, it hides the file directory
  * Add it to the `admin`, `includes`, `languages`, and `public` folders.
* For security reasons, you want to prevent direct access to the PHP files, add this line above each PHP file:
  ```php
  // exit if file is called directly
  if (!defined('ABSPATH')) {
      exit;
  }
  ```

## Add Administration Menus

* There are two types of admin menus:
  * Top-Level Menu
    * May contain sub-levels
    * Best for plugins with multiple settings pages
  * Sub-Level Menu
    * Adding to an existing top level menu
    * Best for plugins with only one setting page

### To Add a Menu

```php
add_menu_page(
    string $page_title,
    string $menu_title,
    string $capability,
    string $menu_slug,
    callable $function = '',
    string $icon_url = '',
    int $position = null
);
```
* This is hooked to the `admin_menu` hook as an action.

### To Add a Sub-Menu

```php
add_submenu_page(
    string $parent_slug,
    string $page_title,
    string $menu_title,
    string $capability,
    string $menu_slug,
    callable $function = ''
);
```
* This is also hooked to the `admin_menu` hook as an action.
* Don’t forget to add the no-access code to any new files.

### To Include Files in the Admin Area

```php
if (is_admin()) {
    // include dependencies
    require_once plugin_dir_path(__FILE__) . 'admin/admin-menu.php';
    require_once plugin_dir_path(__FILE__) . 'admin/settings-page.php';
}
```

## Add The Plugin Settings Page

* The settings API provides built-in security and visual consistency. It also handles all the form processing.

### Types of HTML Inputs Supported in Plugins

* Text input
* Radio input
* Checkbox
* Textarea
* Select Menu

* The first argument in `register_settings` must match the `settings_fields` from the display settings page function.
* The `register_settings` function can be hooked to `admin_init`.
* The `register_settings` function should register the settings, add the sections, and finally add the settings.

## Add Settings Callback Functions

* `get_option('myplugin_options', myplugin_options_default());`
  * The first argument is defined in the `register_settings()` function.
  * The second parameter is the function that returns the default option if they can’t find the options.
* `checked()` is a function that checks if a radio button is checked.
* `wp_kses_allowed_html('post')`
  * Allows basic tags and markup
* `selected()` - checks if identical marks are selected.

## Validate Plugin Settings

* Sanitizes the URL: `esc_url($input['custom_url'])`
* Checks if an array key exists: `array_key_exists()`
* Sanitizes text fields with markup: `wp_kses_post()`

## Add Custom Functionality

* Files that are for both the admin and public view should be placed outside the `is_admin()` statement.
* Will change the login header.
  * `add_filter('login_headerurl', 'callback function');`
* Will change the title of the logo link at the login page.
  * `add_filter('login_headertitle', 'callback function');`
* Will add a stylesheet:
  * `wp_enqueue_style(handle, path);`
* You can also remove the toolbar:
  ```php
  global $wp_admin_bar;
  $wp_admin_bar->remove_menu('comments');
  $wp_admin_bar->remove_menu('new-content');
  ```
  * Hook:
    * `add_action('wp_before_admin_bar_render', 'callback', 999);`

## Include JavaScript and CSS

* There are two different `wp_enqueue` functions for JavaScript and CSS:
  * CSS
    * `wp_enqueue_style(handle, URL/Path, array_of_dependencies, URL query string, media attribute of style sheet);`
  * JavaScript
    * `wp_enqueue_script(handle, URL/Path, array of dependencies, URL Query String, true);`
* Hook: `login_enqueue_scripts`

## Plugin Internalization

* Internationalizing means that it is ready for users to translate into other languages.

### General Steps

* Prepare Folders and Files
  * Add a `/language/` folder
  * Use the same slug/name for the main plugin folder and file
  * Add “Text Domain” and “Domain Path” to the file header. (main plugin file and `readme.txt`)
* Add Localization Functions
  * Include `load_plugin_textdomain()`
    ```php
    function myplugin_load_textdomain() {
        load_plugin_textdomain('myplugin', false, plugin_dir_path(__FILE__) . 'languages/');
    }
    add_action('plugins_loaded', 'myplugin_load_textdomain');
    ```
    * The hook is called `plugins_loaded`
  * Replace all text strings with a localization function.
    * `__('string', 'plugins text domain')`

### Generate the POT File

* (Default Translation File)
* Tools for i18n and I10n
  * Loco Translate (WordPress Plugin)

### General I10n Functions

* `__()`
* `_e()` - Echo instead of return.
* `_x()` - Provides an extra parameter for context

### Safer General I10n Functions

* Escapes for Markup:
  * `esc_html__()`
  * `esc_html_e()`
  * `esc_html_x()`
* Will do sanitization and prevent unwanted code from running

## Add an Uninstall Feature

* Any good plugin will clean itself up if it is uninstalled.
* This is good to add from the beginning so you can keep track of what you are adding.

### Uninstall Methods

* `register_uninstall_hook(path, 'callback function')`
  * `delete_option('myplugin_options');`
    * Will run automatically if the plugin is uninstalled.
    * Preferred Method
    * Can also do:
      * `delete_transient()`
      * `delete_metadata()`
* `uninstall.php` file.

## Test and Debug

* Be sure to check your `debug.log` to ensure that there are no errors occurring in the background.
* Be sure to test each of your functions when developing.
* You can also check on different WP Versions
  * Current WP Version
  * Nightly Development Version
  * WordPress Multisite
  * Older version(s) of WordPress
  * WordPress setup for other languages

### Check the Details

* Proper file headers in `readme` and main plugin file
* Do not include the closing tags at the end of PHP files
* Include the no direct access tag and the end of PHP files
* Properly namespace and public functions, classes, etc
* Delete any empty folders and files (optional)

## Customize the WordPress Loop

### About the WordPress Loop

* Displays sets of posts
* Is included in theme templates

### Custom Loop Techniques

* `get_posts()` - Useful for creating side loops
* `pre_get_posts` - Useful for customizing the main loop
* `WP_Query` - Useful for creating custom loops and multiple loops

## Create Widgets

* WordPress provides a Widgets API that allows you to create your own widget.
* You create a widget by extending the widget class.
* Four functions need to be added:
  * `widget()` - Output content
  * `form()` - Outputs the form fields that appear in the admin area for widgets.
  * `update()` - Processes the Options
  * `__construct()` - Inits the Widget
* You need to `register_widget('widget class')` in a call back function and then hook it to the `widget_init` action hook.
* The documentation does a walkthrough of creating a widget in the documentation.
* `wp_kses_post()` Will remove any illegal HTML tags.

### Widget Variables

* `$name`
* `$id`
* `$description`
* `$class`
* `$before_widget`
* `$after_widget`
* `$before_title`
* `$after_title`
* `$widget_id`
* `$widget_name`

## Manage Users and Roles

* All user data is stored in the Users table in the database.
* They all have username, passwords, and emails

### Easiest Way to Create a User

* `wp_create_user($username, $password, $email)`
* `wp_generate_password()` will generate a random password.
* The best hook to use when processing form data is `admin_init`
* `wp_update_user($userData)` allows you to update a user's credentials.
  * The `$userData` parameter is an array of data.
* A single piece of user data can be changed via `update_user_meta()`
* You can also delete existing users using `wp_delete_user($id)`

### User Roles and Capabilities

* Each role has its own set of capabilities
* Checking for proper capabilities is critical for security
* Each user should have the least permissive capabilities required to do the intended task
* Each role inherits all the previous roles in the hierarchy

### Default WP Roles

* Super Admin
* Administrator
* Editor
* Author
* Contributor
* Subscriber

### Changing or Modifying WP Roles

* `add_role()` - Add role or assign capabilities
* `get_role()` - Gets an already created role
* `remove_role()` - Removes a role from WP.
* `current_user_can()` is a great security function to ensure that the user can perform the action they are attempting.

## Work with JavaScript and CSS

### JavaScript

* Include a JavaScript file with `wp_enqueue_script()`
* Include inline JavaScript with `wp_add_inline_script()`

### CSS

* Include a CSS file with `wp_enqueue_styles()`
* Include inline CSS with `wp_add_inline_styles()`
* The `admin_enqueue_scripts` styles allow you to add to the admin pages.
* The `wp_enqueue_scripts` allows you to add CSS or JavaScript to existing public pages.
* The login pages hook is `login_enqueue_scripts`
* Inline styles can be added using `wp_add_inline_style()` function

### Hooks

* Front-End Hook: `wp_enqueue_scripts`
* Admin Area Hook: `admin_enqueue_scripts`
* Login Page Hook: `login_enqueue_scripts`

## Use the Options API

* Allows you to add and delete options and update them.

### Main Functions

* `get_option(name)`
* `add_option(name, value)`
* `update_option(name, value)`
* `delete_option(name)`
* The options API and the settings API store settings in the same Table.
* The add and update are hooked onto the `admin_init`

## Add Custom Post Types and Taxonomies

* It is easy to add custom post types and taxonomies
* Custom post types are made when the default options don’t fit.
* Taxonomies are useful for categories of products that don’t fit
  * Category
  * Post_tags
  * Link_category
  * Post_format
* Functions can be hooked to the `init` hook when you want to use it every time a page is loaded.
* `register_post_type($name, $args array)` - Will register a new post type.
* `register_taxonomy($name, $post type, $array args)`

## Work with Custom Fields

* Custom Fields are a type of Metadata

### Types of MetaData

* Post metadata - `get_post_meta($id, custom field name, is_array)`
  * `get_the_id()` will get the post id.
* User metadata - `get_user_meta()`
* Comment metadata - `get_comment_meta()`
* Term metadata - `get_term_meta()`
* You can also add, update, and remove

### Custom Fields

* Metadata for posts
* Key-Value Pairs
* Key names can be used more than once
* You can add a custom field manually in the admin console.
* `get_post_custom()` will allow you to get all custom fields attached to a post.
* Any fields that start with an `_` are hidden in the admin console.
  * This allows you to hide custom fields from the end user.
* The `the_content` hook fires every time a post is loaded, so it works great for working with custom fields.
* `add_post_meta(get_the_ID(), name, $value, is_unique)`
* `update_post_meta(get_the_ID(), name, $newvalue, $previous value)` will change the custom field.
* `delete_post_meta(get_the_ID(), $nameoffield)` will delete the specified custom field.

## Add Meta Boxes

* Allows you to add Meta Boxes to the WordPress admin area.
* Metaboxes can be moved by clicking and dragging or hiding the meta boxes in the screen options.

### To Add a New Meta Box

```php
add_meta_box(
    'myplugin_meta_box',         // Unique ID of meta box
    'MyPlugin Meta Box',         // Title of meta box
    'myplugin_display_meta_box', // Callback function
    $post_type                   // Post type
);
```
* Hook onto the `add_meta_boxes` hook.
* The post types are the posts you want to add to.

### To Update the Meta Box

```php
update_post_meta(
    $post_id,                                            // Post ID
    '_myplugin_meta_key',                                // Meta key
    sanitize_text_field($_POST['myplugin-meta-box']) // Meta value
);
```
* Hook onto `save_post` to ensure that the meta box is saved.
* `get_post_meta($post->ID, '_myplugin_meta_key', true)` allows you to hide the meta box from everything except your new section by including an `_` in the name.

## Working with Custom Database Queries

* WordPress provides hundreds of functions to get the data from the database.
  * Ex:
    * `get_post()`
    * `get_userdata()`
    * `get_category()`
    * `get_comment()`
    * `get_attached_media()`
    * `get_metadata()`
* The `wpdb` class makes a global variable called `wpdb`
  * The class contains a set of functions
  * Interacts with the database for you
  * Use `$wpdb`, not the class itself.

### Wpdb Methods

* `->prepare($query, $column, $field)` Escape a SQL query to avoid SQL injections
* `->get_results()` - Get generic results
* `->get_var()` - Get a variable
* `->get_col()` - Get a column
* `->get_col_info()` Get column information
* `->get_row()` - Get a row
* `->insert()` - Insert row
* `->replace()` - replace row
* `->update()` - Update row
* `->delete()` - Delete row
* `->query()` - Run general query

### Using prepare()

* Define the query
  ```php
  $query = "SELECT * FROM $wpdb->users WHERE ID=$user_id";
  ```
* Replace the variable with a placeholder
  ```php
  $query = "SELECT * FROM $wpdb->users WHERE ID= %d";
  ```
* Prepare the Query
  ```php
  $prepared_query = $wpdb->prepare($query, $user_id);
  ```
* Execute the query:
  ```php
  $results = $wpdb->get_var($escaped_query);
  ```

### To Use the Class

* All you need to do is declare the global variable:
  ```php
  global $wpdb;
  ```

## Integrate Admin Notices

* Admin notices are displayed at the top of the page when an update, error, or warning occurs.
* If menus are in the settings menu, WordPress takes care of admin messages for you. Outside of the settings menu you are on your own.
* To add the admin notices, you add the `settings_errors();` to the HTML of the page you want to add the notice to.
* You can also add admin notices by hooking a callback function with that line to the `admin_notices` hook.
* `get_current_screen()` will get the current screen.
* You can also make your own HTML notices and hook them to the same hook to make custom Admin Notices.

### CSS Classes for Notices

* `notice-error` - Error message displayed in red
* `notice-warning` - warning message with a yellow border
* `notice-success` with a success message, green border
* `notice-info` - info message blue border.

## Use the Transients API

* Stores cached data in the options table
* Transients expire at a specific time set
  * The default time is twelve hours.
* Very useful for storing temporary data

### Functions Used with Transients

* `get_transient('transient_name')`
* `set_transient('name', $var, expire-time)`
* `delete_transient('name')`

## Use the HTTP API

* Allows you to work with APIs outside of WordPress.
* HTTP - Communication protocol for the internet.
* Request Methods - GET, POST, HEAD
* HEAD requests get the header of the request before making the full request.
* HTTP requests return a status code dictating what happened.

### WP_Http Class

* Allows you to make requests

### Main Functions

* `wp_safe_remote_get($url, $args)` - Retrieve a raw response from an HTTP request using the GET method.
* `wp_safe_remote_post($url, $args)` - Retrieve a raw response from an HTTP request using the POST method.
* `wp_safe_remote_head($url, $args)` - Retrieve a raw response from an HTTP request using the HEAD method.
* `wp_safe_remote_request($url, $args)` - Retrieve a raw response from an HTTP request using any valid method.
* `is_wp_error($response)` will check if the HTTP request was successful or not.

### Utility Functions

* There are also a bunch of utility functions that allow you to get specific parts of the response of the request
  * See the documentation for these numerous functions.

### Performance

* External APIs can slow down your site
* It takes extra time to process and return requests
* APIs have limits to requests, so be careful when making numerous API requests

### To Improve Performance

* Use transients to cache response data
* Check the status of the resource via the HEAD request
* Only make full GET or POST requests if the content has changed.

## Use WP-Cron

* Allows you to make time based tasks or at registered intervals.
* It is a pseudo cron service, it only runs on the page load.
  * It is not set by minute, the queue of requests can add up if pages are not loaded.

### Default Intervals

* Hourly
* Twice Daily
* Daily

* You can set your own intervals for CRON events.

### To Create Your Own Interval

* Make your own array with the interval and custom display name. Add it to the schedules array and hook it to the `cron_schedules` hook.

### To Schedule an Event

* `wp_schedule_event(time(), interval, name of hook)`
* Be sure to check that the event has not already been scheduled.
* These can be hooked to the `register_activation_hook`
* Then, the action you want to perform should be hooked onto your newly created hook.
* You can run `WP_cron` manually by loading the `wp-cron.php` file on your browser.
* You can also define `WP-CRON` constants in the `wp-config` file.
* Be sure to remove any hooks from your plugin if it is uninstalled.
  * `wp_clear_scheduled_hook('event_name')`
  * Then: `register_deactivation_hook(__FILE__, 'hook_name')`

## Implement Ajax

* Ajax allows for interactions with the server without requiring a page reload.
* The three functions included with the class has the `ajax-admin.php` file that uses Ajax on the server.
* The JS file also needs to be included that was included with the class: `ajax-public.js`
* There are two useful hooks for Ajax: `wp_ajax_public_hook` and `wp_ajax_nopriv_public_hook`

## Using the REST API

* Provides database data in JSON format
* Enables CRUD via client-side JavaScript
* Enables interaction with external apps
* Provide public data to anonymous clients
* Provides private data to authorized clients
* Is included in WordPress 4.7 and later

### Benefits

* Enables interaction with data via JS
* Opens WordPress to other programming languages
* Provides an alternative to WordPress Ajax API
* Handles nonce verification and data sanitization

## Develop with Gutenburg

* WordPress provided a new block editor called Gutenburg to edit pages.
* Gutenberg allows you to add different blocks to your post, along with any other blocks the plugins you add on allow.

