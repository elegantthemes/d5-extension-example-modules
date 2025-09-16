// External Dependencies.
import React, { ReactElement } from 'react';

// Divi Dependencies.
import {
  ModuleContainer,
  ElementComponents,
  DynamicData,
} from '@divi/module';
import {
  getAttrByMode,
} from '@divi/module-utils';

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
    >
      {elements.styleComponents({
        attrName: 'module',
      })}
      <div className="example_d4_module_inner">
        {elements.render({
          attrName: 'title',
        })}
        {elements.render({
          attrName: 'content',
        })}
      </div>
    </ModuleContainer>
  );
}

export {
  D4ModuleEdit,
};
