<?php
namespace MEE\Modules\ChildModule\ChildModuleTrait;

use ET\Builder\Packages\Module\Module;
use ET\Builder\Framework\Utility\ArrayUtility;
use ET\Builder\FrontEnd\ModuleOrderIndex\ModuleOrderIndex;
use ET\Builder\Packages\Module\Options\Background\BackgroundComponents;

trait RenderCallbackTrait {
	public static function render_callback( $block_attributes, $content, $block ) {
		$order_index   = ModuleOrderIndex::get_increment( 'render_block', $block->parsed_block['blockName'] );
		$title         = ArrayUtility::get_value( $block_attributes, 'title.desktop.value' );
		$content       = ArrayUtility::get_value( $block_attributes, 'content.desktop.value' );
		$icon          = ArrayUtility::get_value( $block_attributes, 'icon.desktop.value' );

		// TODO feat(D5, 3PS): need to access parent module attributes.

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
			'<div className="child-module__icon et-pb-icon">
				{{icon}}
			</div>',
			[
				'{{icon}}'   => $icon,
			]
		);
		$children .= strtr(
			'<div class="child-module__content-container">
				<div class="child-module__title">{{title}}</div>
				<div class="child-module__content">{{content}}</div>
			</div>',
			[
				'{{title}}'   => $title,
				'{{content}}' => $content,
			]
		);

		return Module::render(
			[
				'attrs'          => $block_attributes,
				'id'             => $order_index,
				'name'           => 'example/child-module',
				'children'       => $children,
				'moduleCategory' => 'module',
				'styles'         => [ 'background-color' => ArrayUtility::get_value( $block_attributes, 'background.desktop.value.color' ) ], // TODO feat(D5, Frontend Rendering): Remove this once the style render is done.
			]
		);
	}
}