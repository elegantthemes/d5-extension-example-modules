<?php

namespace MEE\Modules\ChildModule;

use ET\Builder\Framework\DependencyManagement\Interfaces\DependencyInterface;
use ET\Builder\Packages\ModuleLibrary\ModuleRegistration;
use MEE\Modules\ChildModule\ChildModuleTrait;

class ChildModule implements DependencyInterface {
	use ChildModuleTrait\RenderCallbackTrait;

	public function load() {
		$module_json_folder_path = D5_MODULE_EXTENSION_EXAMPLE_JSON_PATH . 'child-module/';

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
