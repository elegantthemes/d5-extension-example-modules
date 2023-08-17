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
import { cssFields } from './custom-css';

export const SettingsAdvanced = (): ReactElement => (
  <React.Fragment>
    <IdClassesGroup />
    <CssGroup
      mainSelector=".et_pb_static_module"
      cssFields={cssFields}
    />
    <AttributesGroup />
    <VisibilitySettingsGroup />
    <TransitionGroup />
    <PositionGroup />
    <ScrollGroup />
  </React.Fragment>
);
