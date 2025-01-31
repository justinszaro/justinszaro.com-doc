<?php 
/*
 * Plugin Name:       Business Directory Post Types and Taxonomies
 * Plugin URI:        https://github.com/jcasabona/lil-post-types/
 * Description:       A simple plugin for creating custom post types and taxonomies related to a business directory.
 * Version:           1.0.0
 * Author:            Joe Casabona
 * Author URI:        httpsL//casabona.org
 * License:           GPL-2.0+
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       lil-post-types
 * Domain Path:       /languages
 */

if ( ! defined ( 'WPINC') ) {
    die;
}

define( 'LIL_VERSION', '1.0.0' );
define( 'LILDOMAIN', '' );
define( 'LILPATH', plugin_dir_path( __FILE__ ) );

require_once( LILPATH . '/post-types/register.php' );
// Add the new post type to the init hook
add_action( 'init', 'lil_register_business_type' );

require_once( LILPATH . '/taxonomies/register.php' );
add_action( 'init', 'lil_register_size_taxonomy' );