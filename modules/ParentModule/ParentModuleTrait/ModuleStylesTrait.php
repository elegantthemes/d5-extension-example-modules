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
use ET\Builder\Packages\ModuleLibrary\Portfolio\PortfolioModuleTraits\StyleDeclarationTrait;
use MEE\Modules\ChildModule\ChildModule;

trait ModuleStylesTrait {

	use CustomCssTrait;
	use StyleDeclarationTrait;

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

		$icon_selector = "{$order_class} .et-pb-icon";

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

					// Icon.
					CommonStyle::style(
						[
							'selector'            => $icon_selector,
							'attr'                => $attrs['icon']['innerContent'] ?? [],
							'declarationFunction' => [ ChildModule::class, 'icon_font_declaration' ],
						]
					),
					CommonStyle::style(
						[
							'selector' => $icon_selector,
							'attr'     => $attrs['icon']['advanced']['color'] ?? [],
							'property' => 'color',
						]
					),
					CommonStyle::style(
						[
							'selector' => $icon_selector,
							'attr'     => $attrs['icon']['advanced']['size'] ?? [],
							'property' => 'font-size',
						]
					),
				],
			]
		);
	}

}
