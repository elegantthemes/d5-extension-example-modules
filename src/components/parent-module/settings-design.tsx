// External dependencies.
import React, { ReactElement } from 'react';

// WordPress dependencies.
import { __ } from '@wordpress/i18n';

// Divi dependencies.
import {
  AnimationGroup,
  BorderGroup,
  BoxShadowGroup,
  FieldContainer,
  FiltersGroup,
  FontGroup,
  FontBodyGroup,
  SizingGroup,
  SpacingGroup,
  TextGroup,
  TransformGroup,
} from '@divi/module';
import { GroupContainer } from '@divi/modal';
import { ColorPickerContainer, RangeContainer } from '@divi/field-library';
import {
  type Module,
} from '@divi/types';
import {ParentModuleAttrs} from "./types";


export const SettingsDesign = ({
   defaultSettingsAttrs,
 }: Module.Settings.Panel.Props<ParentModuleAttrs>): ReactElement => (
  <React.Fragment>
    <GroupContainer id="icon" title={__('Icon Style', 'd5-extension-example-modules')}>
      <FieldContainer
        attrName="icon.advanced.color"
        label={__('Icon Color', 'd5-extension-example-modules')}
        description={__('Input your value to action title here.', 'd5-extension-example-modules')}
        features={{
          sticky: false,
        }}
        defaultAttr={defaultSettingsAttrs?.icon}
      >
        <ColorPickerContainer />
      </FieldContainer>
      <FieldContainer
        attrName="icon.advanced.size"
        label={__('Icon Size', 'd5-extension-example-modules')}
        description={__('Input your value to action title here.', 'd5-extension-example-modules')}
        features={{
          sticky: false,
        }}
        defaultAttr={defaultSettingsAttrs}
      >
        <RangeContainer />
      </FieldContainer>
    </GroupContainer>
    <TextGroup
      defaultGroupAttr={defaultSettingsAttrs?.module?.advanced?.text}
      fields={{
        color: {
          render: false,
        },
      }}
    />
    <FontGroup
      groupLabel={__('Title Text', 'd5-extension-example-modules')}
      attrName="title.decoration.font"
      fieldLabel={__('Title', 'd5-extension-example-modules')}
      defaultGroupAttr={defaultSettingsAttrs?.title?.decoration?.font?.asMutable({ deep: true }) ?? {}}
    />
    <FontBodyGroup
      attrName="content.decoration.bodyFont"
    />
    <SizingGroup />
    <SpacingGroup />
    <BorderGroup />
    <BoxShadowGroup />
    <FiltersGroup />
    <TransformGroup />
    <AnimationGroup />
  </React.Fragment>
);
