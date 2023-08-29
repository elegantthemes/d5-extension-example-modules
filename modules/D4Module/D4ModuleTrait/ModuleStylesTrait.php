<?php
/**
 * D4Module::module_styles().
 *
 * @package MEE\Modules\D4Module
 * @since ??
 */

namespace MEE\Modules\D4Module\D4ModuleTrait;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

use ET\Builder\FrontEnd\Module\Style;
use ET\Builder\Packages\Module\Layout\Components\StyleCommon\CommonStyle;
use ET\Builder\Packages\Module\Options\Css\CssStyle;
use ET\Builder\Packages\Module\Options\Text\TextStyle;

trait ModuleStylesTrait {

	use CustomCssTrait;

	/**
	 * D4 module's style components.
	 *
	 * This function is equivalent of JS function ModuleStyles located in
	 * src/components/d4-module/styles.tsx.
	 *
	 * @since ??
	 *
	 * @param array $args {
	 *     An array of arguments.
	 *
	 *      @type string $id                Module ID. In VB, the ID of module is UUIDV4. In FE, the ID is order index.
	 *      @type string $name              Module name.
	 *      @type string $attrs             Module attributes.
	 *      @type string $parentAttrs       Parent attrs.
	 *      @type string $orderClass        Selector class name.
	 *      @type string $parentOrderClass  Parent selector class name.
	 *      @type string $wrapperOrderClass Wrapper selector class name.
	 *      @type string $settings          Custom settings.
	 *      @type string $state             Attributes state.
	 *      @type string $mode              Style mode.
	 *      @type ModuleElements $elements         ModuleElements instance.
	 * }
	 */
	public static function module_styles( $args ) {
		$attrs                       = $args['attrs'] ?? [];
		$elements                    = $args['elements'];
		$settings                    = $args['settings'] ?? [];
		$default_printed_style_attrs = $args['defaultPrintedStyleAttrs'] ?? [];
		$order_class                 = $args['orderClass'] ?? '';

		Style::add(
			[
				'id'            => $args['id'],
				'name'          => $args['name'],
				'orderIndex'    => $args['orderIndex'],
				'storeInstance' => $args['storeInstance'],
				'styles'        => [
					$elements->style(
						[
							'attrName'   => 'module',
							'styleProps' => [
								'defaultPrintedStyleAttrs' => $default_printed_style_attrs['module']['decoration'] ?? [],
								'disabledOn'               => [
									'disabledModuleVisibility' => $settings['disabledModuleVisibility'] ?? null,
								],
							],
						]
					),
					TextStyle::style(
						[
							'selector' => $order_class . ' .example_d4_module_inner',
							'attr'     => $attrs['module']['advanced']['text'] ?? [],
						]
					),
					// Set the `.example_d4_module_inner` element `position` to `relative` if the background image has parallax enabled.
					CommonStyle::style(
						[
							'selector'            => $order_class . ' .example_d4_module_inner',
							'attr'                => $attrs['module']['decoration']['background'] ?? [],
							'declarationFunction' => function ( $declaration_function_args ) {
								$attr_value = $declaration_function_args['attrValue'] ?? [];

								if ( 'on' === ( $attr_value['image']['parallax']['enabled'] ?? 'off' ) ) {
									return 'position: relative;';
								}

								return 'position: relative;';
							},
						]
					),
					CssStyle::style(
						[
							'selector'  => $args['orderClass'],
							'attr'      => $attrs['css'] ?? [],
							'cssFields' => self::custom_css(),
						]
					),

					// Title.
					$elements->style(
						[
							'attrName' => 'title',
						]
					),

					// Content.
					$elements->style(
						[
							'attrName' => 'content',
						]
					),
				],
			]
		);
	}

}
