---
id: Wordpress Advanced Action and Filter Hooks
tags:
  - php
  - wordpress
  - hooks
---

# Wordpress Advanced Action and Filter Hooks

| Command | Description |
| :---- | :---- |
| `has_action()` | Checks if any action has been registered to a hook. |
| `add_action()` | Hooks a function onto a specific action. |
| `do_action()` | Drop a bookmark in the code where you can return later to hook actions. |
| `remove_action()` | Removes an action from a specific hook. |
| `has_filter()` | Checks to see if any filters have been registered for a hook |
| `add_filter()` | Hook into a specific filter |
| `apply_filters()` | Calls all functions registered on a particular hook. |
| `wp_enqueue_style(string $handle, string $src = '')` | Registers the style sheet for the source. Handle is the name of the stylesheet and src is the URL or relative path of the stylesheet. |
| `plugin_dir_url($file)` | Returns the URL of the directory that contains the plugin, including a trailing slash. |
| `__return_null` | A function that returns nothing when used with a function. This does not need to be in a custom function. |

## What is WordPress?

* WordPress is open source software built on PHP and MySQL.
  * It is a fully featured content management system.
* Comes in two different ways:
  * Self-Hosted
    * Free download
    * Complete control over design, database, and code.
  * Hosted Version
    * Called wordpress.com
      * Great for bloggers and businesses.
      * Don’t need access to the code or the code-base
* Developers can interact with WordPress in two different ways:
  * Themes - the visual layer that sits on top of WordPress.
    * Controls the way data is displayed and gives users a varying degree of control over some customization aspects.
  * Plugins - Layers additional functionality to WordPress core without editing core code.
    * User-Friendly documentation is provided.

## What is the Plugin API?

* Plugins allow for WordPress functionality to be extended without the base code being modified.
* Plugin - set of functions written in PHP that adds specific features, or services, to a WordPress site.
* The Plugin API is made of hooks and filter hooks, which latch onto WordPress at a specific point in run time.
  * Ex: User logging in or a post is published.
* For example, the entire login process can be interacted with and personalized for your own site.
* The Plugin API Documentation gives information on where action hooks and filter hooks are built into WordPress.
* There is also developer documentation that is more specific.

## Action Hooks Explained

* There are two different kinds of hooks: actions and filters.
* Action hooks are used through the action functions on the API page.
* Common functions used:
  * `has_action()` - Checks if any action has been registered to a hook.
  * `add_action()` - Hooks a function onto a specific action.
  * `do_action()` - Drops a bookmark in the code where you can return later to hook actions.
  * `remove_action()` - Removes an action from a specific hook.
* The codex also lists the actions run during typical page requests.
  * Called with the `do_action()` function
  * They are listed with the order in which they are done.
* Syntax for the `do_action()` function:
  ```php
  do_action(string $tag, $arg = '');
  ```
  * Ex: `do_action('login_header')`
  * Tags are required, but the argument is optional.
* Syntax for `add_action()` function:
  ```php
  add_action(string $tag, callable $function_to_add, int $priority = 10, int $accepted_args = 1);
  ```
  * Tag and function to add are required, rest are optional.
  * Ex: `add_action('login_header', 'hello_world')`

## Filters Explained

* Filters take some kind of input, modifies the input, then returns it.
* Sits between the database and the browser.
* Has built-in filters that are very similar to the action functions.
* Basic filter functions:
  * `has_filter()` - Checks to see if any filters have been registered for a hook
  * `add_filter()` - Hook into a specific filter
  * `apply_filters()` - Calls all functions registered on a particular hook.
    * Similar to `do_action()`
* `login_headerurl` changes the URL when hovering over the WordPress logo.
* For a filter, the data was returned instead of printing it out.

## Priorities

* WordPress allows you to specify priority and arguments.
* Priorities - specifies the order in which the functions associated with a particular action are executed.
  * Lower numbers are earlier executions.
  * Functions with the same priority are executed in the order they were added to an action.
* Four specific functions can establish priority:
  * `add_filter()`
  * `remove_filter()`
  * `add_action()`
  * `remove_action()`
* When removing an action or a filter, you must remove it at the same priority in which it is executed in the code.

## Arguments

* Arguments are information that is passed to a function.
* When using filters and actions, you need to include the argument count number.
  * By default it is 1.

## Customizing the WordPress Login Page

* You must write plugins within the location where WordPress is installed.
* It is good to include a header on custom plugins.
  * Documentation on this can be found [here](https://developer.wordpress.org/plugins/plugin-basics/header-requirements/).
  * Basic Information Needed:
    * Plugin Name
    * Version
    * Author
    * License
    * Text Domain
* Plugins need to be activated within the WordPress site.

## Adding a Custom Stylesheet

* The `wp-login.php` page powers the WordPress login page.
* `do_action('login_enqueue_scripts');` sets the styles for the login page.
* When making a custom plugin, you need to be careful to not collide with anyone else’s function names.
* The `wp_enqueue_style()` function registers the style of the source.
  * `$handle` is the name of the stylesheet
  * `$src` is the full URL of the stylesheet or the path relative to the root directory of the project.
* There is a built-in function for finding the relative path of a file from the location of the project directory.
  * `plugin_dir_url($file)`
* Finally, you can hook in the custom stylesheet:
  ```php
  add_action('login_enqueue_scripts', 'cwpl_login_stylesheet');
  ```

## Filtering Login Error Messages

* The login error message confirms what a valid username would be.
* The `login_errors` hook supplies the built-in account credential error messages.
* A function with a new message can be added as a filter to `login_errors` to change the message.
* The `__return_null` function when used with a filter will return a null value.

## Removing the Login Page Shake

* The login page shakes when credentials are entered incorrectly.
* The hook `login_head` controls what happens when credentials are entered incorrectly.
* The line `add_action('login_head', 'wp_shake_js', 12)` makes the page shake.
* To remove this, you can just remove the action.
* You cannot do a `remove_action()` by itself. It needs to be wrapped in another function.
  * Simply use the function in an `add_action()` call.

## Finding References and Documentation

* Knowing how to navigate the documentation is really powerful.
* The section on writing a plugin walks through all of the basic resources of creating a plugin, including the naming conventions and making it translation ready.
* The plugin API has the documentation on all hooks and filters.
* The plugin resources page has lots of good material to look over.
* The documentation is a wiki, so there may be some examples that are not working or completely updated. Make sure to verify what is being used.
* There is a plugin developer handbook that is incredibly user-friendly.
* There is a packagecontrol.io site that includes packages that can be used.

## Identifying Available Hooks and Filters

* Finding hooks that work the way you want is difficult to find. It can require a lot of research and a lot of google searches.
* The source code is also very well documented, so it is pretty simple to view.
* There are pages in the documentation that lists the actions run when loading pages.
* It also displays the file in which the actions or hooks are located.
* The search feature in VSCode is also very good for looking at action hooks.
* The Debug bar plugin adds an admin bar that displays a bunch of great information, including debugging.
  * The action and hooks add-on will display the hooks run on a request that is being run.

## Load Order

* In the action reference, things are listed in the order in which they are executed.
* It is important to inject your code at the correct point.
* [rarst.net/wordpress/wordpress-core-load/](https://rarst.net/wordpress/wordpress-core-load/) displays a chart of the load orders for an admin request, a front-end request, and an Ajax request.
* A plugin called query monitor gives detailed information on when things are loaded into a page. It is great for debugging.
* The plugin will also mention the core hooks, where it is being called from, and what the priority is.
* You need to be careful where you are loading your code.

## Understanding Callback Functions

* Callback Function - a function that gets passed as an argument to another function.
* `add_action()` has a callback function as the second argument.
* The `pre_get_posts` action gives access to the `$query` object.
  * The documentation for this action hook states when it is too late to hook an action to this function.
* The `login_redirect` filter redirects the user to a different page.
* The callback functions and where they are added and removed do not need to be done on the same page.

## Using Apply Filters

* `apply_filters()` calls any functions that have been added to the filter hook.
  * It takes three parameters.
    * `string $tag` - name of filter hook.
    * `mixed $value` - callback function that we want to filter.
    * `$var` - variables that we want to pass to the callback function.
  * Example: `$value = apply_filters('example_filter', 'filter_me', $arg1, $arg2)`
* The PHP function `array_merge()` will merge two different arrays.
* `apply_filters` can be used to avoid having to rewrite entire functions.

## WP_Hook vs $wp_filter

* All of the hooks in the Plugin API and any callback functions hooked to them were stored in a global variable `$wp_filter` as an array. Having recursive callbacks or calling other functions that were already hooked would cause issues.
* The `WP_Hook` class was created to resolve these issues.
* Most times, you don’t need to directly access `WP_Hook` or `$wp_filter`.

## Adding Custom Hooks

* You can create your own hooks in your plugins so that other developers can interact with your code.
* This is done using the `apply_filters()` and `do_action()` functions.
* For example, an `apply_filters()` function can be called within a function.
* You need to be intentional when creating hooks. Changing hooks will destroy backwards compatibility.

## Inside Themes and Plugins with Hooks

* Popular themes and plugins come with their own hooks.
* These themes and plugins normally have documentation with the filters and actions they have added.
* Other unpopular ones may not have great documentation.
* Some documentation is locked behind a login and are more tutorial-like.
* More information may also be available on GitHub.

## Tips for Using Third-Party Hooks

* If your plugin is dependent on other plugins, display an error code stating that the other plugins are needed.
* Any plugin that is in the wordpress.org repo has its codebase available for download or viewing.
* It is best to name the plugins file after the folder structure it is in.
* It is good to exit if the plugin file is being accessed directly.
* An `exists` can also be used to check if the parent plugins exist.
* Check for dependencies before using a hook.
* Document your source code in order to provide context for others using your plugin.
  * There is a recommended PHP documentation to do this.
  * Wiki is called documentation standards.

## Building a Demo Plugin

* For security reasons, it is good to kill the plugin if it is being accessed directly.
  ```php
  if (!defined('ABSPATH')) { die; }
  ```
* `register_sidebar(array/string $args)` - Builds the definition for a single sidebar and returns the sidebar's ID.
  * The args array has multiple things in it, see documentation.
* `dynamic_sidebar()` displays a sidebar while hooking it to a filter called content will cause it to appear on the site.
* `wp_enqueue_scripts` is a hook to style the front page of a website.
* WordPress conditionals can help you manage where things display:
  * `is_single()` - Checks if the query is for a single post.
  * `is_singular()` - Is a single post or page.
  * `is_active_sidebar()` - Ensures that there is content in the sidebar.
  * `is_main_query()` - Ensures that the query being run is the main query.
* When using styles, it is best practice to give the option to disable your style choices.
  * By adding the `apply_filters('spcp_load_styles', true)` conditional, the developer can disable your styles if they choose to do so.
  * Then they could disable it like this: `add_filter('spcp_load_styles', '__return_false');`

## Stay up to date with WordPress Development

* Normally WordPress builds on top of itself instead of replacing itself.
* [make.wordpress.org](https://make.wordpress.org) stays up to date with the evolution of WordPress.