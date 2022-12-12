// External Dependencies.
import React, { ReactElement } from 'react';

// Divi Dependencies.
import { ModuleContainer } from '@divi/module';
import { mergeAttrs } from '@divi/module-utils';
import { processFontIcon } from '@divi/icon-library';

// Local Dependencies.
import { ChildModuleEditProps } from './types';
import { defaultAttrs } from './constants';
import { defaultAttrs as parentDefaultAttrs } from '../parent-module/constants';
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
    id,
    name,
    parentAttrs,
  } = props;

  // Merge parent module default values with parent module attributes.
  const parentModuleAttrs = mergeAttrs({
    defaultAttrs: parentDefaultAttrs,
    attrs: parentAttrs,
  });

  // Merge module default values with module attributes.
  const childModuleAttrs = mergeAttrs({
    defaultAttrs,
    attrs,
  });

  const moduleAttrs = {
    ...childModuleAttrs,
    icon: mergeAttrs({
      defaultAttrs: parentModuleAttrs?.icon,
      attrs: childModuleAttrs?.icon,
    }),
    iconColor: mergeAttrs({
      defaultAttrs: parentModuleAttrs?.iconColor,
      attrs: childModuleAttrs?.iconColor,
    }),
    iconSize: mergeAttrs({
      defaultAttrs: parentModuleAttrs?.iconSize,
      attrs: childModuleAttrs?.iconSize,
    }),
    titleFont: mergeAttrs({
      defaultAttrs: parentModuleAttrs?.titleFont,
      attrs: childModuleAttrs?.titleFont,
    }),
    text: mergeAttrs({
      defaultAttrs: parentModuleAttrs?.text,
      attrs: childModuleAttrs?.text,
    }),
    bodyFont: mergeAttrs({
      defaultAttrs: parentModuleAttrs?.bodyFont,
      attrs: childModuleAttrs?.bodyFont,
    }),
  };
  
  const icon    = moduleAttrs?.icon?.desktop?.value;
  const title   = moduleAttrs?.title?.desktop?.value;
  const content = moduleAttrs?.content?.desktop?.value;

  return (
    <ModuleContainer
      attrs={moduleAttrs}
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
        <div className="child-module__title">{title}</div>
        <div
          className="child-module__content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </ModuleContainer>
  );
}

export {
  ChildModuleEdit,
};
