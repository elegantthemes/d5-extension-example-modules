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

  const HeadingLevel            = moduleAttrs?.titleFont?.font?.desktop?.value?.headingLevel;
  const title                   = moduleAttrs?.title?.desktop?.value;
  const content                 = moduleAttrs?.content?.desktop?.value;
  const imageSrc                = moduleAttrs?.image?.image?.desktop?.value?.src;
  const imageAlt                = moduleAttrs?.image?.image?.desktop?.value?.alt;
  const backgroundLayoutDesktop = moduleAttrs?.text?.text?.desktop?.value?.color;
  const backgroundLayoutTablet  = moduleAttrs?.text?.text?.tablet?.value?.color;
  const backgroundLayoutPhone   = moduleAttrs?.text?.text?.phone?.value?.color;

  return (
    <ModuleContainer
      attrs={moduleAttrs}
      componentType="edit"
      id={id}
      name={name}
      stylesComponent={ModuleStyles}
      className={classnames({
        [`et_pb_bg_layout_${backgroundLayoutDesktop}`]:       backgroundLayoutDesktop,
        [`et_pb_bg_layout_${backgroundLayoutTablet}_tablet`]: backgroundLayoutTablet,
        [`et_pb_bg_layout_${backgroundLayoutPhone}_phone`]:   backgroundLayoutPhone,
      })}
    >
      <div className="et_pb_static_module_image">
        <img src={imageSrc} alt={imageAlt} />
      </div>
      <div className="et_pb_static_module_content_container">
        <HeadingLevel className="et_pb_static_module_title">{title}</HeadingLevel>
        <div
          className="et_pb_static_module_content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </ModuleContainer>
  );
}

export {
  StaticModuleEdit,
};
