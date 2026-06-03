<?php
/**
 * ModuleSettingsDemo::module_styles().
 *
 * @package MEE\Modules\ModuleSettingsDemo
 * @since ??
 */

namespace MEE\Modules\ModuleSettingsDemo\ModuleSettingsDemoTrait;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

use ET\Builder\FrontEnd\Module\Style;
use ET\Builder\Packages\Module\Layout\Components\StyleCommon\CommonStyle;
use ET\Builder\Packages\Module\Options\Css\CssStyle;

trait ModuleStylesTrait {

	use CustomCssTrait;

	/**
	 * Module Settings Demo style components.
	 *
	 * @since ??
	 *
	 * @param array $args Style arguments.
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
								'advancedStyles'           => [
									[
										'componentName' => 'divi/text',
										'props'         => [
											'selector'                => $order_class,
											'attr'                    => $attrs['module']['advanced']['text'] ?? [],
											'defaultPrintedStyleAttr' => $default_printed_style_attrs['module']['advanced']['text'] ?? [],
										],
									],
								],
							],
						]
					),
					$elements->style(
						[
							'attrName' => 'textInput',
						]
					),
					$elements->style(
						[
							'attrName' => 'richText',
						]
					),
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
