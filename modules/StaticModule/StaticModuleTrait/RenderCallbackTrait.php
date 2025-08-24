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
use ET\Builder\Framework\Utility\HTMLUtility;
use ET\Builder\FrontEnd\BlockParser\BlockParserStore;
use ET\Builder\Packages\Module\Options\Element\ElementComponents;
use MEE\Modules\StaticModule\StaticModule;

trait RenderCallbackTrait {

	/**
	 * Static module render callback which outputs server side rendered HTML on the Front-End.
	 *
	 * @since ??
	 * @param array          $attrs    Block attributes that were saved by VB.
	 * @param string         $content  Block content.
	 * @param WP_Block       $block    Parsed block object that being rendered.
	 * @param ModuleElements $elements ModuleElements instance.
	 *
	 * @return string HTML rendered of Static module.
	 */
	public static function render_callback( $attrs, $content, $block, $elements ) {
		// Image.
		$image_src = $attrs['image']['innerContent']['desktop']['value']['src'] ?? '';
		$image_alt = $attrs['image']['innerContent']['desktop']['value']['alt'] ?? '';
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
					'class' => 'example_static_module__image',
				],
				'childrenSanitizer' => 'et_core_esc_previously',
				'children'          => $image,
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

		// SVG Test Content - This will demonstrate the CSS sanitization bug
		$svg_test_content = HTMLUtility::render(
			[
				'tag'               => 'div',
				'attributes'        => [
					'class' => 'example_static_module__svg-test',
				],
				'childrenSanitizer' => 'wp_kses_post', // This will trigger the sanitization bug
				'children'          => '
					<h4>SVG CSS Properties Test (Frontend) hello</h4>
					<svg width="200" height="100" viewBox="0 0 200 100" style="border: 1px solid #ccc; margin-bottom: 10px;">
						<circle 
							cx="50" 
							cy="50" 
							r="30"
							style="fill: #ff6b6b; stroke: #4ecdc4; stroke-width: 3; stroke-dasharray: 5,5; stroke-linecap: round; opacity: 0.8;"
						/>
						<text 
							x="120" 
							y="40"
							style="fill: #2c3e50; text-anchor: middle; dominant-baseline: middle; font-size: 14px; font-family: Arial;"
						>
							SVG Text
						</text>
						<path 
							d="M 10 80 Q 95 10 180 80" 
							style="fill: none; stroke: #e74c3c; stroke-width: 2; stroke-dasharray: 10,5; stroke-linecap: round;"
						/>
					</svg>
					<div style="width: 200px; height: 50px; background-color: #f8f9fa; background-image: linear-gradient(45deg, #e3f2fd 25%, transparent 25%); background-position-x: 10px; background-position-y: 5px; background-size: 20px 20px; opacity: 0.7; border: 1px solid #dee2e6; display: flex; align-items: center; justify-content: center;">
						<span style="opacity: 0.5; color: #6c757d;">Background Position Test</span>
					</div>
				',
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
				'children'            => [
					ElementComponents::component(
						[
							'attrs'         => $attrs['module']['decoration'] ?? [],
							'id'            => $block->parsed_block['id'],

							// FE only.
							'orderIndex'    => $block->parsed_block['orderIndex'],
							'storeInstance' => $block->parsed_block['storeInstance'],
						]
					),
					HTMLUtility::render(
						[
							'tag'               => 'div',
							'attributes'        => [
								'class' => 'example_static_module__inner',
							],
							'childrenSanitizer' => 'et_core_esc_previously',
							'children'          => $image_container . $svg_test_content . $content_container,
						]
					),
				],
			]
		);
	}
}