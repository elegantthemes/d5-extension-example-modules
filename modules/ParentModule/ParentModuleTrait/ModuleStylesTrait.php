<?php
/**
 * ParentModule::module_styles().
 *
 * @package MEE\Modules\ParentModule
 * @since ??
 */

namespace MEE\Modules\ParentModule\ParentModuleTrait;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

use ET\Builder\FrontEnd\Module\Style;
use ET\Builder\Packages\Module\Layout\Components\StyleCommon\CommonStyle;
use ET\Builder\Packages\Module\Options\Css\CssStyle;
use MEE\Modules\ChildModule\ChildModule;

trait ModuleStylesTrait {

	use CustomCssTrait;

	/**
	 * Child Module's style components.
	 *
	 * This function is equivalent of JS function ModuleStyles located in
	 * src/components/parent-module/styles.tsx.
	 *
	 * @param array $args {
	 *     An array of arguments.
	 *
	 * @type string $id Module ID. In VB, the ID of module is UUIDV4. In FE, the ID is order index.
	 * @type string $name Module name.
	 * @type string $attrs Module attributes.
	 * @type string $parentAttrs Parent attrs.
	 * @type string $orderClass Selector class name.
	 * @type string $parentOrderClass Parent selector class name.
	 * @type string $wrapperOrderClass Wrapper selector class name.
	 * @type string $settings Custom settings.
	 * @type string $state Attributes state.
	 * @type string $mode Style mode.
	 * @type ModuleElements $elements ModuleElements instance.
	 * }
	 * @since ??
	 */
	public static function module_styles( $args ) {
		$attrs        = $args['attrs'] ?? [];
		$parent_attrs = $args['parentAttrs'] ?? [];
		$order_class  = $args['orderClass'];
		$elements     = $args['elements'];
		$settings     = $args['settings'] ?? [];

		Style::add(
			[
				'id'            => $args['id'],
				'name'          => $args['name'],
				'orderIndex'    => $args['orderIndex'],
				'storeInstance' => $args['storeInstance'],
				'styles'        => [
					// Module.
					$elements->style(
						[
							'attrName'   => 'module',
							'styleProps' => [
								'disabledOn' => [
									'disabledModuleVisibility' => $settings['disabledModuleVisibility'] ?? null,
								],
							],
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

					// Icon.
					$elements->style(
						[
							'attrName'   => 'icon',
							'styleProps' => [
								'advancedStyles' => [
									[
										'componentName' => 'divi/common',
										'props'         => [
											'attr'                => $attrs['icon']['innerContent'] ?? [],
											'declarationFunction' => [ChildModule::class, 'icon_font_declaration'],
										]
									],
									[
										'componentName' => 'divi/common',
										'props'         => [
											'attr'     => $attrs['icon']['advanced']['color'] ?? [],
											'property' => 'color',
										]
									],
									[
										'componentName' => 'divi/common',
										'props'         => [
											'attr'     => $attrs['icon']['advanced']['size'] ?? [],
											'property' => 'font-size',
										]
									],
								]
							]
						]
					),

					/*
					 * We need to add CssStyle at the very bottom of other
					 * components so that custom css can override module styles
					 * till we find a more elegant solution.
					 */
					CssStyle::style(
						[
							'selector'  => $args['orderClass'],
							'attr'      => $attrs['css'] ?? [],
							'cssFields' => self::custom_css(),
						]
					),

					// ATTENTION: The code is intentionally added and commented in FE only as an example of expected value format.
					// If you have custom style processing, the style output should be passed as an `array` of style declarations
					// to the `styles` property of the `Style::add` method. For example:
					// [
					// 	[
					// 		'atRules'     => false,
					// 		'selector'    => $icon_selector,
					// 		'declaration' => 'color: red;'
					// 	],
					// 	[
					// 		'atRules'     => '@media only screen and (max-width: 767px)',
					// 		'selector'    => $icon_selector,
					// 		'declaration' => 'color: green;'
					// 	],
					// ],

					// The code below is an example of how to use the `CssStyle::style` method to generate CSS style.
					CssStyle::style(
						[
							'selector'  => $args['orderClass'],
							'attr'      => $attrs['css'] ?? [],
							'cssFields' => self::custom_css(),
						]
					),
				],
			]
		);
	}

}