<?php
/**
 * ChildModule nested front-end render snapshot tests.
 *
 * @package D5ExtensionExampleModules\Tests
 */

use ET\Builder\Tests\Config\TestCases\DiviWPUnitTest;

require_once dirname( __DIR__ ) . '/Support/ParentChildModuleTestSupport.php';

/**
 * Class ChildModuleNestedRenderTest.
 */
class ChildModuleNestedRenderTest extends DiviWPUnitTest {

	/**
	 * Snapshot child title used for deterministic nested render output.
	 */
	private const SNAPSHOT_CHILD_TITLE = 'Child Module Snapshot Title';

	/**
	 * Snapshot child content used for deterministic nested render output.
	 */
	private const SNAPSHOT_CHILD_CONTENT = 'Child module snapshot content for nested FE output.';

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
	 * Verifies nested parent/child FE HTML and matches the stored snapshot.
	 *
	 * @return void
	 */
	public function test_render_outputs_nested_child_html_snapshot(): void {
		$parent_attributes = d5_extension_example_modules_load_parent_module_render_fixture();
		$child_attributes  = d5_extension_example_modules_load_child_module_render_fixture();
		$rendered_html     = d5_extension_example_modules_render_parent_module_with_children(
			$parent_attributes,
			[ $child_attributes ]
		);

		$this->assertNotSame( '', trim( $rendered_html ) );
		$this->assertStringContainsString( 'example_parent_module', $rendered_html );
		$this->assertStringContainsString( 'example_child_module', $rendered_html );
		$this->assertStringContainsString( self::SNAPSHOT_CHILD_TITLE, $rendered_html );
		$this->assertStringContainsString( self::SNAPSHOT_CHILD_CONTENT, $rendered_html );
		$this->assertMatchesHtmlSnapshot( $rendered_html );
	}
}
