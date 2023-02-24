// External Dependencies.
import React, { ReactElement } from 'react';
import classnames from 'classnames';

// Divi Dependencies.
import { ModuleContainer } from '@divi/module';
import { mergeAttrs } from '@divi/module-utils';

// Local Dependencies.
import { StaticModuleEditProps } from './types';
import { defaultAttrs } from './constants';
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
    id,
    name,
  } = props;

  // Merge module default values with module attributes.
  const moduleAttrs = mergeAttrs({
    defaultAttrs,
    attrs,
  });

  // Get module attributes.
  const HeadingLevel            = moduleAttrs?.titleFont?.font?.desktop?.value?.headingLevel;
  const title                   = moduleAttrs?.title?.desktop?.value;
  const content                 = moduleAttrs?.content?.desktop?.value;
  const imageSrc                = moduleAttrs?.image?.image?.desktop?.value?.src;
  const imageAlt                = moduleAttrs?.image?.image?.desktop?.value?.alt;

  return (
    <ModuleContainer
      attrs={moduleAttrs}
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
        <HeadingLevel className="static-module__title">{title}</HeadingLevel>
        <div
          className="static-module__content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </ModuleContainer>
  );
}

export {
  StaticModuleEdit,
};
