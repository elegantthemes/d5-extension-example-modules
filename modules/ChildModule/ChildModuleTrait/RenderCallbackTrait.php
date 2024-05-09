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

use ET\Builder\Packages\Module\Module;
use ET\Builder\Framework\Utility\HTMLUtility;
use ET\Builder\FrontEnd\BlockParser\BlockParserStore;
use ET\Builder\Packages\IconLibrary\IconFont\Utils;
use ET\Builder\Packages\Module\Options\Element\ElementComponents;
use ET\Builder\Packages\ModuleLibrary\ModuleRegistration;
use MEE\Modules\ChildModule\ChildModule;

trait RenderCallbackTrait {
	use ModuleClassnamesTrait;
	use ModuleStylesTrait;

	/**
	 * Child module render callback which outputs server side rendered HTML on the Front-End.
	 *
	 * @since ??
	 *
	 * @param array          $attrs Block attributes that were saved by VB.
	 * @param string         $content          Block content.
	 * @param WP_Block       $block            Parsed block object that being rendered.
	 * @param ModuleElements $elements         ModuleElements instance.
	 *
	 * @return string HTML rendered of Child module.
	 */
	public static function render_callback( $attrs, $content, $block, $elements ) {
		$parent = BlockParserStore::get_parent( $block->parsed_block['id'], $block->parsed_block['storeInstance'] );

		$parent_attrs = $parent->attrs ?? [];

		$parent_default_attributes = ModuleRegistration::get_default_attrs( 'example/parent-module' );
		$parent_attrs_with_default = array_replace_recursive( $parent_default_attributes, $parent_attrs );

		// Icon.
		$icon_value = $attrs['icon']['innerContent']['desktop']['value'] ?? $parent_attrs_with_default['icon']['innerContent']['desktop']['value'] ?? [];
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

		// Content.
		$content = $elements->render(
			[
				'attrName'      => 'content',
				'hoverSelector' => '{{parentSelector}}',
			]
		);

		// Content container.
		$content_container = HTMLUtility::render(
			[
				'tag'               => 'div',
				'attributes'        => [
					'class' => 'example_child_module__content-container',
				],
				'childrenSanitizer' => 'et_core_esc_previously',
				'children'          => $title . $content,
			]
		);

		return Module::render(
			[
				// FE only.
				'orderIndex'         => $block->parsed_block['orderIndex'],
				'storeInstance'      => $block->parsed_block['storeInstance'],

				// VB equivalent.
				'id'                 => $block->parsed_block['id'],
				'name'               => $block->block_type->name,
				'moduleCategory'     => $block->block_type->category,
				'attrs'              => $attrs,
				'elements'           => $elements,
				'classnamesFunction' => [ ChildModule::class, 'module_classnames' ],
				'stylesComponent'    => [ ChildModule::class, 'module_styles' ],
				'parentAttrs'        => $parent_attrs,
				'parentId'           => $parent->id ?? '',
				'parentName'         => $parent->blockName ?? '',
				'children'           => ElementComponents::component(
					[
						'attrs'         => $attrs['module']['decoration'] ?? [],
						'id'            => $block->parsed_block['id'],

						// FE only.
						'orderIndex'    => $block->parsed_block['orderIndex'],
						'storeInstance' => $block->parsed_block['storeInstance'],
					]
				) . $icon . $content_container,
			]
		);
	}
}
