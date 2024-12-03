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
          advancedStyles: [
            {
              componentName: 'divi/text',
              props: {
                selector: contentContainerSelector,
                attr: attrs?.module?.advanced?.text,
              }
            }
          ]
        },
      })}

      {/* Title */}
      {elements.style({
        attrName: 'title',
      })}

      {/* Content */}
      {elements.style({
        attrName: 'content',
      })}

      {/* Icon */}
      {elements.style({
        attrName: 'icon',
        styleProps: {
          advancedStyles: [
            {
              componentName: "divi/common",
              props: {
                attr: attrs?.icon?.innerContent ?? parentAttrs?.icon?.innerContent,
                declarationFunction: iconFontDeclaration,
              }
            },
            {
              componentName: "divi/common",
              props: {
                attr: attrs?.icon?.advanced?.color ?? parentAttrs?.icon?.advanced?.color,
                property:"color"
              }
            },
            {
              componentName: "divi/common",
              props: {
                attr:attrs?.icon?.advanced?.size ?? parentAttrs?.icon?.advanced?.size,
                property:"font-size"
              }
            }
          ]
        }
      })}

      {/*
       * We need to add CssStyle at the very bottom of other components
       * so that custom css can override module styles till we find a
       * more elegant solution.
       */}
      <CssStyle
        selector={orderClass}
        attr={attrs.css}
        cssFields={cssFields}
      />
      <CssStyle
        selector={orderClass}
        attr={attrs.css}
        cssFields={cssFields}
      />
    </StyleContainer>
  );
};
