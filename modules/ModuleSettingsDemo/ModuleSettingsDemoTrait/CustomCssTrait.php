<?php
/**
 * ModuleSettingsDemo::custom_css().
 *
 * @package MEE\Modules\ModuleSettingsDemo
 * @since ??
 */

namespace MEE\Modules\ModuleSettingsDemo\ModuleSettingsDemoTrait;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

trait CustomCssTrait {

	/**
	 * Custom CSS fields.
	 *
	 * @since ??
	 */
	public static function custom_css() {
		return \WP_Block_Type_Registry::get_instance()->get_registered( 'example/module-settings-demo' )->customCssFields;
	}
}
