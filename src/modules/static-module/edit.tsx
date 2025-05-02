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
export const StaticModuleEdit = (props: StaticModuleEditProps): ReactElement => {
  const {
    attrs,
    elements,
    id,
    name,
  } = props;

  // Get image attributes.
  const imageSrc = attrs?.image?.innerContent?.desktop?.value?.src ?? ''
  const imageAlt = attrs?.image?.innerContent?.desktop?.value?.alt ?? '';

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
      <div className="example_static_module__inner">
        <div className="example_static_module__image">
          <img src={imageSrc} alt={imageAlt} />
        </div>
        <div className="example_static_module__content-container">
          {elements.render({
            attrName: 'title',
          })}
          <div className="example_static_module__content">
            {elements.render({
              attrName: 'content',
            })}
          </div>
        </div>
      </div>
    </ModuleContainer>
  );
};
