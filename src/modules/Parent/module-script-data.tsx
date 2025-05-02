import React, {
  Fragment,
  ReactElement,
} from 'react';

import {
  ModuleScriptDataProps,
} from '@divi/module';
import { ParentModuleAttrs } from './types';


/**
 * Parent module's script data component.
 *
 * @since ??
 *
 * @param {ModuleScriptDataProps<ParentModuleAttrs>} props React component props.
 *
 * @returns {ReactElement}
 */
export const ModuleScriptData = ({
  elements,
}: ModuleScriptDataProps<ParentModuleAttrs>): ReactElement => (
  <Fragment>
    {elements.scriptData({
      attrName: 'module',
    })}
  </Fragment>
);

