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
