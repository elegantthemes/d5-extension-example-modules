// External dependencies.
import React, { ReactElement } from 'react';

// Divi dependencies.
import {
  StyleContainer,
  StylesProps,
  CssStyle,
  CommonStyle,
  TextStyle,
} from '@divi/module';

import { BackgroundAttr } from '@divi/types';

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
}: StylesProps<D4ModuleAttrs>): ReactElement => {
  return (
    <StyleContainer mode={mode} state={state} noStyleTag={noStyleTag}>
      {elements.style({
        attrName: 'module',
      })}
      {elements.style({
        attrName: 'title',
      })}
      <TextStyle
        selector={`${orderClass} .d4_module_inner`}
        attr={attrs?.module?.advanced?.text}
      />
      {
        // Set the `.d4_module_inner` element `position` to `relative` if the background image has parallax enabled.
      }
      <CommonStyle
        selector={`${orderClass} .d4_module_inner`}
        attr={attrs?.module?.decoration?.background}
        declarationFunction={({attrValue}:{attrValue:BackgroundAttr}) => {
          if ('on' === attrValue?.image?.parallax?.enabled) {
            return 'position: relative;';
          }

          return '';
        }}
      />
      <CssStyle
        selector={orderClass}
        attr={attrs?.css}
        cssFields={cssFields}
      />
    </StyleContainer>
  );
}

export {
  ModuleStyles,
};
