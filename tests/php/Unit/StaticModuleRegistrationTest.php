<?php
/**
 * StaticModule registration unit tests.
 *
 * @package D5ExtensionExampleModules\Tests
 */

use ET\Builder\Tests\Config\TestCases\DiviWPUnitTest;
use MEE\Modules\StaticModule\StaticModule;

require_once dirname( __DIR__ ) . '/Support/StaticModuleTestSupport.php';

/**
 * Class StaticModuleRegistrationTest.
 */
class StaticModuleRegistrationTest extends DiviWPUnitTest {

	/**
	 * Prepares StaticModule test state before each test method runs.
	 *
	 * @return void
	 */
	public function set_up(): void {
		parent::set_up();

		d5_extension_example_modules_reset_static_module_test_state();
		d5_extension_example_modules_register_static_module_if_needed();
	}

	/**
	 * Verifies StaticModule is registered as a block type.
	 *
	 * @return void
	 */
	public function test_static_module_block_is_registered(): void {
		$registered_block_type = \WP_Block_Type_Registry::get_instance()->get_registered( 'example/static-module' );

		$this->assertNotNull( $registered_block_type );
		$this->assertSame( 'example/static-module', $registered_block_type->name );
	}

	/**
	 * Verifies StaticModule exposes a callable render callback.
	 *
	 * @return void
	 */
	public function test_static_module_render_callback_is_callable(): void {
		$registered_block_type = \WP_Block_Type_Registry::get_instance()->get_registered( 'example/static-module' );

		$this->assertNotNull( $registered_block_type );
		$this->assertTrue( is_callable( $registered_block_type->render_callback ) );
		$this->assertTrue( is_callable( [ StaticModule::class, 'render_callback' ] ) );
	}

	/**
	 * Verifies frontend asset enqueue hook is registered without PHP warnings.
	 *
	 * @return void
	 */
	public function test_static_module_frontend_assets_hook_is_registered(): void {
		$this->assertNotFalse(
			has_action( 'wp_enqueue_scripts', 'd5_extension_example_module_enqueue_frontend_scripts' )
		);
	}

	/**
	 * Verifies Visual Builder asset enqueue hook is registered without PHP warnings.
	 *
	 * @return void
	 */
	public function test_static_module_visual_builder_assets_hook_is_registered(): void {
		$this->assertNotFalse(
			has_action( 'divi_visual_builder_assets_before_enqueue_scripts', 'd5_extension_example_module_enqueue_vb_scripts' )
		);
	}
}
