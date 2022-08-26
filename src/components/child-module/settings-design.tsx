// External dependencies.
import React, { ReactElement } from 'react';

// WordPress dependencies.
import { __ } from '@wordpress/i18n';

// Divi dependencies.
import {
  Animation,
  Border,
  BoxShadow,
  FieldContainer,
  Filters,
  Font,
  FontBodyGroup,
  Sizing,
  Spacing,
  Text,
  Transform,
} from '@divi/module';
import { GroupContainer } from '@divi/modal';
import {
  ColorPickerContainer,
  RangeContainer,
} from '@divi/field-library';
import { mergeAttrs } from '@divi/module-utils';

// Local dependencies.
import { defaultSettingsAttrs as parentDefaultSettingsAttrs } from '../parent-module/constants';
import { defaultSettingsAttrs } from './constants';
import { ChildModuleSettingsDesign } from './types';

export const SettingsDesign = ({
  parentAttrs,
}:ChildModuleSettingsDesign): ReactElement => {
  const parentModuleAttrs = mergeAttrs({
    defaultAttrs: parentDefaultSettingsAttrs,
    attrs:        parentAttrs?.asMutable({ deep: true }),
  });

  const defaultIconColor = mergeAttrs({
    defaultAttrs: defaultSettingsAttrs?.iconColor,
    attrs:        parentModuleAttrs?.iconColor,
  });

  const defaultIconSize = mergeAttrs({
    defaultAttrs: defaultSettingsAttrs?.iconSize,
    attrs:        parentModuleAttrs?.iconSize,
  });

  const defaultText = mergeAttrs({
    defaultAttrs: defaultSettingsAttrs?.text,
    attrs:        parentModuleAttrs?.text,
  });

  const defaultTitleFont = mergeAttrs({
    defaultAttrs: defaultSettingsAttrs?.titleFont,
    attrs:        parentModuleAttrs?.titleFont,
  });

  const defaultBodyFont = mergeAttrs({
    defaultAttrs: defaultSettingsAttrs?.bodyFont,
    attrs:        parentModuleAttrs?.bodyFont,
  });

  return (
    <React.Fragment>
      <GroupContainer id="icon" title={__('Icon Style', 'd5-module-extension-example')}>
        <FieldContainer
          attrName="iconColor"
          label={__('Icon Color', 'd5-module-extension-example')}
          description={__('Input your value to action title here.', 'd5-module-extension-example')}
          sticky={false}
          defaultAttr={defaultIconColor}
        >
          <ColorPickerContainer />
        </FieldContainer>
        <FieldContainer
          attrName="iconSize"
          label={__('Icon Size', 'd5-module-extension-example')}
          description={__('Input your value to action title here.', 'd5-module-extension-example')}
          sticky={false}
          defaultAttr={defaultIconSize}
        >
          <RangeContainer />
        </FieldContainer>
      </GroupContainer>
      <Text
        defaultGroupAttr={defaultText}
        hideElements={{
          color: true,
        }}
      />
      <Font
        groupLabel={__('Title Text', 'd5-module-extension-example')}
        attrName="titleFont"
        fieldLabel={__('Title', 'd5-module-extension-example')}
        defaultGroupAttr={defaultTitleFont}
      />
      <FontBodyGroup
        defaultGroupAttr={defaultBodyFont}
      />
      <Sizing />
      <Spacing />
      <Border />
      <BoxShadow />
      <Filters />
      <Transform />
      <Animation />
    </React.Fragment>
  );
};
