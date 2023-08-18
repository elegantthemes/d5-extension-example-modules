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

  const imageAttr  = getAttrByMode(attrs?.image?.innerContent);
  const imageSrc   = imageAttr?.src;

  return (
    <ModuleContainer
      attrs={attrs}
      elements={elements}
      componentType="edit"
      id={id}
      name={name}
      stylesComponent={ModuleStyles}
      classnamesFunction={moduleClassnames}
      scriptDataComponent={ModuleScriptData}
    >
      <ElementComponents
        attrs={attrs?.module?.decoration ?? {}}
        id={id}
      />
      <div className="d4_module_inner">
        <div className="d4_module_image_wrap">
          <DynamicData
            value={imageSrc}
            loaderType="image"
          >
            {({resolvedValue}) => {
              if (! resolvedValue) {
                return null;
              }

              return (
                <img src={resolvedValue} />
              );
            }}
          </DynamicData>
        </div>
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
