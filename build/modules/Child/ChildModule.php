<?php
/**
 * Module: Child Module class.
 *
 * @package CAWeb\Modules\Child
 * @since ??
 */

namespace CAWeb\Modules\Child;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

use ET\Builder\Framework\DependencyManagement\Interfaces\DependencyInterface;
use ET\Builder\Packages\ModuleLibrary\ModuleRegistration;

/**
 * `ChildModule` is consisted of functions used for Child Module such as Front-End rendering, REST API Endpoints etc.
 *
 * This is a dependency class and can be used as a dependency for `DependencyTree`.
 *
 * @since ??
 */
class ChildModule implements DependencyInterface {
	use ChildModuleTrait\RenderCallbackTrait;

	/**
	 * Loads `ChildModule` and registers Front-End render callback and REST API Endpoints.
	 *
	 * @since ??
	 *
	 * @return void
	 */
	public function load() {
		$module_json_folder_path = CAWEB_DIVI_EXT_MODULES_PATH . 'child-module/';

		add_action(
			'init',
			function() use ( $module_json_folder_path ) {
				ModuleRegistration::register_module(
					$module_json_folder_path,
					[
						'render_callback' => [ ChildModule::class, 'render_callback' ],
					]
				);
			}
		);
	}
}
