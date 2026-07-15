<?php
/**
 * ParentModule registration unit tests.
 *
 * @package D5ExtensionExampleModules\Tests
 */

use ET\Builder\Tests\Config\TestCases\DiviWPUnitTest;
use MEE\Modules\ParentModule\ParentModule;

require_once dirname( __DIR__ ) . '/Support/ParentChildModuleTestSupport.php';

/**
 * Class ParentModuleRegistrationTest.
 */
class ParentModuleRegistrationTest extends DiviWPUnitTest {

	/**
	 * Prepares parent/child module test state before each test method runs.
	 *
	 * @return void
	 */
	public function set_up(): void {
		parent::set_up();

		d5_extension_example_modules_reset_parent_child_module_test_state();
		d5_extension_example_modules_register_parent_child_modules_if_needed();
	}

	/**
	 * Verifies ParentModule is registered as a block type.
	 *
	 * @return void
	 */
	public function test_parent_module_block_is_registered(): void {
		$registered_block_type = \WP_Block_Type_Registry::get_instance()->get_registered( 'example/parent-module' );

		$this->assertNotNull( $registered_block_type );
		$this->assertSame( 'example/parent-module', $registered_block_type->name );
	}

	/**
	 * Verifies ParentModule metadata accepts the child module namespace.
	 *
	 * @return void
	 */
	public function test_parent_module_accepts_child_namespace(): void {
		$parent_module_metadata = d5_extension_example_modules_load_parent_module_metadata();

		$this->assertSame( 'example/child-module', $parent_module_metadata['childModuleName'] );
		$this->assertSame( 'Child Module', $parent_module_metadata['childModuleTitle'] );
		$this->assertContains( 'example/child-module', $parent_module_metadata['childrenName'] );
	}

	/**
	 * Verifies ParentModule exposes a callable render callback.
	 *
	 * @return void
	 */
	public function test_parent_module_render_callback_is_callable(): void {
		$registered_block_type = \WP_Block_Type_Registry::get_instance()->get_registered( 'example/parent-module' );

		$this->assertNotNull( $registered_block_type );
		$this->assertTrue( is_callable( $registered_block_type->render_callback ) );
		$this->assertTrue( is_callable( [ ParentModule::class, 'render_callback' ] ) );
	}
}
