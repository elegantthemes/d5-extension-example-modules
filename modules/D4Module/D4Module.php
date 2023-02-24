<?php
/**
 * Module: Divi 4 Module class.
 *
 * @package MEE\Modules\D4Module
 * @since ??
 */

namespace MEE\Modules\D4Module;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

use ET\Builder\Framework\DependencyManagement\Interfaces\DependencyInterface;
use ET\Builder\Packages\ModuleLibrary\ModuleRegistration;
use MEE\Modules\D4Module\D4ModuleTrait;

/**
 * `D4Module` is consisted of functions used for Divi 4 Module such as Front-End rendering, REST API Endpoints etc.
 *
 * This is a dependency class and can be used as a dependency for `DependencyTree`.
 *
 * @since ??
 */
class D4Module implements DependencyInterface {
	use D4ModuleTrait\RenderCallbackTrait;

	/**
	 * Loads `D4Module` and registers Front-End render callback and REST API Endpoints.
	 *
	 * @since ??
	 *
	 * @return void
	 */
	public function load() {
		$module_json_folder_path = D5_EXTENSION_EXAMPLE_MODULES_JSON_PATH . 'd4-module/';

		add_action(
			'init',
			function() use ( $module_json_folder_path ) {
				ModuleRegistration::register_module(
					$module_json_folder_path,
					[
						'render_callback' => [ D4Module::class, 'render_callback' ],
					]
				);
			}
		);
	}
}
