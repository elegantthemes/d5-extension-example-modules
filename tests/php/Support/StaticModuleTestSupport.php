<?php
/**
 * Shared helpers for StaticModule PHPUnit tests.
 *
 * @package D5ExtensionExampleModules\Tests
 */

use ET\Builder\FrontEnd\BlockParser\BlockParserBlock;
use ET\Builder\FrontEnd\BlockParser\BlockParserStore;
use ET\Builder\FrontEnd\Module\ScriptData;
use ET\Builder\FrontEnd\Module\Style;
use MEE\Modules\StaticModule\StaticModule;

/**
 * Resets parser and style state before StaticModule tests.
 *
 * @return void
 */
function d5_extension_example_modules_reset_static_module_test_state(): void {
	Style::reset();
	ScriptData::reset();
	BlockParserBlock::reset_order_index();
	BlockParserStore::reset();
	BlockParserStore::new_instance();
}

/**
 * Registers StaticModule when it is not already in the block registry.
 *
 * @return void
 */
function d5_extension_example_modules_register_static_module_if_needed(): void {
	$registered_block_type = \WP_Block_Type_Registry::get_instance()->get_registered( 'example/static-module' );

	if ( null !== $registered_block_type ) {
		return;
	}

	( new StaticModule() )->load();
	do_action( 'init' );
}

/**
 * Loads StaticModule render fixture attributes from JSON.
 *
 * @return array<string, mixed>
 */
function d5_extension_example_modules_load_static_module_render_fixture(): array {
	$fixture_file_path = dirname( __DIR__ ) . '/fixtures/static-module-render-attrs.json';
	$fixture_contents  = file_get_contents( $fixture_file_path );

	if ( false === $fixture_contents ) {
		throw new RuntimeException( 'StaticModule render fixture file could not be read.' );
	}

	$fixture_attributes = json_decode( $fixture_contents, true );

	if ( ! is_array( $fixture_attributes ) ) {
		throw new RuntimeException( 'StaticModule render fixture file contains invalid JSON.' );
	}

	return $fixture_attributes;
}
