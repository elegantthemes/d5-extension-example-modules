<?php

namespace MEE\Modules\DynamicModule;

use ET\Builder\Framework\DependencyManagement\Interfaces\DependencyInterface;
use ET\Builder\Packages\ModuleLibrary\ModuleRegistration;
use MEE\Modules\DynamicModule\DynamicModuleTrait;

class DynamicModule implements DependencyInterface {
	use DynamicModuleTrait\RenderCallbackTrait;

	public function load() {
		$module_json_folder_path = D5_MODULE_EXTENSION_EXAMPLE_PATH . 'dynamic-module/';

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
