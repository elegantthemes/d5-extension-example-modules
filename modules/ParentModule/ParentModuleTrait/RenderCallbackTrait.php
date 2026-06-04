<?php
/**
 * ParentModule::render_callback()
 *
 * @package MEE\Modules\ParentModule
 * @since ??
 */

namespace MEE\Modules\ParentModule\ParentModuleTrait;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

// phpcs:disable ET.Sniffs.ValidVariableName.UsedPropertyNotSnakeCase -- WP use snakeCase in \WP_Block_Parser_Block

use ET\Builder\FrontEnd\BlockParser\BlockParserStore;
use ET\Builder\Packages\Module\Module;
use ET\Builder\Packages\ModuleUtils\ChildrenUtils;
use MEE\Modules\ParentModule\ParentModule;

trait RenderCallbackTrait {
	use ModuleClassnamesTrait;
	use ModuleStylesTrait;
	use ModuleScriptDataTrait;

	/**
	 * Parent module render callback which outputs server side rendered HTML on the Front-End.
	 *
	 * @since ??
	 *
	 * @param array           $attrs                       Block attributes that were saved by VB.
	 * @param string          $content                     Rendered inner blocks HTML.
	 * @param \WP_Block       $block                       Parsed block object that being rendered.
	 * @param \ET\Builder\Packages\Module\Layout\Components\ModuleElements\ModuleElements $elements ModuleElements instance.
	 * @param array           $_default_printed_style_attrs Optional. Passed by ModuleRegistration; unused here.
	 *
	 * @return string HTML rendered of Parent module.
	 */
	public static function render_callback( $attrs, $content, $block, $elements, $_default_printed_style_attrs = [] ) {
		// Extract child module IDs from the block's innerBlocks.
		$children_ids = ChildrenUtils::extract_children_ids( $block );

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
				'classnamesFunction'  => [ ParentModule::class, 'module_classnames' ],
				'scriptDataComponent' => [ ParentModule::class, 'module_script_data' ],
				'stylesComponent'     => [ ParentModule::class, 'module_styles' ],
				'parentAttrs'         => $parent_attrs,
				'parentId'            => $parent->id ?? '',
				'parentName'          => $parent->blockName ?? '',
				// Match core Group: full module style_components (layout, spacing, etc.), not only
				// ElementComponents::component (decoration subset). Without this, nested children often
				// miss FE layout/CSS that VB still applies via the JS pipeline.
				'children'            => $elements->style_components(
					[
						'attrName' => 'module',
					]
				) . $content,
				'childrenIds'         => $children_ids,
			]
		);
	}
}
