<?php
/**
 * D4Module::module_script_data()
 *
 * @package MEE\Modules\D4Module
 * @since ??
 */

namespace MEE\Modules\D4Module\D4ModuleTrait;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

use ET\Builder\Packages\Module\Options\Sticky\StickyScriptData;
use ET\Builder\Framework\Utility\ArrayUtility;

trait ModuleScriptDataTrait {

	/**
	 * Set script data of used module options.
	 *
	 * @since ??
	 *
	 * @param array $args {
	 *   Array of arguments.
	 *
	 *   @type string $id       Module id.
	 *   @type string $selector Module selector.
	 *   @type array  $attrs    Module attributes.
	 * }
	 */
	public static function module_script_data( $args ) {
		$args = wp_parse_args(
			$args,
			[
				'id'       => '',
				'selector' => '',
				'attrs'    => [],
			]
		);

		// Sticky Options.
		StickyScriptData::set(
			[
				'id'             => $args['id'],
				'selector'       => $args['selector'],
				'affectingAttrs' => [
					'position' => ArrayUtility::get_value( $args['attrs'], [ 'position' ], [] ),
					'scroll'   => ArrayUtility::get_value( $args['attrs'], [ 'scroll' ], [] ),
				],
				'attr'           => ArrayUtility::get_value( $args['attrs'], [ 'sticky' ] ),
			]
		);
	}

}
