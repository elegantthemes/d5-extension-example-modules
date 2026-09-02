// External dependencies.
import React, { ReactElement } from 'react';

// Divi dependencies.
import {
  StyleContainer,
  StylesProps,
  CssStyle,
  CommonStyle,
} from '@divi/module';

import {
  type Element,
} from '@divi/types';

// Local dependencies.
import { ModuleSettingsDemoAttrs } from './types';


/**
 * Module Settings Demo style components.
 *
 * @since ??
 */
const ModuleStyles = ({
  attrs,
  settings,
  orderClass,
  mode,
  state,
  noStyleTag,
  elements,
  defaultPrintedStyleAttrs,
}: StylesProps<ModuleSettingsDemoAttrs>): ReactElement => {
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
                selector: orderClass,
                attr: attrs?.module?.advanced?.text,
                defaultPrintedStyleAttr: defaultPrintedStyleAttrs?.module?.advanced?.text,
              },
            },
          ],
        },
      })}
      {elements.style({
        attrName: 'textInput',
      })}
      {elements.style({
        attrName: 'richText',
      })}
      <CssStyle
        selector={orderClass}
        attr={attrs?.css}
        cssFields={elements?.moduleMetadata?.customCssFields}
      />
    </StyleContainer>
  );
};

export {
  ModuleStyles,
};
