<?php
/**
 * ChildModule::render_callback()
 *
 * @package MEE\Modules\ChildModule
 * @since ??
 */

namespace MEE\Modules\ChildModule\ChildModuleTrait;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

// phpcs:disable ET.Sniffs.ValidVariableName.UsedPropertyNotSnakeCase -- WP use snakeCase in \WP_Block_Parser_Block

use ET\Builder\FrontEnd\BlockParser\BlockParserStore;
use ET\Builder\Framework\Utility\HTMLUtility;
use ET\Builder\Packages\IconLibrary\IconFont\Utils;
use ET\Builder\Packages\Module\Module;
use ET\Builder\Packages\ModuleUtils\ChildrenUtils;
use ET\Builder\Packages\ModuleUtils\ModuleUtils;
use MEE\Modules\ChildModule\ChildModule;

trait RenderCallbackTrait {
	use ModuleClassnamesTrait;
	use ModuleStylesTrait;
	use ModuleScriptDataTrait;

	/**
	 * Child module render callback which outputs server side rendered HTML on the Front-End.
	 *
	 * @since ??
	 *
	 * @param array          $attrs                       Block attributes that were saved by VB.
	 * @param string         $content                     Rendered inner blocks (Elements children).
	 * @param \WP_Block      $block                       Parsed block object that being rendered.
	 * @param \ET\Builder\Packages\Module\Layout\Components\ModuleElements\ModuleElements $elements ModuleElements instance.
	 * @param array          $_default_printed_style_attrs Optional. Passed by ModuleRegistration.
	 *
	 * @return string HTML rendered of Child module.
	 */
	public static function render_callback( $attrs, $content, $block, $elements, $_default_printed_style_attrs = [] ) {
		$inner_blocks_html = $content;

		// Extract child module IDs from the block's innerBlocks.
		$children_ids = ChildrenUtils::extract_children_ids( $block );

		$parent = BlockParserStore::get_parent( $block->parsed_block['id'], $block->parsed_block['storeInstance'] );

		$parent_attrs = ModuleUtils::get_all_attrs( $parent );

		// Icon.
		$icon_value = $attrs['icon']['innerContent']['desktop']['value'] ?? $parent_attrs['icon']['innerContent']['desktop']['value'] ?? [];
		$icon       = HTMLUtility::render(
			[
				'tag'               => 'div',
				'attributes'        => [
					'class' => 'example_child_module__icon et-pb-icon',
				],
				'childrenSanitizer' => 'esc_html',
				'children'          => Utils::process_font_icon( $icon_value ),
			]
		);

		// Title.
		$title = $elements->render(
			[
				'attrName'      => 'title',
				'hoverSelector' => '{{parentSelector}}',
			]
		);

		// Main content field (do not shadow $inner_blocks_html).
		$richtext_content = $elements->render(
			[
				'attrName'      => 'content',
				'hoverSelector' => '{{parentSelector}}',
			]
		);

		$content_container = HTMLUtility::render(
			[
				'tag'               => 'div',
				'attributes'        => [
					'class' => 'example_child_module__content-container',
				],
				'childrenSanitizer' => 'et_core_esc_previously',
				'children'          => $title . $richtext_content,
			]
		);

		$inner_content = HTMLUtility::render(
			[
				'tag'               => 'div',
				'attributes'        => [
					'class' => 'example_child_module__inner',
				],
				'childrenSanitizer' => 'et_core_esc_previously',
				'children'          => $icon . $content_container,
			]
		);

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
				'classnamesFunction'  => [ ChildModule::class, 'module_classnames' ],
				'stylesComponent'     => [ ChildModule::class, 'module_styles' ],
				'scriptDataComponent' => [ ChildModule::class, 'module_script_data' ],
				'parentAttrs'         => $parent_attrs,
				'parentId'            => $parent->id ?? '',
				'parentName'          => $parent->blockName ?? '',
				'childrenIds'         => $children_ids,
				'children'            => [
					$elements->style_components(
						[
							'attrName' => 'module',
						]
					),
					$inner_content,
					$inner_blocks_html,
				],
			]
		);
	}
}
