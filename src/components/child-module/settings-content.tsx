// External dependencies.
import React, { ReactElement } from 'react';

// WordPress dependencies
import { __ } from '@wordpress/i18n';

// Divi dependencies.
import {
  Background,
  FieldContainer,
  LinkOptions,
} from '@divi/module';
import { GroupContainer } from '@divi/modal';
import {
  IconPickerContainer,
  RichTextContainer,
  TextContainer,
} from '@divi/field-library';
import { mergeAttrs } from '@divi/module-utils';

// Local dependencies.
import { defaultSettingsAttrs as parentDefaultSettingsAttrs } from '../parent-module/constants';
import { defaultSettingsAttrs } from './constants';
import { ChildModuleSettingsContent } from './types';

export const SettingsContent = ({
  parentAttrs,
}: ChildModuleSettingsContent): ReactElement => {
  const parentModuleAttrs = mergeAttrs({
    defaultAttrs: parentDefaultSettingsAttrs,
    attrs:        parentAttrs?.asMutable({ deep: true }),
  });

  const defaultIcon = mergeAttrs({
    defaultAttrs: defaultSettingsAttrs?.icon,
    attrs:        parentModuleAttrs?.icon,
  });

  return (
    <React.Fragment>
      <GroupContainer
        id="mainContent"
        title={__('Text', 'd5-module-extension-example')}
      >
        <FieldContainer
          attrName="title"
          label={__('Title', 'd5-module-extension-example')}
          description={__('Input your value to action title here.', 'd5-module-extension-example')}
          sticky={false}
        >
          <TextContainer />
        </FieldContainer>
        <FieldContainer
          attrName="content"
          label={__('Content', 'd5-module-extension-example')}
          description={__('Input the main text content for your module here.', 'd5-module-extension-example')}
          sticky={false}
        >
          <RichTextContainer />
        </FieldContainer>
      </GroupContainer>
      <GroupContainer
        id="icon"
        title={__('Icon', 'd5-module-extension-example')}
      >
        <FieldContainer
          attrName="icon"
          label={__('Icon', 'd5-module-extension-example')}
          description={__('Upload an Image', 'd5-module-extension-example')}
          sticky={false}
          defaultAttr={defaultIcon}
        >
          <IconPickerContainer />
        </FieldContainer>
      </GroupContainer>
      <LinkOptions />
      <Background
        defaultGroupAttr={defaultSettingsAttrs?.background}
      />
    </React.Fragment>
  );
}
