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

use ET\Builder\Packages\Module\Module;
use ET\Builder\Packages\Module\Options\Background\BackgroundComponents;
use ET\Builder\Framework\Utility\HTMLUtility;
use ET\Builder\FrontEnd\BlockParser\BlockParserStore;
use ET\Builder\Packages\ModuleLibrary\ModuleRegistration;

trait RenderCallbackTrait {
	use ModuleClassnamesTrait;
	use ModuleStylesTrait;
	use ModuleScriptDataTrait;
	/**
	 * Static module render callback which outputs server side rendered HTML on the Front-End.
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
		$default_attributes = ModuleRegistration::get_default_attrs( 'example/static-module' );
		$module_attrs       = array_replace_recursive( $default_attributes, $block_attributes );

		// Background.
		$background_component = BackgroundComponents::component(
			[
				'attr'          => $module_attrs['background'] ?? [],
				'id'            => $block->parsed_block['id'],

				// FE only.
				'orderIndex'    => $block->parsed_block['orderIndex'],
				'storeInstance' => $block->parsed_block['storeInstance'],
			]
		);

		// Image.
		$image_src = $module_attrs['image']['image']['desktop']['value']['src'] ?? '';
		$image_alt = $module_attrs['image']['image']['desktop']['value']['alt'] ?? '';
		$image     = HTMLUtility::render(
			[
				'tag'                  => 'img',
				'attributes'           => [
					'src' => $image_src,
					'alt' => $image_alt,
				],
				'attributesSanitizers' => [
					'src' => function ( $value ) {
						$protocols = array_merge( wp_allowed_protocols(), [ 'data' ] ); // Need to add `data` protocol for default image.
						return esc_url( $value, $protocols );
					},
				],
			]
		);

		// Image container.
		$image_container = HTMLUtility::render(
			[
				'tag'               => 'div',
				'attributes'        => [
					'class' => 'static-module__image',
				],
				'childrenSanitizer' => 'et_core_esc_previously',
				'children'          => $image,
			]
		);

		// Title.
		$title_text    = $module_attrs['title.desktop.value'] ?? '';
		$heading_level = $module_attrs['titleFont.font.desktop.value.headingLevel'] ?? 'h2';
		$title         = HTMLUtility::render(
			[
				'tag'               => $heading_level,
				'attributes'        => [
					'class' => 'static-module__title',
				],
				'childrenSanitizer' => 'esc_html',
				'children'          => $title_text,
			]
		);

		// Content.
		$content_text = $module_attrs['content.desktop.value'] ?? '';
		$content      = HTMLUtility::render(
			[
				'tag'               => 'div',
				'attributes'        => [
					'class' => 'static-module__content',
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
					'class' => 'static-module__content-container',
				],
				'childrenSanitizer' => 'et_core_esc_previously',
				'children'          => $title . $content,
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
				'attrs'               => $module_attrs,
				'classnamesFunction'  => [ self::class, 'module_classnames' ],
				'stylesComponent'     => [ self::class, 'module_styles' ],
				'scriptDataComponent' => [ self::class, 'module_script_data' ],
				'parentAttrs'         => $parent_attrs,
				'parentId'            => $parent->id ?? '',
				'parentName'          => $parent->blockName ?? '',
				'children'            => $background_component . $image_container . $content_container,
			]
		);
	}
}
