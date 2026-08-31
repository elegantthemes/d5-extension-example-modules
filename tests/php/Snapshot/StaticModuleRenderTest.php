<?php
/**
 * StaticModule front-end render snapshot tests.
 *
 * @package D5ExtensionExampleModules\Tests
 */

use ET\Builder\FrontEnd\BlockParser\BlockParserBlock;
use ET\Builder\FrontEnd\BlockParser\BlockParserStore;
use ET\Builder\FrontEnd\Module\Style;
use ET\Builder\Tests\Config\TestCases\DiviWPUnitTest;

require_once dirname( __DIR__ ) . '/Support/StaticModuleTestSupport.php';

/**
 * Class StaticModuleRenderTest.
 */
class StaticModuleRenderTest extends DiviWPUnitTest {

	/**
	 * Prepares StaticModule render state before each test method runs.
	 *
	 * @return void
	 */
	public function set_up(): void {
		parent::set_up();

		d5_extension_example_modules_reset_static_module_test_state();
		d5_extension_example_modules_register_static_module_if_needed();
	}

	/**
	 * Verifies summary HTML renders and matches the stored snapshot.
	 *
	 * @return void
	 */
	public function test_render_outputs_summary_html_snapshot(): void {
		$render_attributes     = d5_extension_example_modules_load_static_module_render_fixture();
		$registered_block_type = \WP_Block_Type_Registry::get_instance()->get_registered( 'example/static-module' );

		$this->assertNotNull( $registered_block_type );

		$prepared_attributes = $registered_block_type->prepare_attributes_for_render( $render_attributes );

		$parsed_block = new BlockParserBlock(
			$registered_block_type->name,
			$prepared_attributes,
			[],
			'',
			[],
			0
		);

		$block = new \WP_Block(
			(array) BlockParserStore::add( $parsed_block )
		);

		$rendered_html = $block->render();

		ob_start();
		Style::enqueue();
		$rendered_html .= ob_get_clean();

		$this->assertNotSame( '', trim( $rendered_html ) );
		$this->assertStringContainsString( 'Static module summary text for snapshot testing.', $rendered_html );
		$this->assertStringNotContainsString( '&lt;p&gt;Static module summary text for snapshot testing.&lt;/p&gt;', $rendered_html );
		$this->assertMatchesHtmlSnapshot( $rendered_html );
	}
}
