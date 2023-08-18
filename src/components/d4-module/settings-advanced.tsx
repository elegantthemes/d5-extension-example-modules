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
      mainSelector=".d4-module"
      cssFields={cssFields}
    />
    <AttributesGroup />
    <VisibilitySettingsGroup />
    <TransitionGroup />
    <PositionGroup />
    <ScrollGroup />
  </React.Fragment>
);
