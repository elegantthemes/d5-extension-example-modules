<?php
/**
 * StaticModule::render_callback()
 *
 * @package MEE\Modules\StaticModule
 * @since ??
 */

namespace MEE\Modules\StaticModule\StaticModuleTrait;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

// phpcs:disable ET.Sniffs.ValidVariableName.UsedPropertyNotSnakeCase -- WP use snakeCase in \WP_Block_Parser_Block

use ET\Builder\FrontEnd\BlockParser\BlockParserStore;
use ET\Builder\Framework\Utility\HTMLUtility;
use ET\Builder\Packages\Module\Module;
use ET\Builder\Packages\ModuleUtils\ChildrenUtils;
use MEE\Modules\StaticModule\StaticModule;

trait RenderCallbackTrait {

	/**
	 * Static module render callback which outputs server side rendered HTML on the Front-End.
	 *
	 * @since ??
	 * @param array          $attrs                       Block attributes that were saved by VB.
	 * @param string         $content                     Rendered inner blocks (Elements children).
	 * @param \WP_Block      $block                       Parsed block object that being rendered.
	 * @param \ET\Builder\Packages\Module\Layout\Components\ModuleElements\ModuleElements $elements ModuleElements instance.
	 * @param array          $_default_printed_style_attrs Optional. Passed by ModuleRegistration.
	 *
	 * @return string HTML rendered of Static module.
	 */
	public static function render_callback( $attrs, $content, $block, $elements, $_default_printed_style_attrs = [] ) {
		$inner_blocks_html = $content;

		// Extract child module IDs from the block's innerBlocks.
		$children_ids = ChildrenUtils::extract_children_ids( $block );

		// Image - render using elements->render() and wrap in div with class.
		$image_html = $elements->render(
			[
				'attrName' => 'image',
			]
		);

		// Badge.
		$badge = $elements->render(
			[
				'attrName' => 'badge',
			]
		);

		// Image container.
		$image = HTMLUtility::render(
			[
				'tag'               => 'div',
				'attributes'        => [
					'class' => 'example_static_module__image',
				],
				'childrenSanitizer' => 'et_core_esc_previously',
				'children'          => $badge . $image_html,
			]
		);

		// Title.
		$title = $elements->render(
			[
				'attrName' => 'title',
			]
		);

		// Summary.
		$summary = $elements->render(
			[
				'attrName' => 'summary',
			]
		);

		// Main body field (must not reuse $content — that holds rendered Elements / inner blocks from WordPress).
		$richtext_content = $elements->render(
			[
				'attrName' => 'content',
			]
		);

		// Content container.
		$content_container = HTMLUtility::render(
			[
				'tag'               => 'div',
				'attributes'        => [
					'class' => 'example_static_module__content-container',
				],
				'childrenSanitizer' => 'et_core_esc_previously',
				'children'          => $title . $summary . HTMLUtility::render(
					[
						'tag'               => 'div',
						'attributes'        => [
							'class' => 'example_static_module__content',
						],
						'childrenSanitizer' => 'et_core_esc_previously',
						'children'          => $richtext_content,
					]
				),
			]
		);

		// Layout classes for inner container.
		$layout_display_value = $attrs['module']['decoration']['layout']['desktop']['value']['display'] ?? 'flex';
		$inner_classes          = HTMLUtility::classnames(
			'example_static_module__inner',
			[
				'et_flex_module' => 'flex' === $layout_display_value,
				'et_grid_module' => 'grid' === $layout_display_value,
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
				'attrs'               => $attrs,
				'elements'            => $elements,
				'id'                  => $block->parsed_block['id'],
				'name'                => $block->block_type->name,
				'moduleCategory'      => $block->block_type->category,
				'classnamesFunction'  => [ StaticModule::class, 'module_classnames' ],
				'stylesComponent'     => [ StaticModule::class, 'module_styles' ],
				'scriptDataComponent' => [ StaticModule::class, 'module_script_data' ],
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
					HTMLUtility::render(
						[
							'tag'               => 'div',
							'attributes'        => [
								'class' => $inner_classes,
							],
							'childrenSanitizer' => 'et_core_esc_previously',
							'children'          => $image . $content_container,
						]
					),
					$inner_blocks_html,
				],
			]
		);
	}
}
