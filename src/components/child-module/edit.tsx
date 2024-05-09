// External Dependencies.
import React, { ReactElement } from 'react';

// Divi Dependencies.
import {
  ModuleContainer
} from '@divi/module';
import { generateDefaultAttrs } from '@divi/module-library';
import {getAttrByMode} from '@divi/module-utils';
import { processFontIcon } from '@divi/icon-library';
import { ModuleMetadata } from '@divi/types';

// Local Dependencies.
import { ChildModuleEditProps } from './types';
import { ModuleStyles } from './styles';
import { moduleClassnames } from './module-classnames';
import {
  isEmpty,
  merge,
} from "lodash";
import parentMetadata from '../parent-module/module.json';

/**
 * Child Module edit component of visual builder.
 *
 * @since ??
 *
 * @param {ChildModuleEditProps} props React component props.
 *
 * @returns {ReactElement}
 */
export const ChildModuleEdit = (props: ChildModuleEditProps): ReactElement => {
  const {
    attrs,
    elements,
    id,
    name,
    parentAttrs,
  } = props;

  const parentDefaultAttrs = generateDefaultAttrs(parentMetadata as ModuleMetadata);
  const parentAttrsWithDefault = merge(parentDefaultAttrs, parentAttrs);
  const parentIconContent = getAttrByMode(parentAttrsWithDefault?.icon?.innerContent);

  const iconContent = getAttrByMode(attrs?.icon?.innerContent);

  const icon = isEmpty(iconContent) ? parentIconContent : iconContent;

  return (
    <ModuleContainer
      attrs={attrs}
      parentAttrs={parentAttrs}
      elements={elements}
      id={id}
      name={name}
      stylesComponent={ModuleStyles}
      classnamesFunction={moduleClassnames}
      tag="li"
    >
      {elements.styleComponents({
        attrName: 'module',
      })}
      {icon && (
        <div className="example_child_module__icon et-pb-icon">
          {processFontIcon(icon)}
        </div>
      )}
      <div className="example_child_module__content-container">
        {elements.render({
          attrName: 'title',
        })}
        <div className="example_child_module__content">
          {elements.render({
            attrName: 'content',
          })}
        </div>
      </div>
    </ModuleContainer>
  );
};
