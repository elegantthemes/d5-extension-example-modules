<?php
/**
 * Plugin Name:     CAWeb Divi Extension Plugin
 * Plugin URI:      
 * Description:     CAWeb Divi Extension 
 * Author:          CAWebPublishing
 * Author URI:      
 * License:     GPL2
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     caweb-divi-extension
 * Domain Path:     /languages
 * Version:         2.0.0
 *
 * @package         CAWebDiviExtension
 */

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

// Setup constants.
define( 'CAWEB_DIVI_EXT_DIR', str_replace( '\\', '/', __DIR__ . '/' ) );
define( 'CAWEB_DIVI_EXT_URL', site_url( preg_replace( '/(.*)\/wp-content/', '/wp-content', CAWEB_DIVI_EXT_DIR ) ) );


// Add actions.
add_action( 'divi_visual_builder_assets_before_enqueue_scripts', 'caweb_divi_visual_builder_assets_before_enqueue_scripts' );

/**
 * Register all Divi 4 modules.
 *
 * @since ??
 */
// function d5_extension_example_module_initialize_d4_modules() {
// 	require_once D5_EXTENSION_EXAMPLE_MODULES_PATH . 'divi-4/modules/Divi4Module/Divi4Module.php';
// 	require_once D5_EXTENSION_EXAMPLE_MODULES_PATH . 'divi-4/modules/Divi4OnlyModule/Divi4OnlyModule.php';
// }
// add_action( 'et_builder_ready', 'd5_extension_example_module_initialize_d4_modules' );

/**
 * Enqueue style and scripts of Module Extension Example for Visual Builder.
 *
 * @since ??
 */
function caweb_divi_visual_builder_assets_before_enqueue_scripts() {
	if ( et_builder_d5_enabled() && et_core_is_fb_enabled() ) {
		$plugin_dir_url = plugin_dir_url( __FILE__ );

		\ET\Builder\VisualBuilder\Assets\PackageBuildManager::register_package_build(
			[
				'name'   => 'd5-extension-example-modules-builder-bundle-script',
				'version' => '1.0.0',
				'script' => [
					'src' => CAWEB_DIVI_EXT_URL . "scripts/bundle.js",
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
					'src' => CAWEB_DIVI_EXT_URL . "styles/vb-bundle.css",
					'deps'               => [],
					'enqueue_top_window' => false,
					'enqueue_app_window' => true,
				],
			]
		);
	}
}

/**
 * Enqueue style and scripts of Module Extension Example
 *
 * @since ??
 */
function d5_extension_example_module_enqueue_frontend_scripts() {
	$plugin_dir_url = plugin_dir_url( __FILE__ );
	wp_enqueue_style( 'd5-extension-example-modules-builder-bundle-style', "{$plugin_dir_url}styles/bundle.css", array(), '1.0.0' );
}
//add_action( 'wp_enqueue_scripts', 'd5_extension_example_module_enqueue_frontend_scripts' );
