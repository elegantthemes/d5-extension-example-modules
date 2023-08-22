import {
  ReactElement,
} from 'react';

import {
  ModuleScriptDataProps,
  useElementScriptData,
} from '@divi/module';
import { ParentModuleAttrs } from './types';


/**
 * Parent module's script data component.
 *
 * @since ??
 *
 * @returns {ReactElement}
 */
export const ModuleScriptData = ({
  attrs,
  selector,
  id,
}: ModuleScriptDataProps<ParentModuleAttrs>): ReactElement => {
  useElementScriptData({
    attrs: attrs?.module?.decoration ?? {},
    selector,
    id,
  });

  return null;
};
