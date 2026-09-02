// External dependencies.
import React, { ReactElement } from 'react';

// Divi dependencies.
import {
  CssStyle,
  StyleContainer,
  StylesProps,
} from '@divi/module';

// Local dependencies.
import metadata from './module.json';
import { DynamicModuleAttrs } from './types';

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
  defaultPrintedStyleAttrs,
}: StylesProps<DynamicModuleAttrs>): ReactElement => {
  return (
    <StyleContainer mode={mode} state={state} noStyleTag={noStyleTag}>
      {elements.style({
        attrName: 'module',
        styleProps: {
          defaultPrintedStyleAttrs: defaultPrintedStyleAttrs?.module?.decoration,
          disabledOn: {
            disabledModuleVisibility: settings?.disabledModuleVisibility,
          },
          advancedStyles: [
            {
              componentName: 'divi/text',
              props: {
                // Module root only — __inner is reserved for Layout flex (see module.json styleProps.layout).
                selector: orderClass,
                attr: attrs?.module?.advanced?.text,
                defaultPrintedStyleAttr: defaultPrintedStyleAttrs?.module?.advanced?.text,
              },
            },
          ],
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
        cssFields={metadata.customCssFields}
      />
    </StyleContainer>
  );
}

export {
  ModuleStyles,
};
