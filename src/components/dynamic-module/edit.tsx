// External Dependencies.
import React, { ReactElement, useEffect } from 'react';

// Divi Dependencies.
import { 
  ModuleContainer,
  ElementComponents,
} from '@divi/module';

// Local Dependencies.
import { DynamicModuleEditProps } from './types';
import { ModuleStyles } from './styles';
import { useGetRecentPosts } from './hooks/get-recent-posts';
import { map } from 'lodash';
import { __ } from '@wordpress/i18n';
import { ModuleScriptData } from './module-script-data';
import { moduleClassnames } from './module-classnames';

/**
 * Static Module edit component of visual builder.
 *
 * @since ??
 *
 * @param {DynamicModuleEditProps} props React component props.
 *
 * @returns {ReactElement}
 */
const DynamicModuleEdit = (props: DynamicModuleEditProps): ReactElement => {
  const {
    attrs,
    id,
    name,
    elements,
  } = props;

  const {getPosts, posts, isLoading} = useGetRecentPosts();

  const PostTitleHeading = attrs?.postTitle?.decoration?.font?.font?.desktop?.value?.headingLevel;
  const postsNumber = parseInt(attrs?.postItems?.innerContent?.desktop?.value?.postsNumber);

  /**
   * Fetches new Portfolio Posts on parameter changes.
   */
  useEffect(() => {
    getPosts(postsNumber);
  }, [postsNumber]);

  return (
    <ModuleContainer
      attrs={attrs}
      elements={elements}
      componentType="edit"
      id={id}
      name={name}
      stylesComponent={ModuleStyles}
      classnamesFunction={moduleClassnames}
      scriptDataComponent={ModuleScriptData}
    >
      {
        ! isLoading && (
          <>
            <ElementComponents
              attrs={attrs?.module?.decoration ?? {}}
              id={id}
            />
            <div className="dynamic-module__inner">
              {elements.render({
                attrName: 'title',
              })}
              <div className="dynamic-module__post-items">
                {
                  map(posts, (post) => (
                      <div className="dynamic-module__post-item" key={post?.id}>
                        <PostTitleHeading className="dynamic-module__post-item-title">
                          <a href={post?.link} onClick={() => false}>{post?.title?.rendered}</a>
                        </PostTitleHeading>
                        <div className="dynamic-module__post-item-content" dangerouslySetInnerHTML={{__html: post?.excerpt?.rendered}} />
                      </div>
                    )
                  )
                }
              </div>
            </div>
          </>
        )
      }
      {
        ! isLoading && posts.length < 1 && (
          <div>{__('No post found.', 'd5-extension-example-modules')}</div>
        )
      }
      {
        isLoading && (
          <div>{__('Loading...', 'd5-extension-example-modules')}</div>
        )
      }
    </ModuleContainer>
  );
}

export {
  DynamicModuleEdit,
};
