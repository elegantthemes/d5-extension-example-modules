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

// Local dependencies.
import { cssFields } from './custom-css';

export const SettingsAdvanced = (): ReactElement => (
  <React.Fragment>
    <IdClasses />
    <Css
      mainSelector=".et_pb_static_module"
      cssFields={cssFields}
    />
    <Attributes />
    <Visibility />
    <Transition />
    <PositionGroup />
    <ScrollGroup />
  </React.Fragment>
);
