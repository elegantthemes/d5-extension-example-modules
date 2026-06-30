<?php
/**
 * PHPUnit bootstrap for d5-extension-example-modules.
 *
 * @package D5ExtensionExampleModules\Tests
 */

require_once __DIR__ . '/test-environment.php';

define( 'D5_EXTENSION_EXAMPLE_MODULES_PLUGIN_ROOT', d5_extension_example_modules_get_plugin_root_path() );

d5_extension_example_modules_load_dotenv_file( __DIR__ . '/.env' );

if ( ! defined( 'WP_TESTS_CONFIG_FILE_PATH' ) ) {
	define( 'WP_TESTS_CONFIG_FILE_PATH', __DIR__ . '/wp-tests-config.php' );
}

$phpunitPolyfillsAutoloadPath = D5_EXTENSION_EXAMPLE_MODULES_PLUGIN_ROOT . '/vendor/yoast/phpunit-polyfills/phpunitpolyfills-autoload.php';

if ( ! file_exists( $phpunitPolyfillsAutoloadPath ) ) {
	fwrite( STDERR, 'Error: PHPUnit Polyfills autoload file is missing. Run `composer install` first.' . PHP_EOL );
	exit( 1 );
}

require $phpunitPolyfillsAutoloadPath;

$diviThemeRootPath = d5_extension_example_modules_get_divi_theme_root_path();

if ( '' === $diviThemeRootPath ) {
	fwrite( STDERR, 'Error: DIVI_PATH environment variable is not set.' . PHP_EOL );
	fwrite( STDERR, 'Tip: Copy tests/php/.env.example to tests/php/.env and update the paths.' . PHP_EOL );
	exit( 1 );
}

$diviWpTestsBootstrapPath = d5_extension_example_modules_get_divi_wp_tests_bootstrap_path();

if ( ! file_exists( $diviWpTestsBootstrapPath ) ) {
	fwrite( STDERR, 'Error: Divi WP test bootstrap was not found at: ' . $diviWpTestsBootstrapPath . PHP_EOL );
	exit( 1 );
}

$diviWpTestsFunctionsPath = $diviThemeRootPath . '/includes/builder-5/server/__TESTS__/config/includes/functions.php';

if ( ! file_exists( $diviWpTestsFunctionsPath ) ) {
	fwrite( STDERR, 'Error: Divi WP test functions file was not found at: ' . $diviWpTestsFunctionsPath . PHP_EOL );
	exit( 1 );
}

require $diviWpTestsFunctionsPath;

tests_add_filter(
	'muplugins_loaded',
	static function (): void {
		$pluginMainFilePath = D5_EXTENSION_EXAMPLE_MODULES_PLUGIN_ROOT . '/d5-extension-example-modules.php';

		if ( file_exists( $pluginMainFilePath ) ) {
			require $pluginMainFilePath;
		}
	}
);

require $diviWpTestsBootstrapPath;
