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
	// Debug: Log which hook triggered this function
	$current_hook = current_action();
	error_log( "[Smart Loading] D4 modules loading triggered by hook: {$current_hook}" );
	
	// Safety check: Ensure ET_Builder_Module class is available
	if ( ! class_exists( 'ET_Builder_Module' ) ) {
		error_log( "[Smart Loading] ET_Builder_Module not available yet, fallback to et_builder_ready" );
		// If not available yet, hook into et_builder_ready as fallback
		add_action( 'et_builder_ready', __FUNCTION__ );
		return;
	}
	
	// Remove the hook to prevent infinite loops
	remove_action( 'et_builder_ready', __FUNCTION__ );
	
	error_log( "[Smart Loading] Loading D4 modules now via hook: {$current_hook}" );
	require_once D5_EXTENSION_EXAMPLE_MODULES_PATH . 'divi-4/modules/Divi4Module/Divi4Module.php';
	require_once D5_EXTENSION_EXAMPLE_MODULES_PATH . 'divi-4/modules/Divi4OnlyModule/Divi4OnlyModule.php';
	error_log( "[Smart Loading] D4 modules loaded successfully" );
}

/**
 * Initialize Divi 5 Extension
 * 
 * Called when: divi_visual_builder_assets_before_enqueue_styles hook fires
 * This ensures all Divi D5 framework classes are available before D5 module initialization
 * Following Shohel's recommended pattern from issue #45673
 *
 * @since ??
 */
function d5_extension_example_module_initialize_d5_modules() {
	// D5 modules are loaded via Modules.php which is already required above
	// This function exists for consistency with Shohel's pattern and future extensibility
	// The actual D5 module registration happens via the divi_module_library_modules_dependency_tree action in Modules.php
}

/**
 * Comprehensive Divi 4/5 Module Loading Based on Engine Availability
 * 
 * Based on Shohel's official pattern from issue #45673 and Josh's smart loading approach
 * Combines performance optimization with proper D4/D5 engine detection
 * 
 * Why This Pattern Is Essential:
 * - Detects active Divi engine (D4 vs D5) automatically
 * - Only loads relevant code for detected engine (performance optimization)
 * - Ensures proper timing for Divi class availability (prevents fatal errors)
 * - Provides seamless compatibility across all Divi versions
 * - Future-proofs plugin against Divi updates
 * 
 * Key Implementation:
 * 1. D4 modules use et_builder_ready (confirmed by Shohel)
 * 2. D5 modules use divi_visual_builder_assets_before_enqueue_styles (Shohel's pattern)
 * 3. Smart loading via et_will_load_shortcode_framework (Josh's optimization)
 * 4. Safety checks for class availability (our enhancement)
 */
add_action( 'init', function() {
	// Wait for Divi constants to be defined
	if ( ! defined( 'ET_BUILDER_VERSION' ) ) {
		// Hook later if Divi hasn't loaded yet
		add_action( 'wp_loaded', __FUNCTION__, 5 );
		return;
	}
	
	$is_divi_5 = version_compare( ET_BUILDER_VERSION, '5.0', '>=' );
	error_log( "[Smart Loading] ET_BUILDER_VERSION: " . ET_BUILDER_VERSION . ", is_divi_5: " . ( $is_divi_5 ? 'true' : 'false' ) );
	
	if ( $is_divi_5 ) {
		error_log( "[Smart Loading] Divi 5 detected - setting up smart loading hooks" );
		
		// DIVI 5 ENGINE: Load D4 compatibility when shortcode framework loads (smart loading)
		add_action( 'et_will_load_shortcode_framework', function() {
			error_log( "[Smart Loading] et_will_load_shortcode_framework fired - setting up D4 modules via et_builder_ready" );
			// D4 modules still needed for backward compatibility in D5
			add_action( 'et_builder_ready', 'd5_extension_example_module_initialize_d4_modules' );
		});
		
		// DIVI 5 ENGINE: Load D5 modules when Visual Builder assets are ready (following Shohel's pattern)
		// This ensures all Divi D5 framework classes are loaded before D5 module initialization
		add_action( 'divi_visual_builder_assets_before_enqueue_styles', 'd5_extension_example_module_initialize_d5_modules' );
		error_log( "[Smart Loading] D5 hooks registered: et_will_load_shortcode_framework -> et_builder_ready (smart loading)" );
	} else {
		error_log( "[Smart Loading] Pure Divi 4 detected - using direct et_builder_ready hook" );
		// PURE DIVI 4 ENGINE: Only load D4 modules (no D5 overhead)
		// Shohel confirmed: "D4 module should be register under et_builder_ready"
		add_action( 'et_builder_ready', 'd5_extension_example_module_initialize_d4_modules' );
		error_log( "[Smart Loading] D4 hook registered: et_builder_ready (direct)" );
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
