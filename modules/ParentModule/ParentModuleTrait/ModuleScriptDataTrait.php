<?php
/**
 * Module Library: Parent Module - Script Data
 *
 * @package Builder\Packages\ParentModule
 * @since ??
 */

namespace MEE\Modules\ParentModule\ParentModuleTrait;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

use ET\Builder\Packages\Module\Options\Sticky\StickyScriptData;

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
					'position' => $args['attrs']['position'] ?? [],
					'scroll'   => $args['attrs']['scroll'] ?? [],
				],
				'attr'           => $args['attrs']['sticky'] ?? null,
			]
		);
	}

}
