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
import { D4ModuleAttrs } from './types';
import { cssFields } from './custom-css';

/**
 * Module's style components.
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
}: StylesProps<D4ModuleAttrs>): ReactElement => {
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
                // Module root only — .example_d4_module_inner is reserved for Layout flex (see module.json styleProps.layout).
                selector: orderClass,
                attr: attrs?.module?.advanced?.text,
                defaultPrintedStyleAttr: defaultPrintedStyleAttrs?.module?.advanced?.text,
              },
            },
          ],
        },
      })}
      {
        // Set the `.example_d4_module_inner` element `position` to `relative` if the background image has parallax enabled.
      }
      <CommonStyle
        selector={`${orderClass} .example_d4_module_inner`}
        attr={attrs?.module?.decoration?.background}
        declarationFunction={({ attrValue }: { attrValue: Element.Decoration.Background.AttributeValue }) => {
          if ('on' === attrValue?.image?.parallax?.enabled) {
            return 'position: relative;';
          }

          return '';
        }}
      />
      {elements.style({
        attrName: 'title',
      })}
      {elements.style({
        attrName: 'content',
      })}
      <CssStyle
        selector={orderClass}
        attr={attrs?.css}
        cssFields={cssFields}
      />
    </StyleContainer>
  );
};

export {
  ModuleStyles,
};
