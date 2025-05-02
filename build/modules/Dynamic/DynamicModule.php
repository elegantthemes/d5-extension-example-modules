<?php
/**
 * Module: Dynamic Module class.
 *
 * @package CAWeb\Modules\Dynamic
 * @since ??
 */

namespace CAWeb\Modules\Dynamic;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

use ET\Builder\Framework\DependencyManagement\Interfaces\DependencyInterface;
use ET\Builder\Packages\ModuleLibrary\ModuleRegistration;
use CAWeb\Modules\Dynamic\DynamicModuleTrait;

/**
 * `DynamicModule` is consisted of functions used for Dynamic Module such as Front-End rendering, REST API Endpoints etc.
 *
 * This is a dependency class and can be used as a dependency for `DependencyTree`.
 *
 * @since ??
 */
class DynamicModule implements DependencyInterface {
	use DynamicModuleTrait\RenderCallbackTrait;

	/**
	 * Loads `DynamicModule` and registers Front-End render callback and REST API Endpoints.
	 *
	 * @since ??
	 *
	 * @return void
	 */
	public function load() {
		$module_json_folder_path = CAWEB_DIVI_EXT_MODULES_PATH . 'dynamic-module/';

		add_action(
			'init',
			function() use ( $module_json_folder_path ) {
				ModuleRegistration::register_module(
					$module_json_folder_path,
					[
						'render_callback' => [ DynamicModule::class, 'render_callback' ],
					]
				);
			}
		);
	}
}
