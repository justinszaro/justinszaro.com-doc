# WordPress Hooks and Filters

- `has_action()`: Checks if any action has been registered to a hook.
- `add_action()`: Hooks a function onto a specific action.
- `do_action()`: Drops a bookmark in the code for later action hooking.
- `remove_action()`: Removes an action from a specific hook.
- `has_filter()`: Checks if any filters have been registered for a hook.
- `add_filter()`: Hooks into a specific filter.
- `apply_filters()`: Calls all functions registered on a particular hook.

## WordPress Basics

- WordPress is open-source software built on PHP and MySQL.
- Fully-featured content management system.
- Two versions: Self-hosted (download, complete control) and Hosted (wordpress.com).
- Developers interact via Themes (visual layer) and Plugins (additional functionality).

## Plugin API Overview

- Plugins extend WordPress functionality without modifying the base code.
- A plugin is a set of PHP functions adding specific features or services.
- Plugin API consists of hooks and filter hooks.
- Hooks latch onto WordPress at specific points during runtime.

### Action Hooks

- Actions and filters are two kinds of hooks.
- Common action functions: `has_action()`, `add_action()`, `do_action()`, `remove_action()`.
- Actions run during typical page requests.

### Filter Hooks

- Filters modify input and return it.
- Similar to action functions.
- Basic filter functions: `has_filter()`, `add_filter()`, `apply_filters()`.

## Priorities, Arguments, and Customization

- Priorities specify the order of action function execution.
- Lower numbers execute earlier.
- Functions with the same priority execute in order of addition.
- Arguments are data passed to a function. Default is 1.

## Customizing the WordPress Login Page

- Plugins should be written within the WordPress installation.
- Include a header on custom plugins.
- Basic info needed: Plugin Name, Version, Author, License, Text Domain.
- Plugins need activation within WordPress.

### Adding a Custom Stylesheet

- `wp-login.php` powers the WordPress login page.
- `do_action( 'login_enqueue_scripts' )` sets login page styles.
- Care needed to avoid function name conflicts.
- `wp_enqueue_style()` registers the style source.

### Filtering Login Error Messages

- Login error message confirms valid username.
- `login-errors` hook supplies built-in error messages.
- Add a function as a filter to change the message.
- `__return_null` returns a null value when used with a filter.

### Removing the Login Page Shake

- Login page shakes on incorrect credentials.
- `login_head` hook controls shaking behavior.
- `add_action( 'login_head', 'wp_shake_js', 12 )` triggers the shake.
- To remove, wrap in another function and call using `add_action()`.

## WordPress Hooks, Filters, and Load Order

- Navigating documentation is powerful.
- Documentation covers plugin creation basics, naming conventions, and translation readiness.
- Plugin API has documentation on hooks and filters.
- Debug bar plugin provides detailed page load information.

### Load Order

- Actions are listed in order of execution.
- Inject code at the appropriate point.
- `rarst.net/wordpress/wordpress-core-load/` displays load order charts.
- `query monitor` plugin offers detailed loading info for debugging.

## Understanding Callback Functions

- Callback functions are passed as arguments.
- `add_action()` uses a callback function as the second argument.
- `pre_get_post` action provides access to the `$query` object.
- Documentation states when it's too late to hook an action.

## Using Apply Filters

- `apply_filters()` calls functions added to the filter hook.
- Takes three parameters: `$tag`, `$value`, and `$var`.
- Example: `$value = apply_filters( 'example_filter', 'filter_me', $arg1, $arg2 )`.
- `array_merge()` merges two arrays.

## WP_Hook vs $wp_filter

- WordPress hooks and callback functions are stored in `$wp_filter`.
- WP_Hook class resolves recursive callback issues.
- Direct access to WP_Hook or $wp_filter is usually unnecessary.

## Adding Custom Hooks

- Create hooks in plugins for interaction.
- Use `apply_filters()` and `do_action()` functions.
- Be intentional; changing hooks can break compatibility.

## Inside Themes and Plugins with Hooks

- Popular themes and plugins come with their hooks.
- Documentation may vary for less popular ones.
- Some documentation may be locked behind logins.
- GitHub may have additional information.

## Tips for Using Third-Party Hooks

- Display an error if plugins are missing dependencies.
- Codebase of plugins in wordpress.org is accessible.
- Name plugin files after their folder structure.
- Exit if plugin file is accessed directly.
- Check for parent plugin existence.

## Building a Demo Plugin

- For security, kill plugin if accessed directly.
- `register_sidebar()` builds a sidebar definition.
- `dynamic_sidebar()` displays a sidebar.
- `wp_enqueue_scripts` styles the front page.
- WordPress conditionals manage display.
- Provide option to disable style choices.
- Stay updated with WordPress development at makewordpress.org.
