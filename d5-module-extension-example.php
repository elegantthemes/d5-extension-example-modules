<?php
/*
Plugin Name: D5 Module Extension Example
Plugin URI:
Description: Example modules.
Version:     1.0.0
Author:      Elegant Themes
Author URI:  https://elegantthemes.com
License:     GPL2
License URI: https://www.gnu.org/licenses/gpl-2.0.html
Text Domain: d5-module-extension-example
Domain Path: /languages

D5 Module Extension Example is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 2 of the License, or
any later version.

D5 Module Extension Example is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with D5 Module Extension Example. If not, see https://www.gnu.org/licenses/gpl-2.0.html.
*/

/**
 * Register all Divi 4 modules.
 *
 * @since ??
 */
function d5_module_extension_example_initialize_d4_modules() {
    require_once plugin_dir_path( __FILE__ ) . 'divi-4/modules/Divi4Module/Divi4Module.php';
    require_once plugin_dir_path( __FILE__ ) . 'divi-4/modules/Divi4OnlyModule/Divi4OnlyModule.php';
}
add_action( 'et_builder_ready', 'd5_module_extension_example_initialize_d4_modules' );

/**
 * Enqueue style and scripts of Module Extension Example for Visual Builder.
 *
 * @since ??
 */
function d5_module_extension_example_enqueue_vb_scripts() {
    if ( et_builder_d5_enabled() && et_core_is_fb_enabled() ) {
        $plugin_dir_url = plugin_dir_url( __FILE__ );

        wp_enqueue_script(
            "d5-module-extension-example-builder-bundle-script",
            "{$plugin_dir_url}scripts/bundle.js",
            array(
                'divi-module-library',
                'wp-hooks',
            ),
            '1.0.0',
            true
        );
        wp_enqueue_style( "d5-module-extension-example-builder-vb-bundle-style", "{$plugin_dir_url}styles/vb-bundle.css", array(), '1.0.0' );
    }
}
add_action( 'et_vb_assets_before_enqueue_packages', 'd5_module_extension_example_enqueue_vb_scripts' );

/**
 * Enqueue style and scripts of Module Extension Example
 *
 * @since ??
 */
function d5_module_extension_example_enqueue_frontend_scripts() {
    $plugin_dir_url = plugin_dir_url( __FILE__ );
    wp_enqueue_style( "d5-module-extension-example-builder-bundle-style", "{$plugin_dir_url}styles/bundle.css", array(), '1.0.0' );
}
add_action( 'wp_enqueue_scripts', 'd5_module_extension_example_enqueue_frontend_scripts' );

function d5_module_extension_example_dynamic_render_callback( $block_attributes ) {
    $number_of_posts = isset( $block_attributes['numberOfPosts']['desktop']['value'] ) ? $block_attributes['numberOfPosts']['desktop']['value'] : 3;
    $title = isset( $block_attributes['title']['desktop']['value'] ) ? $block_attributes['title']['desktop']['value'] : '';
    $title_tag = isset( $block_attributes['titleFont']['font']['desktop']['value']['headingLevel'] ) ? $block_attributes['titleFont']['font']['desktop']['value']['headingLevel'] : 'h2';
    $post_title_tag = isset( $block_attributes['postTitleFont']['font']['desktop']['value']['headingLevel'] ) ? $block_attributes['postTitleFont']['font']['desktop']['value']['headingLevel'] : 'h3';

    $posts = get_posts( [
        'posts_per_page' => $number_of_posts,
    ] );

    $posts_output = '';

    if ( ! empty( $posts ) ) {
        foreach( $posts as $post_item ) {
            $posts_output .= sprintf(
                '<div className="et_pb_dynamic_module_post_item">
                    <%1$s className="et_pb_dynamic_module_post_item_title"><a href="%2$s">%3$s</a></%1$s>
                    <div>%4$s</div>
                </div>',
                $post_title_tag,
                get_permalink( $post_item ),
                get_the_title( $post_item ),
                get_the_excerpt( $post_item ),
            );
        }
    } else {
        $posts_output .= sprintf(
            '<div className="et_pb_dynamic_module_post_item">%1$s</div>',
            __('No post found.', 'd5-module-extension-example'),
        );
    }

    $module_title = ! empty($title) ? sprintf( '<%1$s class="et_pb_dynamic_module_title">%2$s</%1$s>', $title_tag, $title ) : '';

    $default_classes = [ 'et_pb_module', 'et_pb_bg_layout_light', 'clearfix' ];

    $output = sprintf(
        '<div class="%1$s">
            %2$s
            <div class="et_pb_dynamic_module_post_item">%3$s</div>
		</div>',
        esc_attr( join( ' ', $default_classes ) ),
        $module_title,
        $posts_output,
    );

    return $output;
}

function d5_module_extension_example_register_modules() {
    if ( class_exists( 'ET\Builder\ModuleLibrary\ModuleRegistration' ) ) {
        ET\Builder\ModuleLibrary\ModuleRegistration::register_module(
            __DIR__ . '/src/components/dynamic-module/' ,
            [
                'render_callback' => 'd5_module_extension_example_dynamic_render_callback',
            ]
        );
    }
}
add_action( 'init', 'd5_module_extension_example_register_modules' );
