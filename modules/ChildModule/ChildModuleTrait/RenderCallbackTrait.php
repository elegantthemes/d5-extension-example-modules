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
use ET\Builder\Framework\Utility\ArrayUtility;
use ET\Builder\Packages\Module\Options\Background\BackgroundComponents;
use ET\Builder\Framework\Utility\HTMLUtility;
use ET\Builder\FrontEnd\BlockParser\BlockParserStore;
use ET\Builder\Packages\IconLibrary\IconFont\Utils;

trait RenderCallbackTrait {
	use ModuleClassnamesTrait;
	use ModuleStylesTrait;

	/**
	 * Child module render callback which outputs server side rendered HTML on the Front-End.
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
		$parent = BlockParserStore::get_parent( $block->parsed_block['id'], $block->parsed_block['storeInstance'] );

		$parent_attrs = $parent->attrs ?? [];

		$parent_selected_attrs = [
			'icon'      => $parent_attrs['icon'] ?? [],
			'iconColor' => $parent_attrs['iconColor'] ?? [],
			'iconSize'  => $parent_attrs['iconSize'] ?? [],
			'titleFont' => $parent_attrs['titleFont'] ?? [],
			'text'      => $parent_attrs['text'] ?? [],
			'bodyFont'  => $parent_attrs['bodyFont'] ?? [],
		];

		$block_parent_child_attrs = array_merge( $parent_selected_attrs, $block_attributes );

		$background_component = BackgroundComponents::component(
			[
				'attr'          => $block_parent_child_attrs['background'] ?? [],
				'id'            => $block->parsed_block['id'],

				// FE only.
				'orderIndex'    => $block->parsed_block['orderIndex'],
				'storeInstance' => $block->parsed_block['storeInstance'],
			]
		);

		// Icon.
		$icon_value = ArrayUtility::get_value( $block_parent_child_attrs, 'icon.desktop.value' );
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
		$title_text = ArrayUtility::get_value( $block_parent_child_attrs, 'title.desktop.value' );
		$title      = HTMLUtility::render(
			[
				'tag'               => 'div',
				'attributes'        => [
					'class' => 'child-module__title',
				],
				'childrenSanitizer' => 'esc_html',
				'children'          => $title_text,
			]
		);

		// Content.
		$content_text = ArrayUtility::get_value( $block_parent_child_attrs, 'content.desktop.value' );
		$content      = HTMLUtility::render(
			[
				'tag'               => 'div',
				'attributes'        => [
					'class' => 'child-module__content',
				],
				'childrenSanitizer' => 'wp_kses_post',
				'children'          => $content_text,
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
				'attrs'              => $block_parent_child_attrs,
				'classnamesFunction' => [ self::class, 'module_classnames' ],
				'stylesComponent'    => [ self::class, 'module_styles' ],
				'parentAttrs'        => $parent_attrs,
				'parentId'           => $parent->id ?? '',
				'parentName'         => $parent->blockName ?? '',
				'children'           => $background_component . $icon . $content_container,
			]
		);
	}
}
