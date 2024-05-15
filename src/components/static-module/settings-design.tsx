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
import { GroupContainer } from '@divi/modal';

// Local dependencies.
import {StaticModuleAttrs} from "./types";

export const SettingsDesign = ({
   defaultSettingsAttrs,
 }: Module.Settings.Panel.Props<StaticModuleAttrs>): ReactElement => (
  <React.Fragment>
    <GroupContainer id="imageStyle" title={__('Image Style', 'd5-extension-example-modules')}>
      <BorderGroup
        attrName="image.decoration.border"
        grouped={false}
      />
      <SpacingGroup
        attrName="image.decoration.spacing"
        grouped={false}
      />
      <BoxShadowGroup
        attrName="image.decoration.boxShadow"
        grouped={false}
      />
      <FiltersGroup
        attrName="image.decoration.filter"
        grouped={false}
      />
    </GroupContainer>
    <TextGroup
      defaultGroupAttr={defaultSettingsAttrs?.module?.advanced?.text}
    />
    <FontGroup
      groupLabel={__('Title Text', 'd5-extension-example-modules')}
      attrName="title.decoration.font"
      fieldLabel={__('Title', 'd5-extension-example-modules')}
      fields={{
        headingLevel: {
          render: false,
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
