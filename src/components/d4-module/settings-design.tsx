// External dependencies.
import React, { ReactElement } from 'react';

// WordPress dependencies.
import { __ } from '@wordpress/i18n';

// Divi dependencies.
import {
  AnimationGroup,
  BorderGroup,
  BoxShadowGroup,
  FiltersGroup,
  FontGroup,
  FontBodyGroup,
  SizingGroup,
  SpacingGroup,
  TextGroup,
  TransformGroup,
} from '@divi/module';
import {
  type Module,
} from '@divi/types';

// Local dependencies.
import { D4ModuleAttrs } from './types';

export const SettingsDesign = ({
  defaultSettingsAttrs,
}: Module.Settings.Panel.Props<D4ModuleAttrs>): ReactElement => (
  <React.Fragment>
    <TextGroup />
    <FontGroup
      groupLabel={__('Title Text', 'd5-extension-example-modules')}
      attrName="title.decoration.font"
      fieldLabel={__('Title', 'd5-extension-example-modules')}
      fields={{
        headingLevel: {
          render: true,
        },
      }}
      defaultGroupAttr={defaultSettingsAttrs?.title?.decoration?.font?.asMutable({ deep: true }) ?? {}}
    />
    <FontBodyGroup />
    <SizingGroup />
    <SpacingGroup />
    <BorderGroup />
    <BoxShadowGroup />
    <FiltersGroup />
    <TransformGroup />
    <AnimationGroup />
  </React.Fragment>
);
