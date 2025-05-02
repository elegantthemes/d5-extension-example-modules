// External Dependencies.
import React, { ReactElement } from 'react';

// Divi Dependencies.
import { ChildModulesContainer, ModuleContainer } from '@divi/module';

// Local Dependencies.
import { ParentModuleEditProps } from './types';
import { ModuleStyles } from './styles';
import { ModuleScriptData } from './module-script-data';
import { moduleClassnames } from './module-classnames';

/**
 * Parent Module edit component of visual builder.
 *
 * @since ??
 *
 * @param {ParentModuleEditProps} props React component props.
 *
 * @returns {ReactElement}
 */
export const ParentModuleEdit = (props: ParentModuleEditProps): ReactElement => {
  const {
    attrs,
    elements,
    id,
    name,
    childrenIds,
  } = props;

  return (
    <ModuleContainer
      attrs={attrs}
      elements={elements}
      id={id}
      name={name}
      stylesComponent={ModuleStyles}
      scriptDataComponent={ModuleScriptData}
      classnamesFunction={moduleClassnames}
      tag="ul"
    >
      {elements.styleComponents({
        attrName: 'module',
      })}
      <ChildModulesContainer ids={childrenIds} />
    </ModuleContainer>
  );
}
