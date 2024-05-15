<?php
/*
Plugin Name: D5 Extension Example: Modules
Plugin URI:
Description: Example modules.
Version:     1.0.0
Author:      Elegant Themes
Author URI:  https://elegantthemes.com
License:     GPL2
License URI: https://www.gnu.org/licenses/gpl-2.0.html
Text Domain: d5-extension-example-modules
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

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

define( 'D5_EXTENSION_EXAMPLE_MODULES_PATH', plugin_dir_path( __FILE__ ) );
define( 'D5_EXTENSION_EXAMPLE_MODULES_JSON_PATH', D5_EXTENSION_EXAMPLE_MODULES_PATH . 'modules-json/' );

/**
 * Requires Autoloader.
 */
require D5_EXTENSION_EXAMPLE_MODULES_PATH . 'vendor/autoload.php';
require D5_EXTENSION_EXAMPLE_MODULES_PATH . 'modules/Modules.php';

/**
 * Register all Divi 4 modules.
 *
 * @since ??
 */
function d5_extension_example_module_initialize_d4_modules() {
	require_once D5_EXTENSION_EXAMPLE_MODULES_PATH . 'divi-4/modules/Divi4Module/Divi4Module.php';
	require_once D5_EXTENSION_EXAMPLE_MODULES_PATH . 'divi-4/modules/Divi4OnlyModule/Divi4OnlyModule.php';
}
add_action( 'et_builder_ready', 'd5_extension_example_module_initialize_d4_modules' );

/**
 * Enqueue style and scripts of Module Extension Example for Visual Builder.
 *
 * @since ??
 */
function d5_extension_example_module_enqueue_vb_scripts() {
	if ( et_builder_d5_enabled() && et_core_is_fb_enabled() ) {
		$plugin_dir_url = plugin_dir_url( __FILE__ );

		wp_enqueue_script(
			'd5-extension-example-modules-builder-bundle-script',
			"{$plugin_dir_url}scripts/bundle.js",
			array(
				'divi-module-library',
				'divi-vendor-wp-hooks',
			),
			'1.0.0',
			true
		);
		wp_enqueue_style( 'd5-extension-example-modules-builder-vb-bundle-style', "{$plugin_dir_url}styles/vb-bundle.css", array(), '1.0.0' );
	}
}
add_action( 'divi_visual_builder_assets_before_enqueue_packages', 'd5_extension_example_module_enqueue_vb_scripts' );

/**
 * Enqueue style and scripts of Module Extension Example
 *
 * @since ??
 */
function d5_extension_example_module_enqueue_frontend_scripts() {
	$plugin_dir_url = plugin_dir_url( __FILE__ );
	wp_enqueue_style( 'd5-extension-example-modules-builder-bundle-style', "{$plugin_dir_url}styles/bundle.css", array(), '1.0.0' );
}
add_action( 'wp_enqueue_scripts', 'd5_extension_example_module_enqueue_frontend_scripts' );
