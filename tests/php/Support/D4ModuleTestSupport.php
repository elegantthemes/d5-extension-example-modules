<?php
/**
 * Shared helpers for D4Module PHPUnit tests.
 *
 * @package D5ExtensionExampleModules\Tests
 */

use ET\Builder\FrontEnd\BlockParser\BlockParserBlock;
use ET\Builder\FrontEnd\BlockParser\BlockParserStore;
use ET\Builder\FrontEnd\Module\ScriptData;
use ET\Builder\FrontEnd\Module\Style;
use MEE\Modules\D4Module\D4Module;

/**
 * Resets parser and style state before D4Module tests.
 *
 * @return void
 */
function d5_extension_example_modules_reset_d4_module_test_state(): void {
	Style::reset();
	ScriptData::reset();
	BlockParserBlock::reset_order_index();
	BlockParserStore::reset();
	BlockParserStore::new_instance();
}

/**
 * Registers D4Module when it is not already in the block registry.
 *
 * @return void
 */
function d5_extension_example_modules_register_d4_module_if_needed(): void {
	$registered_block_type = \WP_Block_Type_Registry::get_instance()->get_registered( 'example/d4-module' );

	if ( null !== $registered_block_type ) {
		return;
	}

	( new D4Module() )->load();
	do_action( 'init' );
}

/**
 * Loads D4Module render fixture attributes from JSON.
 *
 * @return array<string, mixed>
 */
function d5_extension_example_modules_load_d4_module_render_fixture(): array {
	$fixture_file_path = dirname( __DIR__ ) . '/fixtures/d4-module-render-attrs.json';
	$fixture_contents  = file_get_contents( $fixture_file_path );

	if ( false === $fixture_contents ) {
		throw new RuntimeException( 'D4Module render fixture file could not be read.' );
	}

	$fixture_attributes = json_decode( $fixture_contents, true );

	if ( ! is_array( $fixture_attributes ) ) {
		throw new RuntimeException( 'D4Module render fixture file contains invalid JSON.' );
	}

	return $fixture_attributes;
}

/**
 * Loads D4Module metadata from modules-json.
 *
 * @return array<string, mixed>
 */
function d5_extension_example_modules_load_d4_module_metadata(): array {
	$metadata_file_path = D5_EXTENSION_EXAMPLE_MODULES_JSON_PATH . 'd4-module/module.json';
	$metadata_contents  = file_get_contents( $metadata_file_path );

	if ( false === $metadata_contents ) {
		throw new RuntimeException( 'D4Module metadata file could not be read.' );
	}

	$metadata = json_decode( $metadata_contents, true );

	if ( ! is_array( $metadata ) ) {
		throw new RuntimeException( 'D4Module metadata file contains invalid JSON.' );
	}

	return $metadata;
}

/**
 * Loads D4Module conversion outline JSON from modules-json.
 *
 * @return array<string, mixed>
 */
function d5_extension_example_modules_load_d4_module_conversion_outline(): array {
	$conversion_outline_file_path = D5_EXTENSION_EXAMPLE_MODULES_JSON_PATH . 'd4-module/conversion-outline.json';
	$conversion_outline_contents  = file_get_contents( $conversion_outline_file_path );

	if ( false === $conversion_outline_contents ) {
		throw new RuntimeException( 'D4Module conversion outline file could not be read.' );
	}

	$conversion_outline = json_decode( $conversion_outline_contents, true );

	if ( ! is_array( $conversion_outline ) ) {
		throw new RuntimeException( 'D4Module conversion outline file contains invalid JSON.' );
	}

	return $conversion_outline;
}

/**
 * Renders D4Module front-end HTML for the given attributes.
 *
 * @param array<string, mixed> $render_attributes Block attributes for render.
 *
 * @return string
 */
function d5_extension_example_modules_render_d4_module( array $render_attributes ): string {
	$registered_block_type = \WP_Block_Type_Registry::get_instance()->get_registered( 'example/d4-module' );

	if ( null === $registered_block_type ) {
		throw new RuntimeException( 'D4Module block type is not registered.' );
	}

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

	return $rendered_html;
}
