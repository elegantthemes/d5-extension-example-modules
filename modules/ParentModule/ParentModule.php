<?php

namespace MEE\Modules\ParentModule;

use ET\Builder\Framework\DependencyManagement\Interfaces\DependencyInterface;
use ET\Builder\Packages\ModuleLibrary\ModuleRegistration;
use MEE\Modules\ParentModule\ParentModuleTrait;

class ParentModule implements DependencyInterface {
	use ParentModuleTrait\RenderCallbackTrait;

	public function load() {
		$module_json_folder_path = D5_MODULE_EXTENSION_EXAMPLE_PATH . 'parent-module/';

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
