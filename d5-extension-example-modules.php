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

/**
 * CORRECTED Smart Loading Solution for Third-Party Divi Modules
 * 
 * Based on feedback from Josh and Shohel in Slack discussion
 * Issue: D4 module settings not accessible in Visual Builder
 * Fix: Use et_builder_ready for D4 modules, ensure VB compatibility
 * 
 * Key Changes from Josh's Original:
 * 1. D4 modules use et_builder_ready (not divi_extensions_init) - confirmed by Shohel
 * 2. In D5 Visual Builder, D4 modules load immediately via et_builder_ready
 * 3. Smart loading still works for frontend rendering
 * 4. All original plugin files preserved (no deletions)
 */
add_action( 'init', function() {
	// Wait for Divi constants to be defined
	if ( ! defined( 'ET_BUILDER_VERSION' ) ) {
		// Hook later if Divi hasn't loaded yet
		add_action( 'wp_loaded', __FUNCTION__, 5 );
		return;
	}
	
	$is_divi_5 = version_compare( ET_BUILDER_VERSION, '5.0', '>=' );
	
	if ( $is_divi_5 ) {
		// CORRECTED APPROACH: Check if Visual Builder is active
		if ( et_core_is_fb_enabled() ) {
			// Visual Builder: Load D4 modules immediately for settings access
			// This fixes the "cannot access D4 module settings" issue
			add_action( 'et_builder_ready', 'd5_extension_example_module_initialize_d4_modules' );
		} else {
			// Frontend: Only load D4 when shortcode framework loads (smart loading)
			add_action( 'et_will_load_shortcode_framework', 'd5_extension_example_module_initialize_d4_modules' );
		}
		
		// D5: D5 modules load automatically via Modules.php (no changes needed)
	} else {
		// Divi 4: Load D4 extension normally with et_builder_ready (CORRECTED)
		// Shohel confirmed: "D4 module should be register under et_builder_ready"
		add_action( 'et_builder_ready', 'd5_extension_example_module_initialize_d4_modules' );
	}
}, 10 );

/**
 * Enqueue style and scripts of Module Extension Example for Visual Builder.
 *
 * @since ??
 */
function d5_extension_example_module_enqueue_vb_scripts() {
	if ( et_builder_d5_enabled() && et_core_is_fb_enabled() ) {
		$plugin_dir_url = plugin_dir_url( __FILE__ );

		\ET\Builder\VisualBuilder\Assets\PackageBuildManager::register_package_build(
			[
				'name'   => 'd5-extension-example-modules-builder-bundle-script',
				'version' => '1.0.0',
				'script' => [
					'src' => "{$plugin_dir_url}scripts/bundle.js",
					'deps'               => [
						'divi-module-library',
						'divi-vendor-wp-hooks',
					],
					'enqueue_top_window' => false,
					'enqueue_app_window' => true,
				],
			]
		);

		\ET\Builder\VisualBuilder\Assets\PackageBuildManager::register_package_build(
			[
				'name'   => 'd5-extension-example-modules-builder-vb-bundle-style',
				'version' => '1.0.0',
				'style' => [
					'src' => "{$plugin_dir_url}styles/vb-bundle.css",
					'deps'               => [],
					'enqueue_top_window' => false,
					'enqueue_app_window' => true,
				],
			]
		);
	}
}
add_action( 'divi_visual_builder_assets_before_enqueue_scripts', 'd5_extension_example_module_enqueue_vb_scripts' );

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
