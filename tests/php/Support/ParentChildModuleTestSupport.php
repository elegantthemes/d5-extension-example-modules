<?php
/**
 * Shared helpers for ParentModule and ChildModule PHPUnit tests.
 *
 * @package D5ExtensionExampleModules\Tests
 */

use ET\Builder\FrontEnd\BlockParser\BlockParserBlock;
use ET\Builder\FrontEnd\BlockParser\BlockParserStore;
use ET\Builder\FrontEnd\Module\ScriptData;
use ET\Builder\FrontEnd\Module\Style;
use MEE\Modules\ChildModule\ChildModule;
use MEE\Modules\ParentModule\ParentModule;

/**
 * Resets parser and style state before parent/child module tests.
 *
 * @return void
 */
function d5_extension_example_modules_reset_parent_child_module_test_state(): void {
	Style::reset();
	ScriptData::reset();
	BlockParserBlock::reset_order_index();
	BlockParserStore::reset();
	BlockParserStore::new_instance();
}

/**
 * Registers ParentModule and ChildModule when needed.
 *
 * @return void
 */
function d5_extension_example_modules_register_parent_child_modules_if_needed(): void {
	$parent_block_type = \WP_Block_Type_Registry::get_instance()->get_registered( 'example/parent-module' );
	$child_block_type  = \WP_Block_Type_Registry::get_instance()->get_registered( 'example/child-module' );

	if ( null === $parent_block_type || null === $child_block_type ) {
		( new ParentModule() )->load();
		( new ChildModule() )->load();
		do_action( 'init' );
	}
}

/**
 * Loads ParentModule render fixture attributes from JSON.
 *
 * @return array<string, mixed>
 */
function d5_extension_example_modules_load_parent_module_render_fixture(): array {
	return d5_extension_example_modules_load_json_fixture( 'parent-module-render-attrs.json' );
}

/**
 * Loads ChildModule render fixture attributes from JSON.
 *
 * @return array<string, mixed>
 */
function d5_extension_example_modules_load_child_module_render_fixture(): array {
	return d5_extension_example_modules_load_json_fixture( 'child-module-render-attrs.json' );
}

/**
 * Loads a JSON fixture from the fixtures directory.
 *
 * @param string $fixture_file_name Fixture file name.
 *
 * @return array<string, mixed>
 */
function d5_extension_example_modules_load_json_fixture( string $fixture_file_name ): array {
	$fixture_file_path = dirname( __DIR__ ) . '/fixtures/' . $fixture_file_name;
	$fixture_contents  = file_get_contents( $fixture_file_path );

	if ( false === $fixture_contents ) {
		throw new RuntimeException( 'Fixture file could not be read: ' . $fixture_file_name );
	}

	$fixture_attributes = json_decode( $fixture_contents, true );

	if ( ! is_array( $fixture_attributes ) ) {
		throw new RuntimeException( 'Fixture file contains invalid JSON: ' . $fixture_file_name );
	}

	return $fixture_attributes;
}

/**
 * Loads ParentModule metadata from modules-json.
 *
 * @return array<string, mixed>
 */
function d5_extension_example_modules_load_parent_module_metadata(): array {
	$metadata_file_path = D5_EXTENSION_EXAMPLE_MODULES_JSON_PATH . 'parent-module/module.json';
	$metadata_contents  = file_get_contents( $metadata_file_path );

	if ( false === $metadata_contents ) {
		throw new RuntimeException( 'ParentModule metadata file could not be read.' );
	}

	$metadata = json_decode( $metadata_contents, true );

	if ( ! is_array( $metadata ) ) {
		throw new RuntimeException( 'ParentModule metadata file contains invalid JSON.' );
	}

	return $metadata;
}

/**
 * Converts a BlockParserBlock tree into the parsed-block array shape WP_Block expects.
 *
 * @param BlockParserBlock $block Block parser block instance.
 *
 * @return array<string, mixed>
 */
function d5_extension_example_modules_block_parser_block_to_parsed_block( BlockParserBlock $block ): array {
	$parsed = get_object_vars( $block );

	if ( ! empty( $parsed['innerBlocks'] ) ) {
		$parsed['innerBlocks'] = array_map(
			static function ( BlockParserBlock $inner_block ): array {
				return d5_extension_example_modules_block_parser_block_to_parsed_block( $inner_block );
			},
			$parsed['innerBlocks']
		);
	}

	return $parsed;
}

/**
 * Renders a ChildModule block nested under a ParentModule block.
 *
 * @param array<string, mixed> $parent_attributes Parent block attributes.
 * @param array<string, mixed> $child_attributes  Child block attributes.
 *
 * @return string
 */
function d5_extension_example_modules_render_child_module_with_parent( array $parent_attributes, array $child_attributes ): string {
	$parent_block_type = \WP_Block_Type_Registry::get_instance()->get_registered( 'example/parent-module' );
	$child_block_type  = \WP_Block_Type_Registry::get_instance()->get_registered( 'example/child-module' );

	if ( null === $parent_block_type || null === $child_block_type ) {
		throw new RuntimeException( 'Parent or Child module block type is not registered.' );
	}

	$store_instance       = 0;
	$prepared_parent_attrs = $parent_block_type->prepare_attributes_for_render( $parent_attributes );

	$parent_block = new BlockParserBlock(
		$parent_block_type->name,
		$prepared_parent_attrs,
		[],
		'',
		[],
		$store_instance
	);

	$prepared_child_attrs = $child_block_type->prepare_attributes_for_render( $child_attributes );

	$child_block = new BlockParserBlock(
		$child_block_type->name,
		$prepared_child_attrs,
		[],
		'',
		[],
		$store_instance,
		$parent_block->id
	);

	BlockParserStore::add( $parent_block );

	$block = new \WP_Block(
		(array) BlockParserStore::add( $child_block )
	);

	$rendered_html = $block->render();

	ob_start();
	Style::enqueue();
	$rendered_html .= ob_get_clean();

	return $rendered_html;
}

/**
 * Renders a ParentModule block with nested ChildModule inner blocks.
 *
 * @param array<string, mixed>   $parent_attributes Parent block attributes.
 * @param array<int, array<string, mixed>> $child_attributes_list Child block attributes list.
 *
 * @return string
 */
function d5_extension_example_modules_render_parent_module_with_children( array $parent_attributes, array $child_attributes_list ): string {
	$parent_block_type = \WP_Block_Type_Registry::get_instance()->get_registered( 'example/parent-module' );
	$child_block_type  = \WP_Block_Type_Registry::get_instance()->get_registered( 'example/child-module' );

	if ( null === $parent_block_type || null === $child_block_type ) {
		throw new RuntimeException( 'Parent or Child module block type is not registered.' );
	}

	$store_instance        = 0;
	$prepared_parent_attrs = $parent_block_type->prepare_attributes_for_render( $parent_attributes );

	$parent_block = new BlockParserBlock(
		$parent_block_type->name,
		$prepared_parent_attrs,
		[],
		'',
		[],
		$store_instance
	);

	$child_blocks = [];

	foreach ( $child_attributes_list as $child_attributes ) {
		$prepared_child_attrs = $child_block_type->prepare_attributes_for_render( $child_attributes );

		$child_blocks[] = new BlockParserBlock(
			$child_block_type->name,
			$prepared_child_attrs,
			[],
			'',
			[],
			$store_instance,
			$parent_block->id
		);
	}

	// phpcs:ignore WordPress.NamingConventions.ValidVariableName.UsedPropertyNotSnakeCase -- Matches WP block parser conventions.
	$parent_block->innerBlocks  = $child_blocks;
	$parent_block->innerContent = array_fill( 0, count( $child_blocks ), null );

	foreach ( $child_blocks as $child_block ) {
		BlockParserStore::add( $child_block );
	}

	BlockParserStore::add( $parent_block );

	$block = new \WP_Block(
		d5_extension_example_modules_block_parser_block_to_parsed_block( $parent_block )
	);

	$rendered_html = $block->render();

	ob_start();
	Style::enqueue();
	$rendered_html .= ob_get_clean();

	return $rendered_html;
}
