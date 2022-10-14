// External dependencies.
import React, { ReactElement } from 'react';

// WordPress dependencies
import { __ } from '@wordpress/i18n';

// Divi dependencies.
import {
  AdminLabel,
  Background,
  DraggableChildModuleListContainer,
  FieldContainer,
  LinkOptions,
} from '@divi/module';
import {
  DraggableListContainer,
  IconPickerContainer,
} from '@divi/field-library';
import { GroupContainer } from '@divi/modal';

// Local dependencies.
import { defaultSettingsAttrs } from './constants';

export const SettingsContent = (): ReactElement => (
  <React.Fragment>
    <DraggableChildModuleListContainer
      childModuleName="example/child-module"
      addTitle={__('Add New Child Module', 'et_builder')}
    >
      <DraggableListContainer />
    </DraggableChildModuleListContainer>
    <GroupContainer
      id="icon"
      title={__('Icon', 'd5-module-extension-example')}
    >
      <FieldContainer
        attrName="icon"
        label={__('Icon', 'd5-module-extension-example')}
        description={__('Upload an Image', 'd5-module-extension-example')}
        sticky={false}
        defaultAttr={defaultSettingsAttrs?.icon}
      >
        <IconPickerContainer />
      </FieldContainer>
    </GroupContainer>
    <LinkOptions />
    <Background />
    <AdminLabel />
  </React.Fragment>
);
