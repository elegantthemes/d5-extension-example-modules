// External dependencies.
import React, { ReactElement } from 'react';

// Divi dependencies.
import {
  StyleContainer,
  StylesProps,
  TextStyle,
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
}: StylesProps<DynamicModuleAttrs>): ReactElement => {
  return (
    <StyleContainer mode={mode} state={state} noStyleTag={noStyleTag}>
      {elements.style({
        attrName: 'module',
        styleProps: {
          disabledOn: {
            disabledModuleVisibility: settings?.disabledModuleVisibility,
          },
        },
      })}
      <TextStyle
        selector={`${orderClass} .example_dynamic_module__inner`}
        attr={attrs?.module?.advanced?.text}
      />
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
