<?php
/**
 * Static Module REST Controller class.
 *
 * @package MEE\Modules\StaticModule\StaticModuleTrait
 * @since ??
 */

namespace MEE\Modules\StaticModule\StaticModuleTrait;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

use ET\Builder\Framework\Controllers\RESTController;
use ET\Builder\Framework\UserRole\UserRole;
use ET\Builder\FrontEnd\Assets\StaticCSS;
use ET\Builder\FrontEnd\Module\Style;
use ET\Builder\FrontEnd\Page;
use ET\Builder\Packages\Shortcode\ShortcodeUtils;
use ET_Post_Stack;
use ET_Theme_Builder_Layout;
use WP_REST_Request;
use WP_REST_Response;

/**
 * Static Module REST Controller class.
 *
 * @since ??
 */
class StaticModuleRESTController extends RESTController {

	/**
	 * Retrieve the rendered HTML for the Static Module (programmatic layout rendering).
	 *
	 * @since ??
	 *
	 * @param WP_REST_Request $request REST request object.
	 *
	 * @return WP_REST_Response Returns the REST response object containing the rendered HTML.
	 */
	public static function index( WP_REST_Request $request ): WP_REST_Response {
		// Test case: Render library layout programmatically for cache invalidation testing.
		$layout_id = 1464;

		$layout = get_post( $layout_id );

		if ( null === $layout || 'et_pb_layout' !== $layout->post_type ) {
			$error_html = '<div class="d5_test_programmatic_layout_error">Layout ' . esc_html( $layout_id ) . ' not found</div>';

			return self::response_success(
				[
					'html' => $error_html,
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

		// Capture CSS generated during rendering (for D4/shortcode modules).
		$module_css = '';
		if ( et_is_shortcode_framework_loaded() ) {
			$module_css = \ET_Builder_Element::get_style( false, $layout_id );
		}

		// Generate CSS for D5 modules.
		$custom_css = Page::custom_css( $layout->ID );

		// Combine all CSS.
		$all_css = $custom_css . $module_css;

		// Wrap CSS in style tag for inline inclusion.
		$css_output = '';
		if ( ! empty( $all_css ) ) {
			$css_output = '<style id="d5-static-module-layout-' . esc_attr( $layout_id ) . '-css">' . et_core_esc_previously( $all_css ) . '</style>';
		}

		// Combine HTML and CSS.
		$html_with_styles = $layout_content . $css_output;

		return self::response_success(
			[
				'html' => $html_with_styles,
			]
		);
	}

	/**
	 * Get the arguments for the index action.
	 *
	 * @since ??
	 *
	 * @return array An array of arguments for the index action.
	 */
	public static function index_args(): array {
		return [];
	}

	/**
	 * Provides the permission status for the index action.
	 *
	 * @since ??
	 *
	 * @return bool Returns `true` if the current user has the permission to use the rest endpoint, otherwise `false`.
	 */
	public static function index_permission(): bool {
		return UserRole::can_current_user_use_visual_builder();
	}
}

