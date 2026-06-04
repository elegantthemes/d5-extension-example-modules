import React, {
  Fragment,
  ReactElement,
} from 'react';

import {
  ModuleScriptDataProps,
} from '@divi/module';
import { ModuleSettingsDemoAttrs } from './types';


/**
 * Module Settings Demo script data component.
 *
 * @since ??
 *
 * @param {ModuleScriptDataProps<ModuleSettingsDemoAttrs>} props React component props.
 *
 * @returns {ReactElement}
 */
export const ModuleScriptData = ({
  elements,
}: ModuleScriptDataProps<ModuleSettingsDemoAttrs>): ReactElement => (
  <Fragment>
    {elements.scriptData({
      attrName: 'module',
    })}
  </Fragment>
);
