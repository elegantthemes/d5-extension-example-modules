<?php
namespace MEE\Modules\D4Module\D4ModuleTrait;

use ET\Builder\Packages\Module\Module;
use ET\Builder\Framework\Utility\ArrayUtility;
use ET\Builder\FrontEnd\ModuleOrderIndex\ModuleOrderIndex;
use ET\Builder\Packages\Module\Options\Background\BackgroundComponents;

trait RenderCallbackTrait {
	public static function render_callback( $block_attributes, $content, $block ) {
		$order_index   = ModuleOrderIndex::get_increment( 'render_block', $block->parsed_block['blockName'] );
		$title         = ArrayUtility::get_value( $block_attributes, 'title.desktop.value' );
		$heading_level = ArrayUtility::get_value( $block_attributes, 'titleFont.font.desktop.value.headingLevel' );
		$content       = ArrayUtility::get_value( $block_attributes, 'content.desktop.value' );

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

		$children .= strtr(
			'<{{heading_level}} class="static-module__title">{{title}}</{{heading_level}}>
			<div class="d4_module_content">{{content}}</div>',
			[
				'{{title}}'         => $title,
				'{{heading_level}}' => $heading_level,
				'{{content}}'       => $content,
			]
		);

		return Module::render(
			[
				'attrs'          => $block_attributes,
				'id'             => $order_index,
				'name'           => 'example/d4-module',
				'children'       => $children,
				'moduleCategory' => 'module',
				'styles'         => [ 'background-color' => ArrayUtility::get_value( $block_attributes, 'background.desktop.value.color' ) ], // TODO feat(D5, Frontend Rendering): Remove this once the style render is done.
			]
		);
	}
}