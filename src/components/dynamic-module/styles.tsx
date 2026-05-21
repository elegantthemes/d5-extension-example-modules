// External dependencies.
import React, { ReactElement } from 'react';

// Divi dependencies.
import {
  StyleContainer,
  StylesProps,
} from '@divi/module';

// Local dependencies.
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
    </StyleContainer>
  );
}

export {
  ModuleStyles,
};
