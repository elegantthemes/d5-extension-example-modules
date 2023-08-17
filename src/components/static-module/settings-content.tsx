// External dependencies.
import React, {ReactElement} from 'react';

// WordPress dependencies
import {__} from '@wordpress/i18n';

// Divi dependencies.
import {
  AdminLabelGroup,
  BackgroundGroup,
  FieldContainer,
  LinkGroup,
  SettingsProps,
} from '@divi/module';
import {
  GroupContainer
} from '@divi/modal';
import {
  RichTextContainer,
  TextContainer,
  UploadContainer,
} from '@divi/field-library';

import {StaticModuleAttrs} from "./types";

export const SettingsContent = ({
    defaultSettingsAttrs,
  }: SettingsProps<StaticModuleAttrs>): ReactElement => (
  <React.Fragment>
    <GroupContainer
      id="mainContent"
      title={__('Text', 'd5-extension-example-modules')}
    >
      <FieldContainer
        attrName="title.innerContent"
        label={__('Title', 'd5-extension-example-modules')}
        description={__('Input your value to action title here.', 'd5-extension-example-modules')}
        sticky={false}
      >
        <TextContainer/>
      </FieldContainer>
      <FieldContainer
        attrName="content.innerContent"
        label={__('Content', 'd5-extension-example-modules')}
        description={__('Input the main text content for your module here.', 'd5-extension-example-modules')}
        sticky={false}
      >
        <RichTextContainer/>
      </FieldContainer>
    </GroupContainer>
    <GroupContainer
      id="image"
      title={__('Image', 'd5-extension-example-modules')}
    >
      <FieldContainer
        attrName="image.innerContent"
        subName="src"
        label={__('Image', 'd5-extension-example-modules')}
        description={__('Upload an Image', 'd5-extension-example-modules')}
        sticky={false}
      >
        <UploadContainer/>
      </FieldContainer>
    </GroupContainer>
    <LinkGroup/>
    <BackgroundGroup
      defaultGroupAttr={defaultSettingsAttrs?.module?.decoration?.background?.asMutable({deep: true}) ?? {}}
    />
    <AdminLabelGroup/>
  </React.Fragment>
);
