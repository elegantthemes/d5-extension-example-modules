<?php
/**
 * ParentModule::custom_css().
 *
 * @package CAWeb\Modules\Parent
 * @since ??
 */

namespace CAWeb\Modules\Parent\ParentModuleTrait;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

trait CustomCssTrait {

	/**
	 * Custom CSS fields
	 *
	 * This function is equivalent of JS const cssFields located in
	 * src/components/parent-module/custom-css.ts.
	 *
	 * A minor difference with the JS const cssFields, this function did not have `label` property on each array item.
	 *
	 * @since ??
	 */
	public static function custom_css() {
		return \WP_Block_Type_Registry::get_instance()->get_registered( 'example/parent-module' )->customCssFields;
	}

}
