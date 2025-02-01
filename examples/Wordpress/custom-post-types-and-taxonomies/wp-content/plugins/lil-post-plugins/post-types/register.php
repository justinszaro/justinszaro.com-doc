<?php

// Callback Function
function lil_register_business_type() {
    $labels = array(
        // Wrapped in the internationalization function. This helps translations of wordpress understand the variable.
        'name' => __( 'Businesses', LILDOMAIN ),
        'singular_name' => __( 'Business', LILDOMAIN ),
        'featured_image' => __( 'Business Logo', LILDOMAIN ),
        'set_featured_iamge' => __( 'Set Business Logo', LILDOMAIN ),
        'removed_featured_image' => __( 'Remove Logo', LILDOMAIN),
        'use_featured_image' => __( 'Use Logo', LILDOMAIN ),
        'archives' => __( 'Business Archives', LILDOMAIN ),
        'add_new' => __( 'Add New Business', LILDOMAIN ),
        'add_new_item' => __( 'Add New Business', LILDOMAIN ),
    );

    // Sets up settings for the custom post type.
    $args = array(
        'labels' => $labels,
        // Allows for viewing in the Wordpress Admin and the Front-End
        'public' => true,
        'has_archive' => 'businesses',
        'rewrite' => array( 'has_front' => true ),
        'menu_icon' => 'dashicons-building',
        'supports' => array( 'title', 'editor', 'thumbnail' ),
        'show_in_rest' => true, // Exposes the post type to the REST API, allowing the use of the Gutenberg editor.
    )

    register_post_type( 'business', $args );
}