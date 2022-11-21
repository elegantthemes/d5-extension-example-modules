<?php
namespace MEE\Modules;

use MEE\Modules\StaticModule\StaticModule;
use MEE\Modules\D4Module\D4Module;
use MEE\Modules\ChildModule\ChildModule;
use MEE\Modules\ParentModule\ParentModule;
use MEE\Modules\DynamicModule\DynamicModule;

add_action( 'et_vb_add_modules_to_dependency_tree', function ( $dependency_tree ) {
    $dependency_tree->add_dependency( new StaticModule() );
    $dependency_tree->add_dependency( new D4Module() );
    $dependency_tree->add_dependency( new ChildModule() );
    $dependency_tree->add_dependency( new ParentModule() );
    $dependency_tree->add_dependency( new DynamicModule() );
} );
