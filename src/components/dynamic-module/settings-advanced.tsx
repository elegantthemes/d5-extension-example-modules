// External dependencies.
import React, { ReactElement } from 'react';

// Divi dependencies.
import {
  AttributesGroup,
  CssGroup,
  IdClassesGroup,
  PositionGroup,
  ScrollGroup,
  TransitionGroup,
  VisibilitySettingsGroup,
} from '@divi/module';

export const SettingsAdvanced = (): ReactElement => (
  <React.Fragment>
    <IdClassesGroup />
    <CssGroup
      mainSelector=".et_pb_dynamic_module"
    />
    <AttributesGroup />
    <VisibilitySettingsGroup />
    <TransitionGroup />
    <PositionGroup />
    <ScrollGroup />
  </React.Fragment>
);
