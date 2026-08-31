<?php
/**
 * Plugin smoke tests for d5-extension-example-modules.
 *
 * @package D5ExtensionExampleModules\Tests
 */

use MEE\Modules\ChildModule\ChildModule;
use MEE\Modules\D4Module\D4Module;
use MEE\Modules\DynamicModule\DynamicModule;
use MEE\Modules\ParentModule\ParentModule;
use MEE\Modules\StaticModule\StaticModule;

/**
 * Class PluginSmokeTest.
 */
class PluginSmokeTest extends WP_UnitTestCase {

	/**
	 * Verifies the plugin main file exists on disk.
	 *
	 * @return void
	 */
	public function test_plugin_main_file_exists(): void {
		$pluginMainFilePath = dirname( __DIR__, 2 ) . '/d5-extension-example-modules.php';

		$this->assertFileExists( $pluginMainFilePath );
	}

	/**
	 * Verifies the plugin path constant is defined after bootstrap.
	 *
	 * @return void
	 */
	public function test_plugin_path_constant_is_defined(): void {
		$this->assertTrue( defined( 'D5_EXTENSION_EXAMPLE_MODULES_PATH' ) );
		$this->assertStringEndsWith( '/', D5_EXTENSION_EXAMPLE_MODULES_PATH );
	}

	/**
	 * Verifies module classes are available through Composer autoloading.
	 *
	 * @return void
	 */
	public function test_static_module_class_is_autoloaded(): void {
		$this->assertTrue( class_exists( StaticModule::class ) );
	}

	/**
	 * Verifies D4Module class is available through Composer autoloading.
	 *
	 * @return void
	 */
	public function test_d4_module_class_is_autoloaded(): void {
		$this->assertTrue( class_exists( D4Module::class ) );
	}

	/**
	 * Verifies DynamicModule class is available through Composer autoloading.
	 *
	 * @return void
	 */
	public function test_dynamic_module_class_is_autoloaded(): void {
		$this->assertTrue( class_exists( DynamicModule::class ) );
	}

	/**
	 * Verifies ParentModule class is available through Composer autoloading.
	 *
	 * @return void
	 */
	public function test_parent_module_class_is_autoloaded(): void {
		$this->assertTrue( class_exists( ParentModule::class ) );
	}

	/**
	 * Verifies ChildModule class is available through Composer autoloading.
	 *
	 * @return void
	 */
	public function test_child_module_class_is_autoloaded(): void {
		$this->assertTrue( class_exists( ChildModule::class ) );
	}
}
