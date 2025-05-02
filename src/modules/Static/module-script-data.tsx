import React, {
  Fragment,
  ReactElement,
} from 'react';

import {
  ModuleScriptDataProps,
} from '@divi/module';
import { StaticModuleAttrs } from './types';


/**
 * Static module's script data component.
 *
 * @since ??
 *
 * @param {ModuleScriptDataProps<StaticModuleAttrs>} props React component props.
 *
 * @returns {ReactElement}
 */
export const ModuleScriptData = ({
  elements,
}: ModuleScriptDataProps<StaticModuleAttrs>): ReactElement => (
  <Fragment>
    {elements.scriptData({
      attrName: 'module',
    })}
  </Fragment>
);

