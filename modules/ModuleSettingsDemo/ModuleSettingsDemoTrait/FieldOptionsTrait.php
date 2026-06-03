<?php
/**
 * Field option label maps for Module Settings Demo.
 *
 * Keep keys/labels in sync with src/components/module-settings-demo/constants.ts.
 *
 * @package MEE\Modules\ModuleSettingsDemo
 * @since ??
 */

namespace MEE\Modules\ModuleSettingsDemo\ModuleSettingsDemoTrait;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

trait FieldOptionsTrait {

	/**
	 * Select option key => label map.
	 *
	 * @since ??
	 *
	 * @return array<string, string>
	 */
	public static function get_select_options(): array {
		return [
			'option_a' => 'Option A',
			'option_b' => 'Option B',
			'option_c' => 'Option C',
		];
	}

	/**
	 * Checkbox option key => label map (ordered).
	 *
	 * @since ??
	 *
	 * @return array<string, string>
	 */
	public static function get_checkbox_options(): array {
		return [
			'option_1' => 'Option 1',
			'option_2' => 'Option 2',
			'option_3' => 'Option 3',
			'option_4' => 'Option 4',
		];
	}

	/**
	 * Resolve select option key to display label.
	 *
	 * @since ??
	 *
	 * @param string $key Stored option key.
	 *
	 * @return string
	 */
	public static function get_select_label( string $key ): string {
		if ( '' === $key ) {
			return '';
		}

		$options = self::get_select_options();

		return $options[ $key ] ?? '';
	}

	/**
	 * Resolve checkbox keys to comma-separated labels.
	 *
	 * @since ??
	 *
	 * @param array $keys Stored option keys.
	 *
	 * @return string
	 */
	public static function get_checkbox_labels( array $keys ): string {
		if ( empty( $keys ) ) {
			return '';
		}

		$options = self::get_checkbox_options();
		$labels  = [];

		// Output labels in ascending option order (1, 2, 3, 4), not selection order.
		foreach ( $options as $key => $label ) {
			if ( in_array( $key, $keys, true ) ) {
				$labels[] = $label;
			}
		}

		return implode( ', ', $labels );
	}
}
