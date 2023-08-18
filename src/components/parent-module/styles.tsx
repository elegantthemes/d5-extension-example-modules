// External dependencies.
import React, { ReactElement } from 'react';

// Divi dependencies.
import {
  StyleContainer,
  StylesProps,
  CssStyle,
} from '@divi/module';

// Local dependencies.
import { ParentModuleAttrs } from './types';
import { cssFields } from './custom-css';

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
}: StylesProps<ParentModuleAttrs>): ReactElement => (
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
  </StyleContainer>
);

export {
  ModuleStyles,
};
