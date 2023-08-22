<?php
/**
 * Module: Parent Module class.
 *
 * @package MEE\Modules\ParentModule
 * @since ??
 */

namespace MEE\Modules\ParentModule;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}


use ET\Builder\Framework\DependencyManagement\Interfaces\DependencyInterface;
use ET\Builder\Packages\ModuleLibrary\ModuleRegistration;

/**
 * `ParentModule` is consisted of functions used for Parent Module such as Front-End rendering, REST API Endpoints etc.
 *
 * This is a dependency class and can be used as a dependency for `DependencyTree`.
 *
 * @since ??
 */
class ParentModule implements DependencyInterface {
	use ParentModuleTrait\RenderCallbackTrait;

	/**
	 * Loads `ParentModule` and registers Front-End render callback and REST API Endpoints.
	 *
	 * @since ??
	 *
	 * @return void
	 */
	public function load() {
		$module_json_folder_path = D5_EXTENSION_EXAMPLE_MODULES_JSON_PATH . 'parent-module/';

		add_action(
			'init',
			function() use ( $module_json_folder_path ) {
				ModuleRegistration::register_module(
					$module_json_folder_path,
					[
						'render_callback' => [ ParentModule::class, 'render_callback' ],
					]
				);
			}
		);
	}
}
