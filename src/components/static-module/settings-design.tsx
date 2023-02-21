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
import { GroupContainer } from '@divi/modal';

// Local dependencies.
import { defaultSettingsAttrs } from './constants';

export const SettingsDesign = (): ReactElement => (
  <React.Fragment>
    <GroupContainer id="imageStyle" title={__('Image Style', 'd5-extension-example-modules')}>
      <Border
        attrName="image.border"
        grouped={false}
      />
      <Spacing
        attrName="image.spacing"
        grouped={false}
      />
      <BoxShadow
        attrName="image.boxShadow"
        grouped={false}
      />
      <Filters
        attrName="image.filter"
        grouped={false}
      />
    </GroupContainer>
    <Text
      defaultGroupAttr={defaultSettingsAttrs?.text}
    />
    <Font
      groupLabel={__('Title Text', 'd5-extension-example-modules')}
      attrName="titleFont"
      fieldLabel={__('Title', 'd5-extension-example-modules')}
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
