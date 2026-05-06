// External Dependencies.
import React, { ReactElement, useEffect, useRef } from 'react';

// Divi Dependencies.
import {
  ModuleContainer,
  ElementComponents,
  ChildModulesContainer,
} from '@divi/module';
import { useFetch } from '@divi/rest';

// Local Dependencies.
import { DynamicModuleEditProps } from './types';
import { ModuleStyles } from './styles';
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
    childrenIds,
    isLooped,
    loopIndex,
    canvasId,
  } = props;

  const {
    fetch,
    response,
    isLoading,
  } = useFetch<any[]>([]);

  const PostTitleHeading = attrs?.postTitle?.decoration?.font?.font?.desktop?.value?.headingLevel;
  const postsNumber = parseInt(attrs?.postItems?.innerContent?.desktop?.value?.postsNumber);

  const fetchAbortRef = useRef<AbortController>();

  /**
   * Fetches new Portfolio Posts on parameter changes.
   */
  useEffect(() => {
    if(fetchAbortRef.current) {
      fetchAbortRef.current.abort();
    }

    fetchAbortRef.current = new AbortController();

    fetch({
      restRoute: `/wp/v2/posts?context=view&per_page=${postsNumber}`,
      method:    'GET',
      signal:    fetchAbortRef.current.signal,
    }).
    catch((error) => {
      console.error(error);
    });

    return () => {
      if(fetchAbortRef.current) {
        fetchAbortRef.current.abort();
      }
    };
  }, [postsNumber]);

  return (
    <ModuleContainer
      attrs={attrs}
      elements={elements}
      id={id}
      name={name}
      stylesComponent={ModuleStyles}
      classnamesFunction={moduleClassnames}
      scriptDataComponent={ModuleScriptData}
      cssPosition={childrenIds && 0 < childrenIds.length ? 'before' : null}
      isLooped={isLooped}
      loopIndex={loopIndex}
    >
      {elements.styleComponents({
        attrName: 'module',
      })}
      {
        ! isLoading && (
          <>
            <ElementComponents
              attrs={attrs?.module?.decoration ?? {}}
              id={id}
            />
            <div className="example_dynamic_module__inner">
              {elements.render({
                attrName: 'title',
              })}
              <div className="example_dynamic_module__post-items">
                {
                  map(response, (post) => (
                      <div className="example_dynamic_module__post-item" key={post?.id}>
                        <PostTitleHeading className="example_dynamic_module__post-item-title">
                          <a href={post?.link} onClick={() => false}>{post?.title?.rendered}</a>
                        </PostTitleHeading>
                        <div className="example_dynamic_module__post-item-content" dangerouslySetInnerHTML={{__html: post?.excerpt?.rendered}} />
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
        ! isLoading && response.length < 1 && (
          <div>{__('No post found.', 'd5-extension-example-modules')}</div>
        )
      }
      {
        isLoading && (
          <div>{__('Loading...', 'd5-extension-example-modules')}</div>
        )
      }
      {childrenIds && childrenIds.length > 0 && (
        <ChildModulesContainer ids={childrenIds} isLooped={isLooped} loopIndex={loopIndex} canvasId={canvasId} />
      )}
    </ModuleContainer>
  );
}

export {
  DynamicModuleEdit,
};
