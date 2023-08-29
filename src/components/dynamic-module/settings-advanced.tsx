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

export const SettingsAdvanced = (): ReactElement => (
  <React.Fragment>
    <IdClassesGroup />
    <CssGroup
      mainSelector=".example_dynamic_module"
    />
    <AttributesGroup />
    <VisibilitySettingsGroup />
    <TransitionGroup />
    <PositionSettingsGroup />
    <ScrollSettingsGroup />
  </React.Fragment>
);
