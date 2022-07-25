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
                'divi-visual-builder',
                'divi-data',
                'divi-module',
            ),
            '1.0.0',
            true
        );
        wp_enqueue_style( "d5-module-extension-example-builder-vb-bundle-style", "{$plugin_dir_url}styles/vb-bundle.css", array(), '1.0.0' );
    }
}
add_action( 'et_vb_assets_after_enqueue_package_script', 'd5_module_extension_example_enqueue_vb_scripts' );

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