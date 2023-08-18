// External Dependencies.
import React, { ReactElement } from 'react';

// Divi Dependencies.
import { ChildModulesContainer, ModuleContainer } from '@divi/module';
import { mergeAttrs } from '@divi/module-utils';

// Local Dependencies.
import { ParentModuleEditProps } from './types';
import { ModuleStyles } from './styles';
import { ModuleScriptData } from './module-script-data';
import { moduleClassnames } from './module-classnames';

/**
 * Static Module edit component of visual builder.
 *
 * @since ??
 *
 * @param {ParentModuleEditProps} props React component props.
 *
 * @returns {ReactElement}
 */
const ParentModuleEdit = (props: ParentModuleEditProps): ReactElement => {
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
      componentType="edit"
      id={id}
      name={name}
      stylesComponent={ModuleStyles}
      scriptDataComponent={ModuleScriptData}
      classnamesFunction={moduleClassnames}
      tag="ul"
    >
      <ChildModulesContainer ids={childrenIds} />
    </ModuleContainer>
  );
}

export {
  ParentModuleEdit,
};
