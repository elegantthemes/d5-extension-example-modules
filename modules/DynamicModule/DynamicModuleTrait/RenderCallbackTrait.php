<?php
/**
 * DynamicModule::render_callback()
 *
 * @package MEE\Modules\DynamicModule
 * @since ??
 */

namespace MEE\Modules\DynamicModule\DynamicModuleTrait;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

// phpcs:disable ET.Sniffs.ValidVariableName.UsedPropertyNotSnakeCase -- WP use snakeCase in \WP_Block_Parser_Block

use ET\Builder\Packages\Module\Module;
use ET\Builder\Framework\Utility\ArrayUtility;
use ET\Builder\Packages\Module\Options\Background\BackgroundComponents;
use ET\Builder\FrontEnd\BlockParser\BlockParserStore;
use ET\Builder\Framework\Utility\HTMLUtility;

trait RenderCallbackTrait {
	use ModuleClassnamesTrait;
	use ModuleStylesTrait;
	use ModuleScriptDataTrait;

	/**
	 * Dynamic module render callback which outputs server side rendered HTML on the Front-End.
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
		$post_heading_level = ArrayUtility::get_value( $block_attributes, 'postTitleFont.font.desktop.value.headingLevel', 'h3' );
		$posts_per_page     = ArrayUtility::get_value( $block_attributes, 'numberOfPosts.desktop.value', 5 );

		$background_component = BackgroundComponents::component(
			[
				'attr'          => $block_attributes['background'] ?? [],
				'id'            => $block->parsed_block['id'],

				// FE only.
				'orderIndex'    => $block->parsed_block['orderIndex'],
				'storeInstance' => $block->parsed_block['storeInstance'],
			]
		);

		$posts = get_posts(
			[
				'post_type'      => 'post',
				'posts_per_page' => $posts_per_page,
			]
		);

		$post_items = '';

		if ( is_array( $posts ) && count( $posts ) ) {
			foreach ( $posts as $post ) {

				// Post title with link.
				$post_title = HTMLUtility::render(
					[
						'tag'               => 'a',
						'attributes'        => [
							'href' => get_permalink( $post ),
						],
						'childrenSanitizer' => 'esc_html',
						'children'          => get_the_title( $post ),
					]
				);

				// Post title container.
				$post_title_container = HTMLUtility::render(
					[
						'tag'               => $post_heading_level,
						'attributes'        => [
							'class' => 'dynamic-module__post-item-title',
						],
						'childrenSanitizer' => 'et_core_esc_previously',
						'children'          => $post_title,
					]
				);

				// Post content.
				$post_content = HTMLUtility::render(
					[
						'tag'               => 'div',
						'attributes'        => [
							'class' => 'dynamic-module__post-item-content',
						],
						'childrenSanitizer' => 'wp_kses_post',
						'children'          => get_the_excerpt( $post ),
					]
				);

				// Post item.
				$post_items .= HTMLUtility::render(
					[
						'tag'               => $post_heading_level,
						'attributes'        => [
							'class' => 'dynamic-module__post-item',
						],
						'childrenSanitizer' => 'et_core_esc_previously',
						'children'          => $post_title_container . $post_content,
					]
				);
			}
		}

		// Title.
		$title_text    = ArrayUtility::get_value( $block_attributes, 'title.desktop.value' );
		$heading_level = ArrayUtility::get_value( $block_attributes, 'titleFont.font.desktop.value.headingLevel', 'h2' );
		$title         = HTMLUtility::render(
			[
				'tag'               => $heading_level,
				'attributes'        => [
					'class' => 'dynamic-module__title',
				],
				'childrenSanitizer' => 'esc_html',
				'children'          => $title_text,
			]
		);

		// Posts container.
		if ( ! empty( $post_items ) ) {
			$posts_container = HTMLUtility::render(
				[
					'tag'               => 'div',
					'attributes'        => [
						'class' => 'dynamic-module__post-items',
					],
					'childrenSanitizer' => 'et_core_esc_previously',
					'children'          => $post_items,
				]
			);
		} else {
			$posts_container = HTMLUtility::render(
				[
					'tag'               => 'div',
					'childrenSanitizer' => 'esc_html',
					'children'          => __( 'No post found.', 'd5-module-extension-example' ),
				]
			);
		}

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
				'attrs'               => $block_attributes,
				'classnamesFunction'  => [ self::class, 'module_classnames' ],
				'stylesComponent'     => [ self::class, 'module_styles' ],
				'scriptDataComponent' => [ self::class, 'module_script_data' ],
				'parentAttrs'         => $parent_attrs,
				'parentId'            => $parent->id ?? '',
				'parentName'          => $parent->blockName ?? '',
				'children'            => $background_component . $title . $posts_container,
			]
		);
	}
}
