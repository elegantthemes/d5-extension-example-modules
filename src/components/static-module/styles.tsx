// External dependencies.
import React, { ReactElement } from 'react';

// Divi dependencies.
import {
  StyleContainer,
  StylesProps,
  CssStyle,
} from '@divi/module';

// Local dependencies.
import { StaticModuleAttrs } from './types';
import { cssFields } from './custom-css';

/**
 * Static Module's style components.
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
    defaultPrintedStyleAttrs,
  }: StylesProps<StaticModuleAttrs>): ReactElement => {
  return (
    <StyleContainer mode={mode} state={state} noStyleTag={noStyleTag}>
      {/* Module */}
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
      {/* Image */}
      {elements.style({
        attrName: 'image',
      })}

      {/* Title */}
      {elements.style({
        attrName: 'title',
      })}

      {/* Summary */}
      {elements.style({
        attrName: 'summary',
      })}

      {/* Content */}
      {elements.style({
        attrName: 'content',
      })}

      {/* Badge */}
      {elements.style({
        attrName: 'badge',
        styleProps: {
          advancedStyles: [
            {
              componentName: 'divi/common',
              props: {
                attr: attrs?.badge?.decoration?.color,
                property: 'color',
              },
            },
          ],
        },
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
};
