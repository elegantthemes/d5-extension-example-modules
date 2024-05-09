// External dependencies.
import React, { ReactElement } from 'react';

// WordPress dependencies
import { __ } from '@wordpress/i18n';

// Divi dependencies.
import {
  AdminLabelGroup,
  BackgroundGroup,
  FieldContainer,
  LinkGroup,
} from '@divi/module';
import { GroupContainer } from '@divi/modal';
import {
  TextContainer,
} from '@divi/field-library';
import {
  type Module,
} from '@divi/types';
import { DynamicModuleAttrs } from './types';

export const SettingsContent = ({
  defaultSettingsAttrs,
}: Module.Settings.Panel.Props<DynamicModuleAttrs>): ReactElement => (
  <React.Fragment>
    <GroupContainer
      id="posts"
      title={__('Posts', 'd5-extension-example-modules')}
    >
      <FieldContainer
        attrName="title.innerContent"
        label={__('Title', 'd5-extension-example-modules')}
        description={__('Title to show for module.', 'd5-extension-example-modules')}
        features={{
          sticky: false,
        }}
      >
        <TextContainer/>
      </FieldContainer>
      <FieldContainer
        attrName="postItems.innerContent"
        subName="postsNumber"
        label={__('Number of posts', 'd5-extension-example-modules')}
        description={__('Number of posts you want to show.', 'd5-extension-example-modules')}
        features={{
          sticky: false,
          hover: false,
          responsive: false,
        }}
        defaultAttr={defaultSettingsAttrs?.postItems?.innerContent}
      >
        <TextContainer />
      </FieldContainer>
    </GroupContainer>
    <LinkGroup />
    <BackgroundGroup />
    <AdminLabelGroup 
      defaultGroupAttr={defaultSettingsAttrs?.module?.meta?.adminLabel}
    />
  </React.Fragment>
);
