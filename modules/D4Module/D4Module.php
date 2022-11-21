<?php

namespace MEE\Modules\D4Module;

use ET\Builder\Framework\DependencyManagement\Interfaces\DependencyInterface;
use ET\Builder\Packages\ModuleLibrary\ModuleRegistration;
use MEE\Modules\D4Module\D4ModuleTrait;

class D4Module implements DependencyInterface {
	use D4ModuleTrait\RenderCallbackTrait;

	public function load() {
		$module_json_folder_path = D5_MODULE_EXTENSION_EXAMPLE_PATH . 'src/components/d4-module/';

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
