<?php
namespace MEE\Modules\ParentModule\ParentModuleTrait;

use ET\Builder\Packages\Module\Module;
use ET\Builder\Framework\Utility\ArrayUtility;
use ET\Builder\FrontEnd\ModuleOrderIndex\ModuleOrderIndex;
use ET\Builder\Packages\Module\Options\Background\BackgroundComponents;

trait RenderCallbackTrait {
	public static function render_callback( $block_attributes, $content, $block ) {
		$order_index   = ModuleOrderIndex::get_increment( 'render_block', $block->parsed_block['blockName'] );
		$children_ids  = $block->parsed_block['innerBlocks'];

		$background_component = BackgroundComponents::component(
			[
				'attr' => ArrayUtility::get_value( $block_attributes, 'background', [] ),
				'id'   => $order_index,
			]
		);

		$children = '';

		if ( $background_component ) {
			$children .= et_core_esc_previously( $background_component );
		}

		$children .= $content;

		return Module::render(
			[
				'attrs'          => $block_attributes,
				'id'             => $order_index,
				'name'           => 'example/parent-module',
				'children'       => $children,
				'childrenIds'    => $children_ids,
				'moduleCategory' => 'module',
				'styles'         => [ 'background-color' => ArrayUtility::get_value( $block_attributes, 'background.desktop.value.color' ) ], // TODO feat(D5, Frontend Rendering): Remove this once the style render is done.
			]
		);
	}
}