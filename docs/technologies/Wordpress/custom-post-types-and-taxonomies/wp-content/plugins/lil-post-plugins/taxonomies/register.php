<?php

function lil_register_size_taxonomy() {
    $labels = array(
        'name' => __( 'Sizes', LILDOMAIN ),
        'singular_name' => __( 'Size', LILDOMAIN ),
        'add_new_item' => __( 'Add New Size', LILDOMAIN ),
    );

    $args = array(
        'labels' => $labels,
        'public' => true,
        'show_admin_column' => true,
        'show_in_quick_edit' => true,
        'show_in_rest' => true,
    );

    $post_types = array(
        'business',
    )

    register_taxonomy( 'size', $post_types, $args );
}