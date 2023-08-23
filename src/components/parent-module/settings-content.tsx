// External dependencies.
import React, { ReactElement } from 'react';

// WordPress dependencies
import { __ } from '@wordpress/i18n';

// Divi dependencies.
import {
  AdminLabelGroup,
  BackgroundGroup,
  DraggableChildModuleListContainer,
  FieldContainer,
  LinkGroup,
  SettingsProps,
} from '@divi/module';
import {
  DraggableListContainer,
  IconPickerContainer,
} from '@divi/field-library';
import { GroupContainer } from '@divi/modal';
import {ParentModuleAttrs} from "./types";


export const SettingsContent = ({
    defaultSettingsAttrs,
  }: SettingsProps<ParentModuleAttrs>): ReactElement => (
  <React.Fragment>
    <DraggableChildModuleListContainer
      childModuleName="example/child-module"
      addTitle={__('Add New Child Module', 'et_builder')}
    >
      <DraggableListContainer />
    </DraggableChildModuleListContainer>
    <GroupContainer
      id="icon"
      title={__('Icon', 'd5-extension-example-modules')}
    >
      <FieldContainer
        attrName="icon.innerContent"
        label={__('Icon', 'd5-extension-example-modules')}
        description={__('Upload an Icon', 'd5-extension-example-modules')}
        defaultAttr={defaultSettingsAttrs?.icon}
        features={{
          sticky: false,
        }}
      >
        <IconPickerContainer />
      </FieldContainer>
    </GroupContainer>
    <LinkGroup />
    <BackgroundGroup />
    <AdminLabelGroup />
  </React.Fragment>
);
