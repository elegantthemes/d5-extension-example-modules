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
import {
  ColorPickerContainer,
  RangeContainer,
} from '@divi/field-library';
import { mergeAttrs } from '@divi/module-utils';
import {ParentModuleAttrs} from "../parent-module/types";
import {ChildModuleAttrs} from "./types";
import {
  type Module,
} from '@divi/types';



export const SettingsDesign = ({
   defaultSettingsAttrs,
  parentAttrs,
 }: Module.Settings.Panel.Props<ChildModuleAttrs, ParentModuleAttrs>): ReactElement => {

  const defaultIconAttrs = mergeAttrs({
    defaultAttrs: defaultSettingsAttrs?.icon?.advanced?.asMutable({deep: true}) ?? {},
    attrs: parentAttrs?.icon?.advanced?.asMutable({deep: true}) ?? {},
  });

  const defaultTextAttrs = mergeAttrs({
    defaultAttrs: defaultSettingsAttrs?.module?.advanced?.asMutable({deep: true})?.text,
    attrs: parentAttrs?.module?.advanced?.asMutable({deep: true})?.text,
  });

  const defaultTitleFontAttrs = mergeAttrs({
    defaultAttrs: defaultSettingsAttrs?.title?.decoration?.font?.asMutable({deep: true}) ?? {},
    attrs: parentAttrs?.title?.decoration?.font?.asMutable({deep: true}) ?? {},
  });

  const defaultBodyFontAttrs = mergeAttrs({
    defaultAttrs: defaultSettingsAttrs?.content?.decoration?.bodyFont?.asMutable({deep: true}) ?? {},
    attrs: parentAttrs?.content?.decoration?.bodyFont?.asMutable({deep: true}) ?? {},
  });

  return (
    <React.Fragment>
      <GroupContainer id="icon" title={__('Icon Style', 'd5-extension-example-modules')}>
        <FieldContainer
          attrName="icon.advanced.color"
          label={__('Icon Color', 'd5-extension-example-modules')}
          description={__('Input your value to action title here.', 'd5-extension-example-modules')}
          features={{
            sticky: false,
          }}
          defaultAttr={defaultIconAttrs}
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
          defaultAttr={defaultIconAttrs}
        >
          <RangeContainer />
        </FieldContainer>
      </GroupContainer>
      <TextGroup
        defaultGroupAttr={defaultTextAttrs}
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
        defaultGroupAttr={defaultTitleFontAttrs}
      />
      <FontBodyGroup
        attrName="content.decoration.bodyFont"
        defaultGroupAttr={defaultBodyFontAttrs}
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
};
