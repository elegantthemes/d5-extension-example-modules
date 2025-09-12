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
 * Initialize Divi 4 compatibility extension
 * 
 * In Divi 5: Only called when et_will_load_shortcode_framework fires
 * In Divi 4: Called via et_builder_ready as normal
 *
 * @since ??
 */
function d5_extension_example_module_initialize_d4_modules() {
	// Debug: Log when this function is called
	error_log( '[Smart Loading] d5_extension_example_module_initialize_d4_modules called' );
	
	// Safety check: Ensure ET_Builder_Module class is available
	if ( ! class_exists( 'ET_Builder_Module' ) ) {
		error_log( '[Smart Loading] ET_Builder_Module not available yet, hooking to et_builder_ready' );
		// If not available yet, hook into et_builder_ready as fallback
		add_action( 'et_builder_ready', __FUNCTION__ );
		return;
	}
	
	error_log( '[Smart Loading] ET_Builder_Module available, loading D4 modules' );
	
	// Smart loading test: Only load Divi4OnlyModule (pure D4 module)
	// require_once D5_EXTENSION_EXAMPLE_MODULES_PATH . 'divi-4/modules/Divi4Module/Divi4Module.php';
	require_once D5_EXTENSION_EXAMPLE_MODULES_PATH . 'divi-4/modules/Divi4OnlyModule/Divi4OnlyModule.php';
	
	error_log( '[Smart Loading] D4 modules loaded successfully' );
}

/**
 * Initialize Divi 5 extension
 * 
 * Called immediately in Divi 5 environments
 * Not called in Divi 4 environments
 *
 * @since ??
 */
function d5_extension_example_module_initialize_d5_modules() {
	// D5 modules are loaded via Modules.php which is already required above
	// This function exists for consistency with Josh's pattern but D5 loading
	// is handled by the divi_module_library_modules_dependency_tree action in Modules.php
}

/**
 * Josh's Smart Loading Solution for Third-Party Divi Modules
 * 
 * Main plugin initialization - supports both Divi 4 and Divi 5
 */
add_action( 'init', function() {
	// Wait for Divi constants to be defined
	if ( ! defined( 'ET_BUILDER_VERSION' ) ) {
		error_log( '[Smart Loading] ET_BUILDER_VERSION not defined yet, hooking to wp_loaded' );
		// Hook later if Divi hasn't loaded yet
		add_action( 'wp_loaded', __FUNCTION__, 5 );
		return;
	}
	
	$is_divi_5 = version_compare( ET_BUILDER_VERSION, '5.0', '>=' );
	error_log( '[Smart Loading] ET_BUILDER_VERSION: ' . ET_BUILDER_VERSION . ', is_divi_5: ' . ( $is_divi_5 ? 'true' : 'false' ) );
	
	if ( $is_divi_5 ) {
		error_log( '[Smart Loading] Divi 5 detected - setting up smart loading' );
		// Divi 5: Load D4 compatibility only when needed (smart loading)
		add_action( 'et_will_load_shortcode_framework', 'd5_extension_example_module_initialize_d4_modules' );
		
		// VB-specific: If in Visual Builder, also hook to et_builder_ready for immediate availability
		if ( et_core_is_fb_enabled() ) {
			error_log( '[Smart Loading] Visual Builder detected - adding et_builder_ready hook for immediate D4 availability' );
			add_action( 'et_builder_ready', 'd5_extension_example_module_initialize_d4_modules' );
		}
		
		// D5: D5 modules load immediately via Modules.php
		d5_extension_example_module_initialize_d5_modules();
	} else {
		error_log( '[Smart Loading] Divi 4 detected - using traditional loading' );
		// Divi 4: Load D4 extension normally
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
