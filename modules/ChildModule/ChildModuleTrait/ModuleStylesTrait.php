<?php
/**
 * ChildModule::module_styles().
 *
 * @package Builder\Packages\ModuleLibrary
 * @since ??
 */

namespace MEE\Modules\ChildModule\ChildModuleTrait;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

use ET\Builder\FrontEnd\Module\Style;
use ET\Builder\Packages\Module\Options\Text\TextStyle;
use ET\Builder\Packages\Module\Options\Css\CssStyle;
use ET\Builder\Packages\Module\Layout\Components\StyleCommon\CommonStyle;
use ET\Builder\Packages\ModuleLibrary\ModuleRegistration;
use MEE\Modules\ChildModule\ChildModule;

trait ModuleStylesTrait {

	use CustomCssTrait;
	use StyleDeclarationTrait;

	/**
	 * Child Module's style components.
	 *
	 * This function is equivalent of JS function ModuleStyles located in
	 * src/components/child-module/styles.tsx.
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
		$order_class  = $args['orderClass'];
		$elements     = $args['elements'];
		$settings     = $args['settings'] ?? [];
		$parent_attrs = $args['parentAttrs'] ?? [];

		$parent_default_attributes = ModuleRegistration::get_default_attrs( 'example/parent-module' );
		$parent_attrs_with_default = array_replace_recursive( $parent_default_attributes, $parent_attrs );

		$icon_selector              = "{$order_class} .example_child_module__icon.et-pb-icon";
		$content_container_selector = "{$order_class} .example_child_module__content-container";

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
					TextStyle::style(
						[
							'selector' => $content_container_selector,
							'attr'     => $attrs['module']['advanced']['text'] ?? [],
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
							'attr'                => $attrs['icon']['innerContent'] ?? $parent_attrs_with_default['icon']['innerContent'] ?? [],
							'declarationFunction' => [ ChildModule::class, 'icon_font_declaration' ],
						]
					),
					CommonStyle::style(
						[
							'selector' => $icon_selector,
							'attr'     => $attrs['icon']['advanced']['color'] ?? $parent_attrs_with_default['icon']['advanced']['color'] ?? [],
							'property' => 'color',
						]
					),
					CommonStyle::style(
						[
							'selector' => $icon_selector,
							'attr'     => $attrs['icon']['advanced']['size'] ?? $parent_attrs_with_default['icon']['advanced']['size'] ?? [],
							'property' => 'font-size',
						]
					),
				],
			]
		);
	}

}
