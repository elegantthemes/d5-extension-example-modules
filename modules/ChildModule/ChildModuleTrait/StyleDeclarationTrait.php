<?php
/**
 * ChildModule::icon_style_declaration().
 *
 * @package Builder\Packages\ModuleLibrary
 * @since ??
 */

namespace MEE\Modules\ChildModule\ChildModuleTrait;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

use ET\Builder\Packages\IconLibrary\IconFont\Utils;
use ET\Builder\Packages\StyleLibrary\Utils\StyleDeclarations;

trait StyleDeclarationTrait {
	/**
	 * Icon style declaration.
	 *
	 * This function will declare icon style for Toggle module.
	 *
	 * @param array $params {
	 *     An array of arguments.
	 *
	 *     @type array      $attrValue  The value (breakpoint > state > value) of module attribute.
	 *     @type bool|array $important  If set to true, the CSS will be added with !important.
	 *     @type string     $returnType This is the type of value that the function will return. Can be either string or key_value_pair.
	 * }
	 *
	 * @return string
	 * @since ??
	 */
	public static function icon_style_declaration( $params ) {
		$icon_attr = $params['attrValue'] ?? [];

		$style_declarations = new StyleDeclarations(
			[
				'returnType' => 'string',
				'important'  => [
					'font-family' => true,
					'content'     => true,
				],
			]
		);

		if ( ! empty( $icon_attr['unicode'] ) ) {
			$style_declarations->add( 'content', '"' . Utils::process_font_icon( $icon_attr ) . '"' );
		}

		if ( isset( $icon_attr['type'] ) ) {
			$font_family = 'fa' === $icon_attr['type'] ? 'FontAwesome' : 'ETmodules';
			$style_declarations->add( 'font-family', $font_family );
		}

		if ( ! empty( $icon_attr['color'] ) ) {
			$style_declarations->add( 'color', $icon_attr['color'] );
		}

		if ( ! empty( $size ) ) {
			$style_declarations->add( 'font-size', $size );
		}

		return $style_declarations->value;
	}

}
