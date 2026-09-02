// External Dependencies.
import React, { ReactElement } from 'react';
import classnames from 'classnames';

// Divi Dependencies.
import {
  ModuleContainer,
  ChildModulesContainer,
} from '@divi/module';

// Local Dependencies.
import { D4ModuleEditProps } from './types';
import { ModuleStyles } from './styles';
import { moduleClassnames } from './module-classnames';
import { ModuleScriptData } from './module-script-data';

/**
 * Divi 4 Module edit component of visual builder.
 *
 * @since ??
 *
 * @param {D4ModuleEditProps} props React component props.
 *
 * @returns {ReactElement}
 */
const D4ModuleEdit = (props: D4ModuleEditProps): ReactElement => {
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

  // Layout classes for inner container.
  const layoutDisplayValue = attrs?.module?.decoration?.layout?.desktop?.value?.display ?? 'flex';
  const innerClasses       = classnames('example_d4_module_inner', {
    et_flex_module: 'flex' === layoutDisplayValue,
    et_grid_module: 'grid' === layoutDisplayValue,
  });

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
      <div className={innerClasses}>
        {elements.render({
          attrName: 'title',
        })}
        {elements.render({
          attrName: 'content',
        })}
      </div>
      {childrenIds && childrenIds.length > 0 && (
        <ChildModulesContainer ids={childrenIds} isLooped={isLooped} loopIndex={loopIndex} canvasId={canvasId} />
      )}
    </ModuleContainer>
  );
}

export {
  D4ModuleEdit,
};
