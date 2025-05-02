<?php

namespace D5TUTSimpleQuickModule;

if ( ! defined( 'ABSPATH' ) ) {
    die( 'Direct access forbidden.' );
}

require_once ABSPATH . 'wp-content/themes/Divi/includes/builder-5/server/Framework/DependencyManagement/Interfaces/DependencyInterface.php';

use ET\Builder\Framework\DependencyManagement\Interfaces\DependencyInterface;
use ET\Builder\Framework\Utility\HTMLUtility;
use ET\Builder\FrontEnd\Module\Style;
use ET\Builder\Packages\Module\Module;
use ET\Builder\Packages\Module\Options\Element\ElementClassnames;
use ET\Builder\Packages\ModuleLibrary\ModuleRegistration;

/**
 * Class that handle "CAWeb Panel Module" module output in frontend.
 */
class D5TutorialSimpleQuickModule implements DependencyInterface {
    /**
     * Register module.
     * `DependencyInterface` interface ensures class method name `load()` is executed for initialization.
     */
    public function load() {
        // Register module.
        add_action( 'init', [ D5TutorialSimpleQuickModule::class, 'register_module' ] );
    }

    /**
     * Register module.
     */
    public static function register_module() {
        // Path to module metadata that is shared between Frontend and Visual Builder.
        $module_json_folder_path = dirname( __DIR__, 1 ) . '/src';

        ModuleRegistration::register_module(
            $module_json_folder_path,
            [
                'render_callback' => [ D5TutorialSimpleQuickModule::class, 'render_callback' ],
            ]
        );
    }

    /**
     * Render module style.
     */
    public static function module_styles( $args ) {
        $attrs    = $args['attrs'] ?? [];
        $elements = $args['elements'];

        Style::add(
            [
                'id'            => $args['id'],
                'name'          => $args['name'],
                'orderIndex'    => $args['orderIndex'],
                'storeInstance' => $args['storeInstance'],
                'styles'        => [
                    // Module.
                    $elements->style(
                        [
                            'attrName'   => 'module',
                            'styleProps' => [
                                'disabledOn' => [
                                    'disabledModuleVisibility' => $args['settings']['disabledModuleVisibility'] ?? null,
                                ],
                            ],
                        ]
                    ),
                    // Title.
                    $elements->style(
                        [
                            'attrName' => 'title',
                        ]
                    ),
                    // Content.
                    $elements->style(
                        [
                            'attrName' => 'content',
                        ]
                    ),
                ],
            ]
        );
    }

    /**
     * Render module script data.
     */
    public static function module_script_data( $args ) {
        $elements = $args['elements'];

        // Element Script Data Options.
        $elements->script_data(
            [
                'attrName' => 'module',
            ]
        );
    }

    /**
     * Render module classnames.
     */
    public static function module_classnames( $args ) {
        $classnames_instance = $args['classnamesInstance'];
        $attrs               = $args['attrs'];

        // Module.
        $classnames_instance->add(
            ElementClassnames::classnames(
                [
                    'attrs' => $attrs['module']['decoration'] ?? [],
                ]
            )
        );
    }

    /**
     * Render module HTML output.
     */
    public static function render_callback( $attrs, $content, $block, $elements ) {
        // Title.
        $title = $elements->render(
            [
                'attrName' => 'title',
            ]
        );

        // Content.
        $content = $elements->render(
            [
                'attrName' => 'content',
            ]
        );

        // Module Inner.
        // Essentially, this is the module content.
        // Were wrapping the title and content in a div with class `et_pb_module_inner`.
        $module_inner = HTMLUtility::render(
            [
                'tag'               => 'div',
                'attributes'        => [
                    'class' => 'et_pb_module_inner',
                ],
                'childrenSanitizer' => 'et_core_esc_previously',
                'children'          => $title . $content,
            ]
        );

        // This are the module elements that will be rendered in the frontend.
        $module_elements = $elements->style_components(
            [
                'attrName' => 'module',
            ]
        );

        // This are the children of the module container, which are the module elements and the module inner.
        $module_container_children = $module_elements . $module_inner;

        return Module::render(
            [
                // FE only.
                'orderIndex'          => $block->parsed_block['orderIndex'],
                'storeInstance'       => $block->parsed_block['storeInstance'],

                // VB equivalent.
                'attrs'               => $attrs,
                'elements'            => $elements,
                'id'                  => $block->parsed_block['id'],
                'moduleClassName'     => 'et_pb_ca_panel',
                'name'                => $block->block_type->name,
                'classnamesFunction'  => [ D5TutorialSimpleQuickModule::class, 'module_classnames' ],
                'moduleCategory'      => $block->block_type->category,
                'stylesComponent'     => [ D5TutorialSimpleQuickModule::class, 'module_styles' ],
                'scriptDataComponent' => [ D5TutorialSimpleQuickModule::class, 'module_script_data' ],
                'children'            => $module_container_children,
            ]
        );
    }

}

// Register module.
add_action(
    'divi_module_library_modules_dependency_tree',
    function( $dependency_tree ) {
            $dependency_tree->add_dependency( new D5TutorialSimpleQuickModule() );
    }
);