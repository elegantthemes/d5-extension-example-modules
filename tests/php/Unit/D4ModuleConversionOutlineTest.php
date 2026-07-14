<?php
/**
 * D4Module conversion outline and shortcode registration unit tests.
 *
 * @package D5ExtensionExampleModules\Tests
 */

use ET\Builder\Tests\Config\TestCases\DiviWPUnitTest;

require_once dirname( __DIR__ ) . '/Support/D4ModuleTestSupport.php';

/**
 * Class D4ModuleConversionOutlineTest.
 */
class D4ModuleConversionOutlineTest extends DiviWPUnitTest {

	/**
	 * Prepares D4Module test state before each test method runs.
	 *
	 * @return void
	 */
	public function set_up(): void {
		parent::set_up();

		d5_extension_example_modules_reset_d4_module_test_state();
		d5_extension_example_modules_register_d4_module_if_needed();
	}

	/**
	 * Verifies the built conversion outline JSON is valid and maps key attrs.
	 *
	 * @return void
	 */
	public function test_conversion_outline_json_is_valid_and_maps_key_attrs(): void {
		$conversion_outline = d5_extension_example_modules_load_d4_module_conversion_outline();

		$this->assertArrayHasKey( 'advanced', $conversion_outline );
		$this->assertArrayHasKey( 'css', $conversion_outline );
		$this->assertArrayHasKey( 'module', $conversion_outline );

		$this->assertSame( 'title.innerContent.*', $conversion_outline['module']['title'] );
		$this->assertSame( 'content.innerContent.*', $conversion_outline['module']['content'] );
		$this->assertSame(
			'title.decoration.font.font.*.headingLevel',
			$conversion_outline['module']['header_level']
		);
		$this->assertSame( 'title.decoration.font', $conversion_outline['advanced']['fonts']['header'] );
	}

	/**
	 * Verifies the D4 shortcode registration path is wired for the module.
	 *
	 * @return void
	 */
	public function test_d4_shortcode_registration_path_is_wired(): void {
		$d4_module_metadata = d5_extension_example_modules_load_d4_module_metadata();

		$this->assertSame( 'd4_module', $d4_module_metadata['d4Shortcode'] );

		$divi4_module_file_path = D5_EXTENSION_EXAMPLE_MODULES_PATH . 'divi-4/modules/Divi4Module/Divi4Module.php';

		$this->assertFileExists( $divi4_module_file_path );

		$divi4_module_file_contents = file_get_contents( $divi4_module_file_path );

		$this->assertNotFalse( $divi4_module_file_contents );
		$this->assertStringContainsString( "public \$slug = 'd4_module';", $divi4_module_file_contents );

		$this->assertNotFalse(
			has_action( 'et_builder_ready', 'd5_extension_example_module_initialize_d4_modules' )
		);
	}
}
