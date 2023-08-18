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
use ET\Builder\Packages\Module\Options\Background\BackgroundComponents;
use ET\Builder\Framework\Utility\HTMLUtility;
use ET\Builder\FrontEnd\BlockParser\BlockParserStore;
use ET\Builder\Packages\IconLibrary\IconFont\Utils;
use ET\Builder\Packages\Module\Options\Element\ElementComponents;

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

		$parent_attrs_to_merge = [
			'module'  => $parent_attrs['module'] ?? [],
			'icon'    => $parent_attrs['icon']['decoration']['icon'] ?? [],
			'title'   => $parent_attrs['title']['decoration']['font'] ?? [],
			'content' => $parent_attrs['content']['decoration']['bodyFont'] ?? [],
		];

		$module_attrs = array_replace_recursive( $parent_attrs_to_merge, $attrs );

		// Icon.
		$icon_value = $module_attrs['icon']['decoration']['icon']['desktop']['value'] ?? [];
		$icon       = HTMLUtility::render(
			[
				'tag'               => 'div',
				'attributes'        => [
					'class' => 'child-module__icon et-pb-icon',
				],
				'childrenSanitizer' => 'esc_html',
				'children'          => Utils::process_font_icon( $icon_value ),
			]
		);

		// Title.
		$title = $elements->render(
			[
				'attrName' => 'title',
			]
		);

		// Content.
		$content = $elements->render(
			[
				'attrName' => 'content',
			]
		);

		// Content container.
		$content_container = HTMLUtility::render(
			[
				'tag'               => 'div',
				'attributes'        => [
					'class' => 'child-module__content-container',
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
				'attrs'              => $module_attrs,
				'elements'           => $elements,
				'classnamesFunction' => [ self::class, 'module_classnames' ],
				'stylesComponent'    => [ self::class, 'module_styles' ],
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
