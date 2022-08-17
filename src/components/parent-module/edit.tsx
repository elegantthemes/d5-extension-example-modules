// External Dependencies.
import React, { ReactElement } from 'react';

// Divi Dependencies.
import { ChildModulesContainer, ModuleContainer } from '@divi/module';
import { mergeAttrs } from '@divi/module-utils';

// Local Dependencies.
import { ParentModuleEditProps } from './types';
import { defaultAttrs } from './constants';
import { ModuleStyles } from './styles';

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
    id,
    name,
    childrenIds,
  } = props;

  // Merge module default values with module attributes.
  const moduleAttrs = mergeAttrs({
    defaultAttrs,
    attrs,
  });

  return (
    <ModuleContainer
      attrs={moduleAttrs}
      componentType="edit"
      id={id}
      name={name}
      stylesComponent={ModuleStyles}
      tag="ul"
    >
      <ChildModulesContainer ids={childrenIds} parentId={id} />
    </ModuleContainer>
  );
}

export {
  ParentModuleEdit,
};
