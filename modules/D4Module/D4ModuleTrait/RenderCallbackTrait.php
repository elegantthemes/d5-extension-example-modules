<?php
/**
 * D4Module::render_callback()
 *
 * @package MEE\Modules\D4Module
 * @since ??
 */

namespace MEE\Modules\D4Module\D4ModuleTrait;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

// phpcs:disable ET.Sniffs.ValidVariableName.UsedPropertyNotSnakeCase -- WP use snakeCase in \WP_Block_Parser_Block

use ET\Builder\Packages\Module\Module;
use ET\Builder\Framework\Utility\ArrayUtility;
use ET\Builder\Packages\Module\Options\Background\BackgroundComponents;
use ET\Builder\Framework\Utility\HTMLUtility;
use ET\Builder\FrontEnd\BlockParser\BlockParserStore;

trait RenderCallbackTrait {
	use ModuleClassnamesTrait;
	use ModuleStylesTrait;
	use ModuleScriptDataTrait;
	/**
	 * Divi 4 module render callback which outputs server side rendered HTML on the Front-End.
	 *
	 * @since ??
	 *
	 * @param array     $block_attributes Block attributes that were saved by VB.
	 * @param string    $content          Block content.
	 * @param \WP_Block $block            Parsed block object that being rendered.
	 *
	 * @return string HTML rendered of Blurb module.
	 */
	public static function render_callback( $block_attributes, $content, $block ) {

		// Background component.
		$background_component = BackgroundComponents::component(
			[
				'attr'          => $block_attributes['background'] ?? [],
				'id'            => $block->parsed_block['id'],

				// FE only.
				'orderIndex'    => $block->parsed_block['orderIndex'],
				'storeInstance' => $block->parsed_block['storeInstance'],
			]
		);

		// Title.
		$title_text    = ArrayUtility::get_value( $block_attributes, 'title.desktop.value' );
		$heading_level = ArrayUtility::get_value( $block_attributes, 'titleFont.font.desktop.value.headingLevel', 'h2' );
		$title         = HTMLUtility::render(
			[
				'tag'               => $heading_level,
				'attributes'        => [
					'class' => 'd4_module_title',
				],
				'childrenSanitizer' => 'esc_html',
				'children'          => $title_text,
			]
		);

		// Content.
		$content_text = ArrayUtility::get_value( $block_attributes, 'content.desktop.value' );
		$content      = HTMLUtility::render(
			[
				'tag'               => 'div',
				'attributes'        => [
					'class' => 'd4_module_content',
				],
				'childrenSanitizer' => 'wp_kses_post',
				'children'          => $content_text,
			]
		);

		$parent       = BlockParserStore::get_parent( $block->parsed_block['id'], $block->parsed_block['storeInstance'] );
		$parent_attrs = $parent->attrs ?? [];

		return Module::render(
			[
				// FE only.
				'orderIndex'          => $block->parsed_block['orderIndex'],
				'storeInstance'       => $block->parsed_block['storeInstance'],

				// VB equivalent.
				'id'                  => $block->parsed_block['id'],
				'name'                => $block->block_type->name,
				'moduleCategory'      => $block->block_type->category,
				'attrs'               => $block_attributes,
				'classnamesFunction'  => [ self::class, 'module_classnames' ],
				'stylesComponent'     => [ self::class, 'module_styles' ],
				'scriptDataComponent' => [ self::class, 'module_script_data' ],
				'parentAttrs'         => $parent_attrs,
				'parentId'            => $parent->id ?? '',
				'parentName'          => $parent->blockName ?? '',
				'children'            => $background_component . $title . $content,
			]
		);
	}
}
