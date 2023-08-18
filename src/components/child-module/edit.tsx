// External Dependencies.
import React, { ReactElement } from 'react';

// Divi Dependencies.
import { ModuleContainer } from '@divi/module';
import {
  mergeAttrs,
  getAttrByMode,
} from '@divi/module-utils';
import { processFontIcon } from '@divi/icon-library';

// Local Dependencies.
import { ChildModuleEditProps } from './types';
import { ModuleStyles } from './styles';
import { moduleClassnames } from './module-classnames';

/**
 * Static Module edit component of visual builder.
 *
 * @since ??
 *
 * @param {ChildModuleEditProps} props React component props.
 *
 * @returns {ReactElement}
 */
const ChildModuleEdit = (props: ChildModuleEditProps): ReactElement => {
  const {
    attrs,
    elements,
    id,
    name,
    parentAttrs,
  } = props;

  const iconAttrs = attrs?.icon ?? parentAttrs?.icon;

  const icon = getAttrByMode(iconAttrs?.innerContent);

  return (
    <ModuleContainer
      attrs={attrs}
      parentAttrs={parentAttrs}
      elements={elements}
      componentType="edit"
      id={id}
      name={name}
      stylesComponent={ModuleStyles}
      classnamesFunction={moduleClassnames}
      tag="li"
    >
      { icon && (
        <div className="child-module__icon et-pb-icon">
            {processFontIcon(icon)}
        </div>
      )}
      <div className="child-module__content-container">
        {elements.render({
          attrName: 'title',
        })}
        <div className="child-module__content">
          {elements.render({
            attrName: 'content',
          })}
        </div>
      </div>
    </ModuleContainer>
  );
}

export {
  ChildModuleEdit,
};
