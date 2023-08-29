// External dependencies.
import React, { ReactElement } from 'react';

// Divi dependencies.
import {
  AttributesGroup,
  CssGroup,
  IdClassesGroup,
  PositionSettingsGroup,
  ScrollSettingsGroup,
  TransitionGroup,
  VisibilitySettingsGroup,
} from '@divi/module';

// Local dependencies.
import { cssFields } from './custom-css';

export const SettingsAdvanced = (): ReactElement => (
  <React.Fragment>
    <IdClassesGroup />
    <CssGroup
      mainSelector=".example_parent_module"
      cssFields={cssFields}
    />
    <AttributesGroup />
    <VisibilitySettingsGroup />
    <TransitionGroup />
    <PositionSettingsGroup />
    <ScrollSettingsGroup />
  </React.Fragment>
);
