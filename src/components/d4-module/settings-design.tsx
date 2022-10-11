// External dependencies.
import React, { ReactElement } from 'react';

// WordPress dependencies.
import { __ } from '@wordpress/i18n';

// Divi dependencies.
import {
  Animation,
  Border,
  BoxShadow,
  Filters,
  Font,
  FontBodyGroup,
  Sizing,
  Spacing,
  Text,
  Transform,
} from '@divi/module';

// Local dependencies.
import { defaultSettingsAttrs } from './constants';

export const SettingsDesign = (): ReactElement => (
  <React.Fragment>
    <Text
      defaultGroupAttr={defaultSettingsAttrs?.text}
    />
    <Font
      groupLabel={__('Title Text', 'd5-module-extension-example')}
      attrName="titleFont"
      fieldLabel={__('Title', 'd5-module-extension-example')}
      hideElements={{
        headingLevel: false,
      }}
      defaultGroupAttr={defaultSettingsAttrs?.titleFont}
    />
    <FontBodyGroup />
    <Sizing />
    <Spacing />
    <Border />
    <BoxShadow />
    <Filters />
    <Transform />
    <Animation />
  </React.Fragment>
);
