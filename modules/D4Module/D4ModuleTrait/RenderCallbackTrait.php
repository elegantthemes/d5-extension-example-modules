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

use ET\Builder\FrontEnd\BlockParser\BlockParserStore;
use ET\Builder\Framework\Utility\HTMLUtility;
use ET\Builder\Packages\Module\Module;
use ET\Builder\Packages\ModuleUtils\ChildrenUtils;

trait RenderCallbackTrait {
	use ModuleClassnamesTrait;
	use ModuleStylesTrait;
	use ModuleScriptDataTrait;

	/**
	 * Divi 4 module render callback which outputs server side rendered HTML on the Front-End.
	 *
	 * @since ??
	 *
	 * @param array          $attrs                       Block attributes that were saved by VB.
	 * @param string         $content                     Rendered inner blocks (Elements children).
	 * @param \WP_Block      $block                       Parsed block object that being rendered.
	 * @param \ET\Builder\Packages\Module\Layout\Components\ModuleElements\ModuleElements $elements ModuleElements instance.
	 * @param array          $_default_printed_style_attrs Optional. Passed by ModuleRegistration.
	 *
	 * @return string HTML rendered of D4 module.
	 */
	public static function render_callback( $attrs, $content, $block, $elements, $_default_printed_style_attrs = [] ) {
		$inner_blocks_html = $content;

		// Extract child module IDs from the block's innerBlocks.
		$children_ids = ChildrenUtils::extract_children_ids( $block );

		$module_styles_markup = $elements->style_components(
			[
				'attrName' => 'module',
			]
		);

		// Title.
		$title = $elements->render(
			[
				'attrName' => 'title',
			]
		);

		// Main content field (do not shadow $inner_blocks_html).
		$richtext_content = $elements->render(
			[
				'attrName'          => 'content',
				'childrenSanitizer' => 'et_core_esc_previously',
			]
		);

		$inner_content = HTMLUtility::render(
			[
				'tag'               => 'div',
				'attributes'        => [
					'class' => 'example_d4_module_inner',
				],
				'childrenSanitizer' => 'et_core_esc_previously',
				'children'          => [
					$title,
					$richtext_content,
				],
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
				'attrs'               => $attrs,
				'elements'            => $elements,
				'classnamesFunction'  => [ self::class, 'module_classnames' ],
				'stylesComponent'     => [ self::class, 'module_styles' ],
				'scriptDataComponent' => [ self::class, 'module_script_data' ],
				'parentAttrs'         => $parent_attrs,
				'parentId'            => $parent->id ?? '',
				'parentName'          => $parent->blockName ?? '',
				'childrenIds'         => $children_ids,
				'children'            => [
					$module_styles_markup,
					$inner_content,
					$inner_blocks_html,
				],
			]
		);
	}
}
