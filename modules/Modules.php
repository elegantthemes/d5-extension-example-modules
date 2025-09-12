<?php
/**
 * Register all modules with dependency tree.
 *
 * @package MEE\Modules
 * @since ??
 */

namespace MEE\Modules;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

use MEE\Modules\StaticModule\StaticModule;
// Removed unused modules for smart loading test:
// use MEE\Modules\D4Module\D4Module;
// use MEE\Modules\ChildModule\ChildModule;
// use MEE\Modules\ParentModule\ParentModule;
// use MEE\Modules\DynamicModule\DynamicModule;

add_action(
	'divi_module_library_modules_dependency_tree',
	function ( $dependency_tree ) {
		// Smart loading test: Only register StaticModule (D5)
		$dependency_tree->add_dependency( new StaticModule() );
		
		// Removed for minimal test environment:
		// $dependency_tree->add_dependency( new ParentModule() );
		// $dependency_tree->add_dependency( new ChildModule() );
		// $dependency_tree->add_dependency( new D4Module() );
		// $dependency_tree->add_dependency( new DynamicModule() );
	}
);
