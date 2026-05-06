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

use ET\Builder\FrontEnd\BlockParser\BlockParserStore;
use ET\Builder\Framework\Utility\HTMLUtility;
use ET\Builder\Packages\Module\Module;
use ET\Builder\Packages\ModuleUtils\ChildrenUtils;

trait RenderCallbackTrait {
	use ModuleClassnamesTrait;
	use ModuleStylesTrait;
	use ModuleScriptDataTrait;

	/**
	 * Dynamic module render callback which outputs server side rendered HTML on the Front-End.
	 *
	 * @since ??
	 *
	 * @param array          $attrs                       Block attributes that were saved by VB.
	 * @param string         $content                     Rendered inner blocks (Elements children).
	 * @param \WP_Block      $block                       Parsed block object that being rendered.
	 * @param \ET\Builder\Packages\Module\Layout\Components\ModuleElements\ModuleElements $elements ModuleElements instance.
	 * @param array          $_default_printed_style_attrs Optional. Passed by ModuleRegistration.
	 *
	 * @return string HTML rendered of Dynamic module.
	 */
	public static function render_callback( $attrs, $content, $block, $elements, $_default_printed_style_attrs = [] ) {
		// Extract child module IDs from the block's innerBlocks.
		$children_ids = ChildrenUtils::extract_children_ids( $block );

		$post_heading_level = $attrs['postTitle']['decoration']['font']['font']['desktop']['value']['headingLevel'];
		$posts_per_page     = $attrs['postItems']['innerContent']['desktop']['value']['postsNumber'];

		$module_styles_markup = $elements->style_components(
			[
				'attrName' => 'module',
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
							'class' => 'example_dynamic_module__post-item-title',
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
							'class' => 'example_dynamic_module__post-item-content',
						],
						'childrenSanitizer' => 'et_core_esc_previously',
						'children'          => get_the_excerpt( $post ),
					]
				);

				// Post item.
				$post_items .= HTMLUtility::render(
					[
						'tag'               => 'div',
						'attributes'        => [
							'class' => 'example_dynamic_module__post-item',
						],
						'childrenSanitizer' => 'et_core_esc_previously',
						'children'          => $post_title_container . $post_content,
					]
				);
			}
		}

		// Title.
		$title = $elements->render(
			[
				'attrName' => 'title',
			]
		);

		// Posts container.
		if ( ! empty( $post_items ) ) {
			$posts_container = HTMLUtility::render(
				[
					'tag'               => 'div',
					'attributes'        => [
						'class' => 'example_dynamic_module__post-items',
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
					'children'          => __( 'No post found.', 'd5-extension-example-modules' ),
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
				'attrs'               => $attrs,
				'elements'            => $elements,
				'classnamesFunction'  => [ self::class, 'module_classnames' ],
				'stylesComponent'     => [ self::class, 'module_styles' ],
				'scriptDataComponent' => [ self::class, 'module_script_data' ],
				'parentAttrs'         => $parent_attrs,
				'parentId'            => $parent->id ?? '',
				'parentName'          => $parent->blockName ?? '',
				'childrenIds'         => $children_ids,
				'children'            => [
					$module_styles_markup,
					HTMLUtility::render(
						[
							'tag'               => 'div',
							'attributes'        => [
								'class' => 'example_dynamic_module__inner',
							],
							'childrenSanitizer' => 'et_core_esc_previously',
							'children'          => [
								$title,
								$posts_container,
							],
						]
					),
					$content,
				],
			]
		);
	}
}
