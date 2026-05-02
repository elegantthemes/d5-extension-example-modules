// External dependencies.
import React, { ReactElement } from 'react';

// Divi dependencies.
import {
  CssStyle,
  StyleContainer,
  StylesProps,
} from '@divi/module';

// Local dependencies.
import { DynamicModuleAttrs } from './types';
import { cssFields } from './custom-css';

/**
 * Dynamic Module's style components.
 *
 * @since ??
 */
const ModuleStyles = ({
  settings,
  mode,
  state,
  noStyleTag,
  elements,
  attrs,
  orderClass,
}: StylesProps<DynamicModuleAttrs>): ReactElement => {
  return (
    <StyleContainer mode={mode} state={state} noStyleTag={noStyleTag}>
      {elements.style({
        attrName: 'module',
        styleProps: {
          disabledOn: {
            disabledModuleVisibility: settings?.disabledModuleVisibility,
          },
          advancedStyles: [
            {
              componentName: "divi/text",
              props: {
                selector: `${orderClass} .example_dynamic_module__inner`,
                attr: attrs?.module?.advanced?.text,
              }
            }
          ]
        },
      })}
      {elements.style({
        attrName: 'title',
      })}
      {elements.style({
        attrName: 'postTitle',
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
    </StyleContainer>
  );
}

export {
  ModuleStyles,
};
