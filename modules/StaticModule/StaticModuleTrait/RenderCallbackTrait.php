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
use ET\Builder\FrontEnd\Assets\StaticCSS;
use ET\Builder\FrontEnd\Page;
use ET\Builder\Packages\Shortcode\ShortcodeUtils;
use ET_Post_Stack;
use ET_Theme_Builder_Layout;
use MEE\Modules\StaticModule\StaticModule;

trait RenderCallbackTrait {

	/**
	 * Render callback: Programmatically render library layout (Issue #46433).
	 *
	 * @since ??
	 * @param array          $attrs    Block attributes.
	 * @param string         $content  Block content.
	 * @param WP_Block       $block    Parsed block object.
	 * @param ModuleElements $elements ModuleElements instance.
	 *
	 * @return string HTML rendered layout.
	 */
	public static function render_callback( $attrs, $content, $block, $elements ) {
		// Test case: Render library layout programmatically for cache invalidation testing.
		$layout_id = 1464;

		$layout = get_post( $layout_id );

		if ( null === $layout || 'et_pb_layout' !== $layout->post_type ) {
			$error_message = HTMLUtility::render(
				[
					'tag'               => 'div',
					'attributes'        => [
						'class' => 'd5_test_programmatic_layout_error',
					],
					'childrenSanitizer' => 'esc_html',
					'children'          => 'Layout ' . $layout_id . ' not found',
				]
			);

			$parent       = BlockParserStore::get_parent( $block->parsed_block['id'], $block->parsed_block['storeInstance'] );
			$parent_attrs = $parent->attrs ?? [];

			return Module::render(
				[
					'orderIndex'          => $block->parsed_block['orderIndex'],
					'storeInstance'       => $block->parsed_block['storeInstance'],
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
								'children'          => $error_message,
							]
						),
					],
				]
			);
		}

		// Begin theme builder layout context.
		ET_Theme_Builder_Layout::begin_theme_builder_layout( $layout_id );
		ET_Post_Stack::replace( $layout );

		$post_content = get_the_content();
		ShortcodeUtils::wrap_shortcodes_for_theme_builder();

		// Render layout content.
		$layout_content = '';
		try {
			$layout_content = et_builder_render_layout( $post_content );
		} finally {
			ShortcodeUtils::unwrap_shortcodes_for_theme_builder();
			ET_Post_Stack::restore();
			ET_Theme_Builder_Layout::end_theme_builder_layout();
		}

		// Generate CSS on frontend only (VB handles CSS differently).
		if ( ! et_core_is_fb_enabled() ) {
			$has_dynamic_content = et_builder_frontend_get_dynamic_contents( $post_content );

			if ( is_singular() ) {
				$result = StaticCSS::setup_styles_manager( ET_Post_Stack::get_main_post_id() );
			} elseif ( is_tax() && ! empty( $has_dynamic_content ) ) {
				$result = StaticCSS::setup_styles_manager( 0 );
			} else {
				$result = StaticCSS::setup_styles_manager( $layout->ID );
			}

			$styles_manager          = $result['manager'];
			$deferred_styles_manager = $result['deferred'] ?? null;

			if ( StaticCSS::$forced_inline_styles || ! $styles_manager->has_file() || $styles_manager->forced_inline ) {
				$custom = Page::custom_css( $layout->ID );
				StaticCSS::style_output(
					[
						'styles_manager'          => $styles_manager,
						'deferred_styles_manager' => $deferred_styles_manager,
						'custom'                  => $custom,
						'element_id'              => $layout_id,
					]
				);
			}
		}

		$parent       = BlockParserStore::get_parent( $block->parsed_block['id'], $block->parsed_block['storeInstance'] );
		$parent_attrs = $parent->attrs ?? [];

		return Module::render(
			[
				'orderIndex'          => $block->parsed_block['orderIndex'],
				'storeInstance'       => $block->parsed_block['storeInstance'],
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
							'orderIndex'    => $block->parsed_block['orderIndex'],
							'storeInstance' => $block->parsed_block['storeInstance'],
						]
					),
					HTMLUtility::render(
						[
							'tag'               => 'div',
							'attributes'        => [
								'class' => 'example_static_module__inner d5_programmatic_layout_content',
							],
							'childrenSanitizer' => 'et_core_esc_previously',
							'children'          => et_core_intentionally_unescaped( $layout_content, 'html' ),
						]
					),
				],
			]
		);
	}
}
