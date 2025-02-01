---
id: Wordpress Child Themes
tags:
  - php
  - wordpress
  - themes
---

# Building a WordPress Child Theme

## Introduction

Building a child theme is a great way to start on the path to becoming a WordPress developer. It's similar to creating a plugin, making it an excellent starting point.

## Setting up a Local Development Environment

Transform your computer into a miniature web server for faster testing and development. Using tools like "Local" can greatly speed up your workflow. Remember, `!important` in a CSS file ensures a style won't be overridden.

## Use Real Content

Before coding, ensure you have actual content to work with. Import all the content using the WordPress Admin feature to simplify and accelerate the development process.

## What is a Child Theme?

Child themes modify existing parent themes. They affect CSS files, templates, and functions, with the child theme's versions taking precedence.

### CSS Files

1. Parent theme is loaded first.
2. Child theme is loaded second.

### Templates

1. Child's template file loads first.
2. Parent's template file loads if the child's isn't found.

### Function Files

1. Child's functions are loaded first.
2. Parent's functions are loaded second.

## Picking a Parent Theme

Select a theme similar to what you want; this makes modification easier. Filter themes by layout on wordpress.org. Remember, you can't create grandchild themes.

## Creating and Activating a Child Theme

Refer to WordPress.org documentation for detailed steps. Key points:

1. Create a new folder for your theme with the naming convention "parent-theme-child" or include the client's name.
2. Every theme requires a `style.css` file with a defined header (see documentation).

## Including Stylesheets

Use `functions.php` to include stylesheets. Hook to `wp_enqueue_scripts` to load both child and parent themes. Add your own `wp_enqueue_style` for the child theme.

## Best Practices for Including Your Own Stylesheets

Force WordPress to load the parent's CSS first. Add `array( 'parent-style' )` to the second `wp_enqueue_style` call. Include the version to avoid caching issues (`wp_get_theme()->get('Version')`).

## Employing the Laziness Principle

Only write code when necessary. Copy and modify code from the parent theme as needed.

## Designing in the Browser

Modify layouts directly in the browser and then copy and paste into the file. Use browser inspect to experiment with CSS changes. Be cautious with `em` units. Remember, `Element.style` is the element's direct style. Work in small increments to avoid losing changes.

## Modifying Existing Styles

Utilize the customizer within the WordPress control panel for changes you can make there. For other changes, edit the code in `style.css`.

## Adding New Styles

The child stylesheet can contain brand new styles. Create a new style rule that selects the current selector. You may need to dig through the HTML and CSS to find the proper change.

## Add Flair

Pseudo-elements can be used to style specific parts of elements. Be cautious when changing HTML, as it can affect CSS.

## Understanding functions.php

Functions.php is used to modify a theme's functionality. It can include new functions, modifications to parent functions, and feature removals.

## Finding Functions in the Parent Theme

Look at the `functions.php` file to see which files are included. Search for keywords to locate the functions you want to modify. Pluggable functions are safe to copy and paste.

## Hooks, Filters, and Action

Hooks invite other functions to add to a specific point in WordPress code. Hooked functions interact with hooks. Actions and filters modify existing output.

### Filtering A Function

Designed to modify content. Common example: `the_title`, which changes post titles. `in_category` checks if a post is in a specific category.

### Hooking Functions

Remove unnecessary functionality for best practice.

### Change Posted By

Include documentation for empty functions to explain their purpose.

## Customizing Templates

Themes have various template files with PHP wrapped in HTML. Follow the template hierarchy as documented.

### Changing an Existing Template

Copy the template part to your child theme to prevent overwriting with parent theme updates.

### Adding New Template Files

Create a new template in your child theme by copying the closest PHP file.

## Managing Backwards Compatibility

Be aware of potential issues with backwards compatibility when using templates. Modify functions and CSS carefully for compatibility.

## Custom 404 Page

Use royalty-free images from Unsplash and include them in your template files.

## Finding Existing Functionality

To add, edit, or remove menus, do so in `functions.php`. Locate existing code in the parent theme and make appropriate changes.

## Changing Menu Output with Properties

Restrict functionality for user-friendly themes. Consider user experience when making decisions.

## Conditional Widgetized Area

Use conditional checks like `is_single()`, `is_page()`, or `is_singular()` to manage widgetized areas efficiently.

## Shiny New Web Fonts

Replace fonts with external options by adding links in your child theme. Use `wp_enqueue_style()` and `wp_dequeue_style()` for efficient style management.

## Adding a Screenshot

For theme previews, include a `screenshot.png` in your theme. Exact dimensions matter if many people use your theme.

## Migrating

When ready to deploy, upload the theme package through the WordPress Admin. Zip it up, upload, and reapply any customizations made in the admin customizer.
