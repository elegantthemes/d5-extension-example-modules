<?php
/**
 * Shared helpers for the plugin PHPUnit environment.
 *
 * @package D5ExtensionExampleModules\Tests
 */

/**
 * Returns the absolute path to the plugin root directory.
 *
 * @return string
 */
function d5_extension_example_modules_get_plugin_root_path(): string {
	return dirname( __DIR__, 2 );
}

/**
 * Reads an environment variable as a trimmed string.
 *
 * @param string $environmentKey Environment variable name.
 *
 * @return string
 */
function d5_extension_example_modules_get_env_string( string $environmentKey ): string {
	$environmentValue = $_ENV[ $environmentKey ] ?? getenv( $environmentKey );

	if ( false === $environmentValue || null === $environmentValue ) {
		return '';
	}

	return trim( (string) $environmentValue );
}

/**
 * Loads key/value pairs from a dotenv file into the process environment.
 *
 * @param string $dotenvFilePath Absolute path to the dotenv file.
 *
 * @return void
 */
function d5_extension_example_modules_load_dotenv_file( string $dotenvFilePath ): void {
	if ( ! is_readable( $dotenvFilePath ) ) {
		return;
	}

	$dotenvLines = file( $dotenvFilePath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES );

	if ( false === $dotenvLines ) {
		return;
	}

	foreach ( $dotenvLines as $dotenvLine ) {
		$trimmedLine = trim( $dotenvLine );

		if ( '' === $trimmedLine || '#' === substr( $trimmedLine, 0, 1 ) ) {
			continue;
		}

		$keyValuePair = explode( '=', $trimmedLine, 2 );

		if ( 2 !== count( $keyValuePair ) ) {
			continue;
		}

		$environmentKey   = trim( $keyValuePair[0] );
		$environmentValue = trim( $keyValuePair[1], " \t\n\r\0\x0B\"'" );

		putenv( "{$environmentKey}={$environmentValue}" );
		$_ENV[ $environmentKey ] = $environmentValue;
	}
}

/**
 * Resolves the Divi theme root path from DIVI_PATH.
 *
 * @return string
 */
function d5_extension_example_modules_get_divi_theme_root_path(): string {
	$diviThemeRootPath = d5_extension_example_modules_get_env_string( 'DIVI_PATH' );

	return rtrim( $diviThemeRootPath, '/\\' );
}

/**
 * Resolves the absolute path to Divi's WP test bootstrap file.
 *
 * @return string
 */
function d5_extension_example_modules_get_divi_wp_tests_bootstrap_path(): string {
	$diviThemeRootPath = d5_extension_example_modules_get_divi_theme_root_path();

	return $diviThemeRootPath . '/includes/builder-5/server/__TESTS__/config/wp-tests-bootstrap.php';
}
