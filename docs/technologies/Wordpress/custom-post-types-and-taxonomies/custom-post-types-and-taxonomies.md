# Custom Post Types and Taxonomies:

## What are custom post types and taxonomies?

#### What are custom post types?
- There are multiple different post types already defined:
  - Posts
  - Pages
- Native Post Attributes:
  - Organized in Reverse-chronological order
  - Non-Hierarchical
  - Organized based on author, date published, or tags.
- Native Page Attributes
  - Single Pieces of content
  - Can have parent/child relationships
  - No index page - shown in menu
  - No categories or tags
  - Usually Accessed through direct links
- Pages are normally static content, while posts are normally more time-sensitive information. 
- Custom Post Types allow you to create your own custom content types.

#### What are custom taxonomies?
- Taxonomies are schemes of classification
- Taxonomies - A way to organize data, which allows you to relate one item to other similar itesm ina  heiracrhical or non-hierarhicical group. 
- There are two default taxonomies
  - Categories (required)
    - Have a hierarchical structure.
    - Have a parent child relationship.
  - Tags:
    - non-hierarchical
- Custom taxonimies can be hierarchical or non-hierarchical. This can also apply to your regular posts.

#### Where does the code belong for custom post types or taxonomies?
- They used to belong in themes....
  - However, if you choose to change your theme, you will lose the custom functionality. 
- They are now done in a plugin, so you can keep the custom post types or taxonimies or theme switch. A child theme can then be made so that you can create custom styles. 

## Creating Custom Post Types without code:

#### The no-code solutions:
- There are certain plugins that allow you to create custom post types:
  - Custom Post Type UI
  - Pods - Custom Content Types and Fields

... Moving on the the code sections. (UI is self explainitory for those two plugins)

## Coding your Own Custom Post Types:

#### Creating your post types and taxonomies:
- It is a good idea to suffix your folder with post-types.
- The Plugin definition block must be included.
- To ensure a plugin isn't accessed directly:
```
if ( ! defined ( "WPINC" )) {
    die;
}
```
- Common definitions for wordpress plugins:
  - `define( '<slug>_VERSION', '1.0.0' )` - Version of the plugin
  - `define( '<slug>DOMAIN', '<domain>' )` - Normally the name of the plugin folder.
  - `define( '<slug>PATH', plugin_dir_path( __FILE__ ) )` - File Path of the plugin.
  
== See example in parent folder for code implementation ==

- The wordpress codex will give you all the labels that you can customize.
- You must flush the permalinks to display the new post types on the front-end.
  - Archive pages are the base permalink. 
  - You can flush the permalinks in code:
    - `flush_rewrite_rules( $hard );`
    - You want to be careful that you are not calling this function too much!
- Wordpress does support meta-types. 
  - You can include singular post types.
  - Advanced Custom Fields is a great plugin that allows you to create custom fields by yourself. 
- Taxonomies do not have a top level archive page.

## Coding your Own Custom Post Templates:
- Naming custom taxonomy tempalates (words starting with $ can by anything you like):
  - taxonomy-$taxonomy-$term.php
  - taxonomy-$taxonomy.php
- Page templates are normally named:
  - $custom.php
- By default, wordpress will only display the default post type on the main page. 
  - This must be included in the pre_get_posts hook. 
