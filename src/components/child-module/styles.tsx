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
import { ParentModuleAttrs } from "../parent-module/types";

/**
 * Child Module's style components.
 *
 * @since ??
 */
 export const ModuleStyles = ({
  attrs,
  parentAttrs,
  elements,
  settings,
  orderClass,
  mode,
  state,
  noStyleTag,
}: StylesProps<ChildModuleAttrs, ParentModuleAttrs>): ReactElement => {
  const iconSelector = `${orderClass} .example_child_module__icon.et-pb-icon`;
  const contentContainerSelector = `${orderClass} .example_child_module__content-container`;

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
};
