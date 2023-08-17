// External Dependencies.
import React, { ReactElement } from 'react';
import classnames from 'classnames';

// Divi Dependencies.
import { ModuleContainer } from '@divi/module';

// Local Dependencies.
import { StaticModuleEditProps } from './types';
import { ModuleStyles } from './styles';
import { moduleClassnames } from './module-classnames';
import { ModuleScriptData } from './module-script-data';

/**
 * Static Module edit component of visual builder.
 *
 * @since ??
 *
 * @param {StaticModuleEditProps} props React component props.
 *
 * @returns {ReactElement}
 */
const StaticModuleEdit = (props: StaticModuleEditProps): ReactElement => {
  const {
    attrs,
    elements,
    id,
    name,
  } = props;

  // Get module attributes.
  const imageSrc                = attrs?.image?.innerContent?.desktop?.value?.src;
  const imageAlt                = attrs?.image?.innerContent?.desktop?.value?.alt;

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
      <div className="static-module__image">
        <img src={imageSrc} alt={imageAlt} />
      </div>
      <div className="static-module__content-container">
        {elements.render({
          attrName: 'title',
        })}
        <div className="static-module__content">
          {elements.render({
            attrName: 'content',
          })}
        </div>
      </div>
    </ModuleContainer>
  );
}

export {
  StaticModuleEdit,
};
