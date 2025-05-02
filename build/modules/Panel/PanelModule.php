<?php
/**
 * Module: Panel Module class.
 *
 * @package CAWeb\Modules\Panel
 * @since ??
 */

namespace CAWeb\Modules\Panel;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

use ET\Builder\Framework\DependencyManagement\Interfaces\DependencyInterface;
use ET\Builder\Packages\ModuleLibrary\ModuleRegistration;
use CAWeb\Modules\Panel\PanelModuleTrait;

/**
 * `PanelModule` is consisted of functions used for Panel Module such as Front-End rendering, REST API Endpoints etc.
 *
 * This is a dependency class and can be used as a dependency for `DependencyTree`.
 *
 * @since ??
 */
class PanelModule implements DependencyInterface {
	use PanelModuleTrait\RenderCallbackTrait;

	/**
	 * Loads `PanelModule` and registers Front-End render callback and REST API Endpoints.
	 *
	 * @since ??
	 *
	 * @return void
	 */
	public function load() {
		$module_json_folder_path = CAWEB_DIVI_EXT_MODULES_PATH . 'Panel-module/';

		add_action(
			'init',
			function() use ( $module_json_folder_path ) {
				ModuleRegistration::register_module(
					$module_json_folder_path,
					[
						'render_callback' => [ PanelModule::class, 'render_callback' ],
					]
				);
			}
		);
	}
}
