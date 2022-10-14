// External Dependencies.
import React, { ReactElement, useEffect } from 'react';

// Divi Dependencies.
import { ModuleContainer } from '@divi/module';
import { mergeAttrs } from '@divi/module-utils';

// Local Dependencies.
import { DynamicModuleEditProps } from './types';
import { ModuleStyles } from './styles';
import { defaultAttrs } from './constants';
import { useGetRecentPosts } from './hooks/get-recent-posts';
import { map } from 'lodash';
import { __ } from '@wordpress/i18n';

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
  } = props;

  // Merge module default values with module attributes.
  const moduleAttrs = mergeAttrs({
    defaultAttrs,
    attrs,
  });

  const {getPosts, posts, isLoading} = useGetRecentPosts();

  const title         = moduleAttrs?.title?.desktop?.value;
  const numberOfPosts = parseInt(moduleAttrs?.numberOfPosts?.desktop?.value);
  const TitleHeading  = moduleAttrs?.titleFont?.font?.desktop?.value?.headingLevel;
  const PostTitleHeading  = moduleAttrs?.postTitleFont?.font?.desktop?.value?.headingLevel;

  /**
   * Fetches new Portfolio Posts on parameter changes.
   */
   useEffect(() => {
    getPosts(numberOfPosts);
  }, [numberOfPosts]);

  return (
    <ModuleContainer
      attrs={moduleAttrs}
      componentType="edit"
      id={id}
      name={name}
      stylesComponent={ModuleStyles}
    >
      {
        ! isLoading && (
          <>
            {
              title && (
                <TitleHeading className="dynamic-module__title">{title}</TitleHeading>
              )
            }
            <div className="dynamic-module__post-items">
              {
                map(posts, (post) => (
                    <div className="dynamic-module__post-item">
                      <PostTitleHeading className="dynamic-module__post-item-title">
                        <a href={post?.link} onClick={() => false}>{post?.title?.rendered}</a>
                      </PostTitleHeading>
                      <div className="dynamic-module__post-item-content" dangerouslySetInnerHTML={{__html: post?.excerpt?.rendered}} />
                    </div>
                  )
                )
              }
            </div>
          </>
        )
      }
      {
        ! isLoading && posts.length < 1 && (
          <div>{__('No post found.', 'd5-module-extension-example')}</div>
        )
      }
      {
        isLoading && (
          <div>{__('Loading...', 'd5-module-extension-example')}</div>
        )
      }
    </ModuleContainer>
  );
}

export {
  DynamicModuleEdit,
};
