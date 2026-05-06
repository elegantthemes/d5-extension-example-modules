// External Dependencies.
import React, { ReactElement } from 'react';

// Divi Dependencies.
import { ChildModulesContainer, ModuleContainer } from '@divi/module';

// Local Dependencies.
import { StaticModuleEditProps } from './types';
import { ModuleStyles } from './styles';
import { moduleClassnames } from './module-classnames';
import { ModuleScriptData } from './module-script-data';

/**
 * Static Module edit component of visual builder.
 *
 * @since ??
 *
 * @param {StaticModuleEditProps} props React component props.
 *
 * @returns {ReactElement}
 */
export const StaticModuleEdit = (props: StaticModuleEditProps): ReactElement => {
  const {
    attrs,
    elements,
    id,
    name,
    childrenIds,
    isLooped,
    loopIndex,
    canvasId,
  } = props;

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
      <div className="example_static_module__inner">
        <div className="example_static_module__image">

          {elements.render({
            attrName: 'badge',
          })}
          {elements.render({
            attrName: 'image',
          })}
        </div>
        <div className="example_static_module__content-container">
          {elements.render({
            attrName: 'title',
          })}
          {elements.render({
            attrName: 'summary',
          })}
          <div className="example_static_module__content">
            {elements.render({
              attrName: 'content',
            })}
          </div>
        </div>
      </div>
      {childrenIds && childrenIds.length > 0 && (
        <ChildModulesContainer ids={childrenIds} isLooped={isLooped} loopIndex={loopIndex} canvasId={canvasId} />
      )}
    </ModuleContainer>
  );
};
