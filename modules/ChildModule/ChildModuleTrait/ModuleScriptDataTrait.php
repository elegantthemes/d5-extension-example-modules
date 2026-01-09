<?php
/**
 * ChildModule::module_script_data()
 *
 * @package MEE\Modules\ChildModule
 * @since ??
 */

namespace MEE\Modules\ChildModule\ChildModuleTrait;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

trait ModuleScriptDataTrait {

	/**
	 * Child module script data.
	 *
	 * This function assigns variables and sets script data options for the module.
	 *
	 * This function is equivalent to the JavaScript function
	 * {@link /docs/builder-api/js-beta/divi-module-library/functions/generateDefaultAttrs ModuleScriptData}
	 * located in `@divi/module-library`.
	 *
	 * @since ??
	 *
	 * @param array $args {
	 *     Optional. An array of arguments for setting the module script data.
	 *
	 *     @type string         $id            The module ID.
	 *     @type string         $name          The module name.
	 *     @type string         $selector      The module selector.
	 *     @type array          $attrs         The module attributes.
	 *     @type int            $storeInstance The ID of the instance where this block is stored in the `BlockParserStore` class.
	 *     @type ModuleElements $elements      The `ModuleElements` instance.
	 *     @type array          $parentAttrs   The parent module attributes.
	 * }
	 *
	 * @return void
	 */
	public static function module_script_data( array $args ): void {
		// Assign variables.
		$elements     = $args['elements'];
		$parent_attrs = $args['parentAttrs'] ?? [];

		// Element Script Data Options.
		$elements->script_data(
			[
				'attrName' => 'module',
			]
		);
	}
}

