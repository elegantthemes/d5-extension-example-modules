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
import { iconStyleDeclaration } from './style-declarations';

/**
 * Blurb Module's style components.
 *
 * @since ??
 */
 const ModuleStyles = ({
  attrs,
  elements,
  settings,
  orderClass,
  mode,
  state,
  noStyleTag,
}: StylesProps<ChildModuleAttrs>): ReactElement => {
   const iconSelector             = `${orderClass} .child-module__icon.et-pb-icon`;
   const contentContainerSelector = `${orderClass} .child-module__content-container`;

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
        attr={attrs?.icon?.decoration?.icon}
        declarationFunction={iconStyleDeclaration}
      />
    </StyleContainer>
  );
}

export {
  ModuleStyles,
};
