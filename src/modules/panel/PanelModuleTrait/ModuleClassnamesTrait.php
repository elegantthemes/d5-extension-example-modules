<?php
/**
 * PanelModule::module_classnames().
 *
 * @package CAWeb\Modules\Panel
 * @since ??
 */

namespace CAWeb\Modules\Panel\PanelModuleTrait;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

use ET\Builder\Packages\Module\Options\Text\TextClassnames;

trait ModuleClassnamesTrait {

	/**
	 * Module classnames function for Panel module.
	 *
	 * This function is equivalent of JS function moduleClassnames located in
	 * src/components/Panel-module/module-classnames.ts.
	 *
	 * @since ??
	 *
	 * @param array $args {
	 *     An array of arguments.
	 *
	 *     @type object $classnamesInstance Instance of ET\Builder\Packages\Module\Layout\Components\Classnames.
	 *     @type array  $attrs              Block attributes data that being rendered.
	 * }
	 */
	public static function module_classnames( $args ) {
		$classnames_instance = $args['classnamesInstance'];
		$attrs               = $args['attrs'];

		$text_options_classnames = TextClassnames::text_options_classnames( $attrs['module']['advanced']['text'] ?? [] );

		if ( $text_options_classnames ) {
			$classnames_instance->add( $text_options_classnames, true );
		}
	}

}
