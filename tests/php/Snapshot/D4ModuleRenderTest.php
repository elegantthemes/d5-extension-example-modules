<?php
/**
 * D4Module front-end render snapshot tests.
 *
 * @package D5ExtensionExampleModules\Tests
 */

use ET\Builder\Tests\Config\TestCases\DiviWPUnitTest;

require_once dirname( __DIR__ ) . '/Support/D4ModuleTestSupport.php';

/**
 * Class D4ModuleRenderTest.
 */
class D4ModuleRenderTest extends DiviWPUnitTest {

	/**
	 * Snapshot title used for deterministic render output.
	 */
	private const SNAPSHOT_TITLE = 'D4 Module Snapshot Title';

	/**
	 * Snapshot content used for deterministic render output.
	 */
	private const SNAPSHOT_CONTENT = 'D4 module snapshot content for FE heading output.';

	/**
	 * Prepares D4Module render state before each test method runs.
	 *
	 * @return void
	 */
	public function set_up(): void {
		parent::set_up();

		d5_extension_example_modules_reset_d4_module_test_state();
		d5_extension_example_modules_register_d4_module_if_needed();
	}

	/**
	 * Verifies title renders as a heading and matches the stored snapshot.
	 *
	 * @return void
	 */
	public function test_render_outputs_heading_html_snapshot(): void {
		$render_attributes = d5_extension_example_modules_load_d4_module_render_fixture();
		$rendered_html     = d5_extension_example_modules_render_d4_module( $render_attributes );
		$normalized_html   = $this->normalize_d4_module_snapshot_html( $rendered_html );

		$this->assertNotSame( '', trim( $rendered_html ) );
		$this->assertStringContainsString( self::SNAPSHOT_TITLE, $rendered_html );
		$this->assertStringContainsString( self::SNAPSHOT_CONTENT, $rendered_html );
		$this->assertStringContainsString( '<h2', $rendered_html );
		$this->assertStringContainsString( 'example_d4_module_title', $rendered_html );
		$this->assertStringNotContainsString(
			'<div class="example_d4_module_title">' . self::SNAPSHOT_TITLE . '</div>',
			$rendered_html
		);
		$this->assertMatchesHtmlSnapshot( $normalized_html );
	}

	/**
	 * Normalizes environment-specific values for snapshot comparison.
	 *
	 * @param string $rendered_html Raw rendered HTML.
	 *
	 * @return string
	 */
	private function normalize_d4_module_snapshot_html( string $rendered_html ): string {
		return preg_replace(
			'/\set_flex_module(?="|\s)/',
			'',
			$rendered_html
		) ?? $rendered_html;
	}
}
