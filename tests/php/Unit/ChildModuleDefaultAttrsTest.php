<?php
/**
 * ChildModule default attribute inheritance unit tests.
 *
 * @package D5ExtensionExampleModules\Tests
 */

use ET\Builder\Packages\ModuleLibrary\ModuleRegistration;
use ET\Builder\Tests\Config\TestCases\DiviWPUnitTest;

require_once dirname( __DIR__ ) . '/Support/ParentChildModuleTestSupport.php';

/**
 * Class ChildModuleDefaultAttrsTest.
 */
class ChildModuleDefaultAttrsTest extends DiviWPUnitTest {

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
	 * Verifies ChildModule inherits parent icon defaults when child attrs omit icon.
	 *
	 * @return void
	 */
	public function test_child_module_inherits_parent_default_icon_attrs(): void {
		$parent_default_attributes = ModuleRegistration::get_default_attrs( 'example/parent-module' );

		$this->assertSame(
			'&#x39;',
			$parent_default_attributes['icon']['innerContent']['desktop']['value']['unicode'] ?? null
		);

		$parent_attributes = d5_extension_example_modules_load_parent_module_render_fixture();
		$child_attributes  = d5_extension_example_modules_load_child_module_render_fixture();

		$this->assertArrayNotHasKey( 'icon', $child_attributes );

		$rendered_html = d5_extension_example_modules_render_child_module_with_parent( $parent_attributes, $child_attributes );

		$this->assertStringContainsString( 'example_child_module__icon', $rendered_html );
		$this->assertStringContainsString( 'et-pb-icon', $rendered_html );
		$this->assertStringContainsString( 'Child Module Snapshot Title', $rendered_html );
	}
}
