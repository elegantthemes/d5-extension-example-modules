// External dependencies.
import React, { ReactElement } from 'react';

// Divi dependencies.
import {
  StyleContainer,
  StylesProps,
  CssStyle,
  TextStyle,
  CommonStyle,
} from '@divi/module';

// Local dependencies.
import { ChildModuleAttrs } from './types';
import { cssFields } from './custom-css';
import { iconFontDeclaration } from './style-declarations';
import {ParentModuleAttrs} from "../parent-module/types";

/**
 * Blurb Module's style components.
 *
 * @since ??
 */
 const ModuleStyles = ({
  attrs,
  parentAttrs,
  elements,
  settings,
  orderClass,
  mode,
  state,
  noStyleTag,
}: StylesProps<ChildModuleAttrs, ParentModuleAttrs>): ReactElement => {
   const iconSelector             = `${orderClass} .child-module__icon.et-pb-icon`;
   const contentContainerSelector = `${orderClass} .child-module__content-container`;

   const iconAttrs = attrs?.icon?.innerContent ?? parentAttrs?.icon;

  return (
    <StyleContainer mode={mode} state={state} noStyleTag={noStyleTag}>
      {/* Module */}
      {elements.style({
        attrName: 'module',
        styleProps: {
          disabledOn: {
            disabledModuleVisibility: settings?.disabledModuleVisibility,
          },
        },
      })}
      <TextStyle
        selector={contentContainerSelector}
        attr={attrs?.module?.advanced?.text}
      />
      <CssStyle
        selector={orderClass}
        attr={attrs.css}
        cssFields={cssFields}
      />

      {/* Title */}
      {elements.style({
        attrName: 'title',
      })}

      {/* Content */}
      {elements.style({
        attrName: 'content',
      })}

      {/* Icon */}
      <CommonStyle
        selector={iconSelector}
        attr={attrs?.icon?.innerContent ?? parentAttrs?.icon?.innerContent}
        declarationFunction={iconFontDeclaration}
      />
      <CommonStyle
        selector={iconSelector}
        attr={attrs?.icon?.advanced?.color ?? parentAttrs?.icon?.advanced?.color}
        property="color"
      />
      <CommonStyle
        selector={iconSelector}
        attr={attrs?.icon?.advanced?.size ?? parentAttrs?.icon?.advanced?.size}
        property="font-size"
      />
    </StyleContainer>
  );
}

export {
  ModuleStyles,
};
