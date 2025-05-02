// External dependencies.
import React, { ReactElement } from 'react';
import { set } from 'lodash';

// WordPress dependencies.
import { __ } from '@wordpress/i18n';

// Divi dependencies.
import {
  ModuleGroups,
} from '@divi/module';
import { mergeAttrs } from '@divi/module-utils';
import {ParentModuleAttrs} from "../parent-module/types";
import {ChildModuleAttrs} from "./types";
import {
  type Module,
} from '@divi/types';



export const SettingsDesign = ({
  defaultSettingsAttrs,
  parentAttrs,
  groupConfiguration,
} : Module.Settings.Panel.Props<ChildModuleAttrs, ParentModuleAttrs>): ReactElement => {

  // Insert custom Icon default attribute value inherited from Parent Module if any.
  if (groupConfiguration?.designIcon?.component?.props) {
    const defaultIconAttrs = mergeAttrs({
      defaultAttrs: defaultSettingsAttrs?.icon?.advanced?.asMutable({deep: true}) ?? {},
      attrs: parentAttrs?.icon?.advanced?.asMutable({deep: true}) ?? {},
    });

    set(groupConfiguration, ['designIcon', 'component', 'props', 'fields', 'iconAdvancedColor', 'defaultAttr'], defaultIconAttrs?.color);
    set(groupConfiguration, ['designIcon', 'component', 'props', 'fields', 'iconAdvancedSize', 'defaultAttr'], defaultIconAttrs?.size);
  }

  // Insert custom Text default attribute value inherited from Parent Module if any.
  if (groupConfiguration?.['module-text']?.component?.props) {
    const defaultTextAttrs = mergeAttrs({
      defaultAttrs: defaultSettingsAttrs?.module?.advanced?.asMutable({deep: true})?.text,
      attrs: parentAttrs?.module?.advanced?.asMutable({deep: true})?.text,
    });

    set(groupConfiguration, ['module-text', 'component', 'props', 'defaultGroupAttr'], defaultTextAttrs);
  }

  // Insert custom Title Text default attribute value inherited from Parent Module if any.
  if (groupConfiguration?.['title-font']?.component?.props) {
    const defaultTitleFontAttrs = mergeAttrs({
      defaultAttrs: defaultSettingsAttrs?.title?.decoration?.font?.asMutable({deep: true}) ?? {},
      attrs: parentAttrs?.title?.decoration?.font?.asMutable({deep: true}) ?? {},
    });

    set(groupConfiguration, ['title-font', 'component', 'props', 'defaultGroupAttr'], defaultTitleFontAttrs);
  }

  // Insert custom Body Text default attribute value inherited from Parent Module if any.
  if (groupConfiguration?.['content-bodyFont']?.component?.props) {
    const defaultBodyFontAttrs = mergeAttrs({
      defaultAttrs: defaultSettingsAttrs?.content?.decoration?.bodyFont?.asMutable({deep: true}) ?? {},
      attrs: parentAttrs?.content?.decoration?.bodyFont?.asMutable({deep: true}) ?? {},
    });

    set(groupConfiguration, ['content-bodyFont', 'component', 'props', 'defaultGroupAttr'], defaultBodyFontAttrs);
  }

  return (
    <ModuleGroups
      groups={groupConfiguration}
    />
  );
};
