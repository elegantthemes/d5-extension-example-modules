<?php

namespace MEE\Modules\StaticModule;

use ET\Builder\Framework\DependencyManagement\Interfaces\DependencyInterface;
use ET\Builder\Packages\ModuleLibrary\ModuleRegistration;
use MEE\Modules\StaticModule\StaticModuleTrait;

class StaticModule implements DependencyInterface {
	use StaticModuleTrait\RenderCallbackTrait;

	public function load() {
		$module_json_folder_path = D5_MODULE_EXTENSION_EXAMPLE_PATH . 'src/components/static-module/';

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
