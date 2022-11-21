<?php
namespace MEE\Modules\DynamicModule\DynamicModuleTrait;

use ET\Builder\Packages\Module\Module;
use ET\Builder\Framework\Utility\ArrayUtility;
use ET\Builder\FrontEnd\ModuleOrderIndex\ModuleOrderIndex;
use ET\Builder\Packages\Module\Options\Background\BackgroundComponents;

trait RenderCallbackTrait {
	public static function render_callback( $block_attributes, $content, $block ) {
		$order_index         = ModuleOrderIndex::get_increment( 'render_block', $block->parsed_block['blockName'] );
		$title               = ArrayUtility::get_value( $block_attributes, 'title.desktop.value' );
		$heading_level       = ArrayUtility::get_value( $block_attributes, 'titleFont.font.desktop.value.headingLevel' );
		$post_heading_level  = ArrayUtility::get_value( $block_attributes, 'postTitleFont.font.desktop.value.headingLevel' );
		$posts_per_page      = ArrayUtility::get_value( $block_attributes, 'numberOfPosts.desktop.value' );

		$background_component = BackgroundComponents::component(
			[
				'attr' => ArrayUtility::get_value( $block_attributes, 'background', [] ),
				'id'   => $order_index,
			]
		);

		$posts = get_posts( [
			'post_type'      => 'post',
			'posts_per_page' => $posts_per_page,
		] );

		$post_items = '';

		if ( is_array( $posts ) && count( $posts ) ) {
			foreach( $posts as $post ) {
				$post_items .= strtr(
					'<div class="dynamic-module__post-item">
						<{{post_heading_level}} class="dynamic-module__post-item-title">
							<a href="{{post_link}}">{{post_title}}</a>
						</{{post_heading_level}}>
						<div class="dynamic-module__post-item-content">{{post_content}}</div>
					</div>',
					[
						'{{post_title}}'         => get_the_title( $post ),
						'{{post_link}}'          => get_permalink( $post ),
						'{{post_content}}'       => get_the_excerpt( $post ),
						'{{post_heading_level}}' => $post_heading_level,
					]
				);
			}
		}

		$children = '';

		if ( $background_component ) {
			$children .= et_core_esc_previously( $background_component );
		}

		$children .= ! empty( $title ) ? strtr(
			'<{{heading_level}} class="dynamic-module__title">{{title}}</{{heading_level}}>',
			[
				'{{title}}'         => $title,
				'{{heading_level}}' => $heading_level,
			]
		) : '';

		if ( ! empty( $post_items ) ) {
			$children .= strtr(
				'<div class="dynamic-module__post-items">{{post_items}}</div>',
				[
					'{{post_items}}' => $post_items,
				]
			) ;
		} else {
			$children .= strtr(
				'<div>{{not_found}}</div>',
				[
					'{{not_found}}' => __('No post found.', 'd5-module-extension-example'),
				]
			) ;
		}

		return Module::render(
			[
				'attrs'          => $block_attributes,
				'id'             => $order_index,
				'name'           => 'example/dynamic-module',
				'children'       => $children,
				'moduleCategory' => 'module',
				'styles'         => [ 'background-color' => ArrayUtility::get_value( $block_attributes, 'background.desktop.value.color' ) ], // TODO feat(D5, Frontend Rendering): Remove this once the style render is done.
			]
		);
	}
}