// External dependencies.
import React, { ReactElement } from 'react';

// Divi dependencies.
import {
  Attributes,
  Css,
  IdClasses,
  PositionGroup,
  ScrollGroup,
  Transition,
  Visibility,
} from '@divi/module';

export const SettingsAdvanced = (): ReactElement => (
  <React.Fragment>
    <IdClasses />
    <Css
      mainSelector=".et_pb_dynamic_module"
    />
    <Attributes />
    <Visibility />
    <Transition />
    <PositionGroup />
    <ScrollGroup />
  </React.Fragment>
);
