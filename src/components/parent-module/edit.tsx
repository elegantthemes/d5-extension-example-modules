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
 * Neutral wrapper + `ChildModulesContainer` for mixed child types (Child Module + regular modules).
 * For `ul`/`li` or strict single-child-only setups, see README / `index.ts` JSDoc on `parentModule`.
 * When `ModuleEditProps` includes loop/canvas fields, you may forward them like core `divi/group`.
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
      childrenIds={childrenIds}
      stylesComponent={ModuleStyles}
      scriptDataComponent={ModuleScriptData}
      classnamesFunction={moduleClassnames}
    >
      {elements.styleComponents({
        attrName: 'module',
      })}
      {childrenIds && childrenIds.length > 0 && (
        <ChildModulesContainer ids={childrenIds} />
      )}
    </ModuleContainer>
  );
}
