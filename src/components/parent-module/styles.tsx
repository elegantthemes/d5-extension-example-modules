// External dependencies.
import React, { ReactElement } from 'react';

// Divi dependencies.
import {
  StyleContainer,
  StylesProps,
  CssStyle,
  CommonStyle,
} from '@divi/module';

// Local dependencies.
import { ParentModuleAttrs } from './types';
import { cssFields } from './custom-css';
import { iconFontDeclaration } from '../child-module/style-declarations';

/**
 * Parent Module's style components.
 *
 * @since ??
 */
 export const ModuleStyles = ({
  attrs,
  elements,
  settings,
  orderClass,
  mode,
  state,
  noStyleTag,
}: StylesProps<ParentModuleAttrs>): ReactElement => {
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
                attr:attrs?.icon?.innerContent ?? {},
                declarationFunction:iconFontDeclaration,
              }
            },
            {
              componentName: "divi/common",
              props: {
                attr: attrs?.icon?.advanced?.color,
                property:"color"
              }
            },
            {
              componentName: "divi/common",
              props: {
                attr:attrs?.icon?.advanced?.size,
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
  )
};

