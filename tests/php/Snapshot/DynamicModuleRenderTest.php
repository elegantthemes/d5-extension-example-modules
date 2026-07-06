<?php
/**
 * DynamicModule front-end render snapshot tests.
 *
 * @package D5ExtensionExampleModules\Tests
 */

use ET\Builder\Tests\Config\TestCases\DiviWPUnitTest;

require_once dirname( __DIR__ ) . '/Support/DynamicModuleTestSupport.php';

/**
 * Class DynamicModuleRenderTest.
 */
class DynamicModuleRenderTest extends DiviWPUnitTest {

	/**
	 * Snapshot post title used for deterministic render output.
	 */
	private const SNAPSHOT_POST_TITLE = 'Dynamic Module Snapshot Post';

	/**
	 * Snapshot post excerpt used for deterministic render output.
	 */
	private const SNAPSHOT_POST_EXCERPT = 'Snapshot excerpt for dynamic module testing.';

	/**
	 * Prepares DynamicModule render state before each test method runs.
	 *
	 * @return void
	 */
	public function set_up(): void {
		parent::set_up();

		d5_extension_example_modules_reset_dynamic_module_test_state();
		d5_extension_example_modules_register_dynamic_module_if_needed();
	}

	/**
	 * Verifies rendered HTML includes resolved post data and matches snapshot.
	 *
	 * @return void
	 */
	public function test_render_outputs_resolved_post_html_snapshot(): void {
		self::factory()->post->create(
			[
				'post_title'   => self::SNAPSHOT_POST_TITLE,
				'post_content' => 'Dynamic module snapshot post content.',
				'post_excerpt' => self::SNAPSHOT_POST_EXCERPT,
				'post_status'  => 'publish',
			]
		);

		$render_attributes = d5_extension_example_modules_load_dynamic_module_render_fixture();
		$rendered_html     = d5_extension_example_modules_render_dynamic_module( $render_attributes );
		$normalized_html   = $this->normalize_dynamic_module_snapshot_html( $rendered_html );

		$this->assertNotSame( '', trim( $rendered_html ) );
		$this->assertStringContainsString( self::SNAPSHOT_POST_TITLE, $rendered_html );
		$this->assertStringContainsString( self::SNAPSHOT_POST_EXCERPT, $rendered_html );
		$this->assertStringContainsString( 'Dynamic Module Snapshot Title', $rendered_html );
		$this->assertMatchesHtmlSnapshot( $normalized_html );
	}

	/**
	 * Normalizes environment-specific values for snapshot comparison.
	 *
	 * @param string $rendered_html Raw rendered HTML.
	 *
	 * @return string
	 */
	private function normalize_dynamic_module_snapshot_html( string $rendered_html ): string {
		$normalized_html = preg_replace(
			'#href="[^"]+\?p=\d+"#',
			'href="http://example.test/?p=POST_ID"',
			$rendered_html
		) ?? $rendered_html;

		// Newer Divi builds add flex wrapper classes that vary by environment version.
		return preg_replace(
			'/\set_flex_module(?="|\s)/',
			'',
			$normalized_html
		) ?? $normalized_html;
	}
}
