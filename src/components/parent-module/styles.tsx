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
  const iconSelector = `${orderClass} .et-pb-icon`;

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
        attr={attrs?.icon?.innerContent ?? {}}
        declarationFunction={iconFontDeclaration}
      />
      <CommonStyle
        selector={iconSelector}
        attr={attrs?.icon?.advanced?.color}
        property="color"
      />
      <CommonStyle
        selector={iconSelector}
        attr={attrs?.icon?.advanced?.size}
        property="font-size"
      />
    </StyleContainer>
  )
};

