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
import { DynamicModuleAttrs } from './types';


export const SettingsDesign = ({
  defaultSettingsAttrs,
}: Module.Settings.Panel.Props<DynamicModuleAttrs>): ReactElement => (
  <React.Fragment>
    <TextGroup />
    <FontGroup
      groupLabel={__('Title Text', 'd5-extension-example-modules')}
      attrName="title.decoration.font"
      fieldLabel={__('Title', 'd5-extension-example-modules')}
      defaultGroupAttr={defaultSettingsAttrs?.title?.decoration?.font?.asMutable({ deep: true }) ?? {}}
      fields={{
        headingLevel: {
          render: true,
        },
      }}
    />
    <FontGroup
      groupLabel={__('Post Title Text', 'd5-extension-example-modules')}
      attrName="postTitle.decoration.font"
      fieldLabel={__('Post Title', 'd5-extension-example-modules')}
      fields={{
        headingLevel: {
          render: true,
        },
      }}
      defaultGroupAttr={defaultSettingsAttrs?.postTitle?.decoration?.font?.asMutable({ deep: true }) ?? {}}
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
