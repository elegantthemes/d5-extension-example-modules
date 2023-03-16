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
use ET\Builder\Packages\Module\Options\Background\BackgroundStyle;
use ET\Builder\Packages\Module\Options\Text\TextStyle;
use ET\Builder\Packages\Module\Options\Font\FontStyle;
use ET\Builder\Packages\Module\Options\FontBodyGroup\FontBodyStyle;
use ET\Builder\Packages\Module\Options\Sizing\SizingStyle;
use ET\Builder\Packages\Module\Options\Spacing\SpacingStyle;
use ET\Builder\Packages\Module\Options\Border\BorderStyle;
use ET\Builder\Packages\Module\Options\BoxShadow\BoxShadowStyle;
use ET\Builder\Packages\Module\Options\Filters\FiltersStyle;
use ET\Builder\Packages\Module\Options\Transform\TransformStyle;
use ET\Builder\Packages\Module\Options\Css\CssStyle;
use ET\Builder\Packages\Module\Options\DisabledOn\DisabledOnStyle;
use ET\Builder\Packages\Module\Options\Overflow\OverflowStyle;
use ET\Builder\Packages\Module\Options\Position\PositionStyle;
use ET\Builder\Packages\Module\Options\ZIndex\ZIndexStyle;
use ET\Builder\Packages\Module\Layout\Components\StyleCommon\CommonStyle;

trait ModuleStylesTrait {

	use CustomCssTrait;

	/**
	 * Child Module's style components.
	 *
	 * This function is equivalent of JS function ModuleStyles located in
	 * visual-builder/packages/module-library/src/components/cta/styles.tsx.
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
	 * }
	 */
	public static function module_styles( $args ) {
		$attrs                   = isset( $args['attrs'] ) ? $args['attrs'] : [];
		$order_class             = $args['orderClass'];
		$icon_class              = "{$order_class} .child-module__icon.et-pb-icon";
		$title_class             = "{$order_class} .child-module__title";
		$content_container_class = "{$order_class} .child-module__content-container";
		$content_class           = "{$order_class} .child-module__content";

		Style::add(
			[
				'id'            => $args['id'],
				'name'          => $args['name'],
				'orderIndex'    => $args['orderIndex'],
				'storeInstance' => $args['storeInstance'],
				'styles'        => [
					BackgroundStyle::style(
						[
							'selector' => $args['orderClass'],
							'attr'     => isset( $attrs['background'] ) ? $attrs['background'] : [],
						]
					),
					CommonStyle::style(
						[
							'selector' => $icon_class,
							'attr'     => isset( $attrs['iconColor'] ) ? $attrs['iconColor'] : [],
							'property' => 'color',
						]
					),
					CommonStyle::style(
						[
							'selector' => $icon_class,
							'attr'     => isset( $attrs['iconSize'] ) ? $attrs['iconSize'] : [],
							'property' => 'font-size',
						]
					),
					TextStyle::style(
						[
							'selector' => $content_container_class,
							'attr'     => isset( $attrs['text'] ) ? $attrs['text'] : [],
						]
					),
					FontStyle::style(
						[
							'selector' => $title_class,
							'attr'     => isset( $attrs['titleFont'] ) ? $attrs['titleFont'] : [],
						]
					),
					FontBodyStyle::font_body_style(
						[
							'selector' => $content_class,
							'attr'     => isset( $attrs['bodyFont'] ) ? $attrs['bodyFont'] : [],
						]
					),
					SizingStyle::style(
						[
							'selector' => $args['orderClass'],
							'attr'     => isset( $attrs['sizing'] ) ? $attrs['sizing'] : [],
						]
					),
					SpacingStyle::style(
						[
							'selector' => $args['orderClass'],
							'attr'     => isset( $attrs['spacing'] ) ? $attrs['spacing'] : [],
						]
					),
					BorderStyle::style(
						[
							'selector' => $args['orderClass'],
							'attr'     => isset( $attrs['border'] ) ? $attrs['border'] : [],
						]
					),
					BoxShadowStyle::style(
						[
							'selector' => $args['orderClass'],
							'attr'     => isset( $attrs['boxShadow'] ) ? $attrs['boxShadow'] : [],
						]
					),
					FiltersStyle::style(
						[
							'selector' => $args['orderClass'],
							'attr'     => isset( $attrs['filter'] ) ? $attrs['filter'] : [],
						]
					),
					TransformStyle::style(
						[
							'selector' => $args['orderClass'],
							'attr'     => isset( $attrs['transform'] ) ? $attrs['transform'] : [],
						]
					),
					CssStyle::style(
						[
							'selector'  => $args['orderClass'],
							'attr'      => isset( $attrs['css'] ) ? $attrs['css'] : [],
							'cssFields' => self::custom_css(),
						]
					),
					DisabledOnStyle::style(
						[
							'selector'                 => $args['orderClass'],
							'attr'                     => isset( $attrs['disabledOn'] ) ? $attrs['disabledOn'] : [],
							'disabledModuleVisibility' => isset( $args['settings']['disabledModuleVisibility'] ) ? $args['settings']['disabledModuleVisibility'] : null,
						]
					),
					OverflowStyle::style(
						[
							'selector' => $args['orderClass'],
							'attr'     => isset( $attrs['overflow'] ) ? $attrs['overflow'] : [],
						]
					),
					PositionStyle::style(
						[
							'selector' => $args['orderClass'],
							'attr'     => isset( $attrs['position'] ) ? $attrs['position'] : [],
						]
					),
					ZIndexStyle::style(
						[
							'selector' => $args['orderClass'],
							'attr'     => isset( $attrs['zIndex'] ) ? $attrs['zIndex'] : [],
						]
					),

				],
			]
		);
	}

}
