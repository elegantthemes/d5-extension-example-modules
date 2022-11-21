<?php
namespace MEE\Modules\StaticModule\StaticModuleTrait;

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
		$image_src     = ArrayUtility::get_value( $block_attributes, 'image.image.desktop.value.src' );
		$image_alt     = ArrayUtility::get_value( $block_attributes, 'image.image.desktop.value.alt' );

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
			'<div class="static-module__image">
				<img src="{{image_src}}" alt="{{image_alt}}" />
			</div>
			<div class="static-module__content-container">
				<{{heading_level}} class="static-module__title">{{title}}</{{heading_level}}>
				<div class="static-module__content">{{content}}</div>
			</div>',
			[
				'{{image_src}}'     => $image_src,
				'{{image_alt}}'     => $image_alt,
				'{{title}}'         => $title,
				'{{heading_level}}' => $heading_level,
				'{{content}}'       => $content,
			]
		);

		return Module::render(
			[
				'attrs'          => $block_attributes,
				'id'             => $order_index,
				'name'           => 'example/static-module',
				'children'       => $children,
				'moduleCategory' => 'module',
				'styles'         => [ 'background-color' => ArrayUtility::get_value( $block_attributes, 'background.desktop.value.color' ) ], // TODO feat(D5, Frontend Rendering): Remove this once the style render is done.
			]
		);
	}
}