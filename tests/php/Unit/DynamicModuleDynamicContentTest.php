<?php
/**
 * DynamicModule dynamic content unit tests.
 *
 * @package D5ExtensionExampleModules\Tests
 */

use ET\Builder\Packages\Module\Layout\Components\DynamicData\DynamicData;
use ET\Builder\Tests\Config\TestCases\DiviWPUnitTest;

require_once dirname( __DIR__ ) . '/Support/DynamicModuleTestSupport.php';

/**
 * Class DynamicModuleDynamicContentTest.
 */
class DynamicModuleDynamicContentTest extends DiviWPUnitTest {

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
	 * Verifies a dynamic content token resolves and appears in rendered HTML.
	 *
	 * @return void
	 */
	public function test_dynamic_content_token_resolves_in_render_context(): void {
		$render_attributes = d5_extension_example_modules_load_dynamic_module_render_fixture();

		$dynamic_title_token = sprintf(
			'$variable(%s)$',
			wp_json_encode(
				[
					'type'  => 'content',
					'value' => [
						'name' => 'site_title',
					],
				]
			)
		);

		$resolved_site_title = DynamicData::get_processed_dynamic_data( $dynamic_title_token );

		$this->assertStringContainsString( get_bloginfo( 'name' ), $resolved_site_title );

		$render_attributes['title']['innerContent']['desktop']['value'] = $resolved_site_title;

		$rendered_html = d5_extension_example_modules_render_dynamic_module( $render_attributes );

		$this->assertStringContainsString( get_bloginfo( 'name' ), $rendered_html );
		$this->assertStringNotContainsString( '$variable(', $rendered_html );
	}
}
