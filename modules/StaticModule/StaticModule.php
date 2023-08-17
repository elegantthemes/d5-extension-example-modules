<?php
/**
 * Module: Static Module class.
 *
 * @package MEE\Modules\StaticModule
 * @since ??
 */

namespace MEE\Modules\StaticModule;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

use ET\Builder\Framework\DependencyManagement\Interfaces\DependencyInterface;
use ET\Builder\Packages\ModuleLibrary\ModuleRegistration;


/**
 * `StaticModule` is consisted of functions used for Static Module such as Front-End rendering, REST API Endpoints etc.
 *
 * This is a dependency class and can be used as a dependency for `DependencyTree`.
 *
 * @since ??
 */
class StaticModule implements DependencyInterface {
	use StaticModuleTrait\RenderCallbackTrait;
	use StaticModuleTrait\ModuleClassnamesTrait;
	use StaticModuleTrait\ModuleStylesTrait;
	use StaticModuleTrait\ModuleScriptDataTrait;

	/**
	 * Loads `StaticModule` and registers Front-End render callback and REST API Endpoints.
	 *
	 * @since ??
	 *
	 * @return void
	 */
	public function load() {
		$module_json_folder_path = D5_EXTENSION_EXAMPLE_MODULES_JSON_PATH . 'static-module/';

		add_action(
			'init',
			function() use ( $module_json_folder_path ) {
				ModuleRegistration::register_module(
					$module_json_folder_path,
					[
						'render_callback' => [ StaticModule::class, 'render_callback' ],
					]
				);
			}
		);
	}
}
