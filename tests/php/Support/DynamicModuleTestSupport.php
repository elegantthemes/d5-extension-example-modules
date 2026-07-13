<?php
/**
 * Shared helpers for DynamicModule PHPUnit tests.
 *
 * @package D5ExtensionExampleModules\Tests
 */

use ET\Builder\FrontEnd\BlockParser\BlockParserBlock;
use ET\Builder\FrontEnd\BlockParser\BlockParserStore;
use ET\Builder\FrontEnd\Module\ScriptData;
use ET\Builder\FrontEnd\Module\Style;
use MEE\Modules\DynamicModule\DynamicModule;

/**
 * Resets parser and style state before DynamicModule tests.
 *
 * @return void
 */
function d5_extension_example_modules_reset_dynamic_module_test_state(): void {
	Style::reset();
	ScriptData::reset();
	BlockParserBlock::reset_order_index();
	BlockParserStore::reset();
	BlockParserStore::new_instance();
}

/**
 * Registers DynamicModule when it is not already in the block registry.
 *
 * @return void
 */
function d5_extension_example_modules_register_dynamic_module_if_needed(): void {
	$registered_block_type = \WP_Block_Type_Registry::get_instance()->get_registered( 'example/dynamic-module' );

	if ( null !== $registered_block_type ) {
		return;
	}

	( new DynamicModule() )->load();
	do_action( 'init' );
}

/**
 * Loads DynamicModule render fixture attributes from JSON.
 *
 * @return array<string, mixed>
 */
function d5_extension_example_modules_load_dynamic_module_render_fixture(): array {
	$fixture_file_path = dirname( __DIR__ ) . '/fixtures/dynamic-module-render-attrs.json';
	$fixture_contents  = file_get_contents( $fixture_file_path );

	if ( false === $fixture_contents ) {
		throw new RuntimeException( 'DynamicModule render fixture file could not be read.' );
	}

	$fixture_attributes = json_decode( $fixture_contents, true );

	if ( ! is_array( $fixture_attributes ) ) {
		throw new RuntimeException( 'DynamicModule render fixture file contains invalid JSON.' );
	}

	return $fixture_attributes;
}

/**
 * Renders DynamicModule front-end HTML for the given attributes.
 *
 * @param array<string, mixed> $render_attributes Block attributes for render.
 *
 * @return string
 */
function d5_extension_example_modules_render_dynamic_module( array $render_attributes ): string {
	$registered_block_type = \WP_Block_Type_Registry::get_instance()->get_registered( 'example/dynamic-module' );

	if ( null === $registered_block_type ) {
		throw new RuntimeException( 'DynamicModule block type is not registered.' );
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
