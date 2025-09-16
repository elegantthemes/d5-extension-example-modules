<?php
/**
 * DynamicModule::module_styles().
 *
 * @package MEE\Modules\DynamicModule
 * @since ??
 */

namespace MEE\Modules\DynamicModule\DynamicModuleTrait;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

use ET\Builder\FrontEnd\Module\Style;
use ET\Builder\Packages\Module\Options\Text\TextStyle;

trait ModuleStylesTrait {

	/**
	 * Dynamic Module's style components.
	 *
	 * This function is equivalent of JS function ModuleStyles located in
	 * src/components/dynamic-module/styles.tsx.
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
	 *      @type ModuleElements $elements  ModuleElements instance.
	 * }
	 */
	public static function module_styles( $args ) {
		$elements                    = $args['elements'];
		$settings                    = $args['settings'] ?? [];
		$default_printed_style_attrs = $args['defaultPrintedStyleAttrs'] ?? [];
		$attrs                       = $args['attrs'] ?? [];
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
								'advancedStyles'           => [
									[
										'componentName' => 'divi/text',
										'props'         => [
											'selector' => $order_class . ' .example_dynamic_module__inner',
											'attr'     => $attrs['module']['advanced']['text'] ?? [],
										],
									],
								],
							],
						]
					),
					$elements->style(
						[
							'attrName' => 'title',
						]
					),
					$elements->style(
						[
							'attrName' => 'postTitle',
						]
					),

					// ATTENTION: The code is intentionally added and commented in FE only as an example of expected value format.
					// If you have custom style processing, the style output should be passed as an `array` of style declarations
					// to the `styles` property of the `Style::add` method. For example:
					// [
					// 	[
					// 		'atRules'     => false,
					// 		'selector'    => $order_class . ' .example_dynamic_module__inner',
					// 		'declaration' => 'color: red;'
					// 	],
					// 	[
					// 		'atRules'     => '@media only screen and (max-width: 767px)',
					// 		'selector'    => $order_class . ' .example_dynamic_module__inner',
					// 		'declaration' => 'color: green;'
					// 	],
					// ],
				],
			]
		);
	}

}
