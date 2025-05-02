import React, { type ReactElement } from 'react';
import { set } from 'lodash';
import { ModuleAttrs } from './types';

import {
  ModuleGroups,
} from '@divi/module';
import {
  type Module,
} from '@divi/types';


/**
 * Content panel component for the Search module settings modal.
 *
 * @since ??
 *
 * @param {Module.Settings.Panel.Props} param0 Content panel props.
 *
 * @returns {ReactElement}
 */
export const SettingsContent = ({
  attrs,
  groupConfiguration,
}: Module.Settings.Panel.Props<ModuleAttrs>): ReactElement => {
  // Show Read More Button Options.
  const showButton  = 'on' === attrs?.title?.readMore?.icon?.desktop?.value?.show?.toString() ? true : false;

  // Insert props value to `panelHeader` group.
  if (groupConfiguration?.panelHeader?.component?.props) {
    set(groupConfiguration, ['panelHeader', 'component', 'props', 'fields', 'url', 'visible'], showButton);
    set(groupConfiguration, ['panelHeader', 'component', 'props', 'fields', 'text', 'visible'], showButton);
    set(groupConfiguration, ['panelHeader', 'component', 'props', 'fields', 'target', 'visible'], showButton);
  }

  return (
    <ModuleGroups
      groups={groupConfiguration}
    />
  );
};