// External dependencies.
import React, { ReactElement } from 'react';

// WordPress dependencies
import { __ } from '@wordpress/i18n';

// Divi dependencies.
import {
  AdminLabel,
  Background,
  FieldContainer,
  LinkOptions,
} from '@divi/module';
import { GroupContainer } from '@divi/modal';
import {
  TextContainer,
} from '@divi/field-library';
import { defaultSettingsAttrs } from './constants';

export const SettingsContent = (): ReactElement => (
  <React.Fragment>
    <GroupContainer
      id="posts"
      title={__('Posts', 'd5-extension-example-modules')}
    >
      <FieldContainer
        attrName="title"
        label={__('Title', 'd5-extension-example-modules')}
        description={__('Title to show for module.', 'd5-extension-example-modules')}
        sticky={false}
      >
        <TextContainer />
      </FieldContainer>
      <FieldContainer
        attrName="numberOfPosts"
        label={__('Number of posts', 'd5-extension-example-modules')}
        description={__('Number of posts you want to show.', 'd5-extension-example-modules')}
        sticky={false}
        defaultAttr={defaultSettingsAttrs?.numberOfPosts}
      >
        <TextContainer />
      </FieldContainer>
    </GroupContainer>
    <LinkOptions />
    <Background
      defaultGroupAttr={defaultSettingsAttrs?.background}
    />
    <AdminLabel />
  </React.Fragment>
);
