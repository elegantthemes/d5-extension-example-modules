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
export const SettingsDesign = ({
  attrs,
  groupConfiguration,
}: Module.Settings.Panel.Props<ModuleAttrs>): ReactElement => {
      
  return (
    <ModuleGroups
      groups={groupConfiguration}
    />
  );
};