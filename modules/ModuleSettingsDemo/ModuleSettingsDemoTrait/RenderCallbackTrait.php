<?php
/**
 * ModuleSettingsDemo::render_callback()
 *
 * @package MEE\Modules\ModuleSettingsDemo
 * @since ??
 */

namespace MEE\Modules\ModuleSettingsDemo\ModuleSettingsDemoTrait;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

// phpcs:disable ET.Sniffs.ValidVariableName.UsedPropertyNotSnakeCase -- WP use snakeCase in \WP_Block_Parser_Block

use ET\Builder\FrontEnd\BlockParser\BlockParserStore;
use ET\Builder\Framework\Utility\HTMLUtility;
use ET\Builder\Packages\Module\Module;

trait RenderCallbackTrait {
	use FieldOptionsTrait;
	use ModuleClassnamesTrait;
	use ModuleStylesTrait;
	use ModuleScriptDataTrait;

	/**
	 * Module Settings Demo render callback for front-end output.
	 *
	 * @since ??
	 *
	 * @param array          $attrs                       Block attributes saved by VB.
	 * @param string         $content                     Rendered inner blocks.
	 * @param \WP_Block      $block                       Parsed block object.
	 * @param \ET\Builder\Packages\Module\Layout\Components\ModuleElements\ModuleElements $elements ModuleElements instance.
	 * @param array          $_default_printed_style_attrs Optional. Passed by ModuleRegistration.
	 *
	 * @return string
	 */
	public static function render_callback( $attrs, $content, $block, $elements, $_default_printed_style_attrs = [] ) {
		$module_styles_markup = $elements->style_components(
			[
				'attrName' => 'module',
			]
		);

		$text_input = $elements->render(
			[
				'attrName' => 'textInput',
			]
		);

		$rich_text = $elements->render(
			[
				'attrName'          => 'richText',
				'childrenSanitizer' => 'et_core_esc_previously',
			]
		);

		$select_key      = $attrs['selectField']['innerContent']['desktop']['value'] ?? '';
		$checkbox_keys   = $attrs['checkboxesField']['innerContent']['desktop']['value'] ?? [];
		$select_label    = esc_html( self::get_select_label( $select_key ) );
		$checkbox_labels = esc_html( self::get_checkbox_labels( is_array( $checkbox_keys ) ? $checkbox_keys : [] ) );

		$layout_display_value = $attrs['module']['decoration']['layout']['desktop']['value']['display'] ?? 'flex';
		$inner_classes        = HTMLUtility::classnames(
			'example_module_settings_demo__inner',
			[
				'et_flex_module' => 'flex' === $layout_display_value,
				'et_grid_module' => 'grid' === $layout_display_value,
			]
		);

		$inner_content = HTMLUtility::render(
			[
				'tag'               => 'div',
				'attributes'        => [
					'class' => $inner_classes,
				],
				'childrenSanitizer' => 'et_core_esc_previously',
				'children'          => [
					HTMLUtility::render(
						[
							'tag'               => 'div',
							'attributes'        => [
								'class' => 'example_module_settings_demo__row',
							],
							'childrenSanitizer' => 'et_core_esc_previously',
							'children'          => $text_input,
						]
					),
					HTMLUtility::render(
						[
							'tag'               => 'div',
							'attributes'        => [
								'class' => 'example_module_settings_demo__row',
							],
							'childrenSanitizer' => 'et_core_esc_previously',
							'children'          => $rich_text,
						]
					),
					HTMLUtility::render(
						[
							'tag'               => 'div',
							'attributes'        => [
								'class' => 'example_module_settings_demo__row example_module_settings_demo__select',
							],
							'childrenSanitizer' => 'et_core_esc_previously',
							'children'          => $select_label,
						]
					),
					HTMLUtility::render(
						[
							'tag'               => 'div',
							'attributes'        => [
								'class' => 'example_module_settings_demo__row example_module_settings_demo__checkboxes',
							],
							'childrenSanitizer' => 'et_core_esc_previously',
							'children'          => $checkbox_labels,
						]
					),
				],
			]
		);

		$parent       = BlockParserStore::get_parent( $block->parsed_block['id'], $block->parsed_block['storeInstance'] );
		$parent_attrs = $parent->attrs ?? [];

		return Module::render(
			[
				'orderIndex'          => $block->parsed_block['orderIndex'],
				'storeInstance'       => $block->parsed_block['storeInstance'],
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
				'children'            => [
					$module_styles_markup,
					$inner_content,
					$content,
				],
			]
		);
	}
}
