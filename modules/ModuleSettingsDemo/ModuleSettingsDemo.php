<?php
/**
 * Module: Module Settings Demo class.
 *
 * @package MEE\Modules\ModuleSettingsDemo
 * @since ??
 */

namespace MEE\Modules\ModuleSettingsDemo;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

use ET\Builder\Framework\DependencyManagement\Interfaces\DependencyInterface;
use ET\Builder\Packages\ModuleLibrary\ModuleRegistration;
use MEE\Modules\ModuleSettingsDemo\ModuleSettingsDemoTrait;

/**
 * Module Settings Demo dependency for field component demonstrations.
 *
 * @since ??
 */
class ModuleSettingsDemo implements DependencyInterface {
	use ModuleSettingsDemoTrait\RenderCallbackTrait;

	/**
	 * Loads Module Settings Demo and registers front-end render callback.
	 *
	 * @since ??
	 */
	public function load() {
		$module_json_folder_path = D5_EXTENSION_EXAMPLE_MODULES_JSON_PATH . 'module-settings-demo/';

		add_action(
			'init',
			function() use ( $module_json_folder_path ) {
				ModuleRegistration::register_module(
					$module_json_folder_path,
					[
						'render_callback' => [ ModuleSettingsDemo::class, 'render_callback' ],
					]
				);
			}
		);
	}
}
