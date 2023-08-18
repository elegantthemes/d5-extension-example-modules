import {
  ReactElement,
} from 'react';

import {
  ModuleScriptDataProps,
  useElementScriptData,
} from '@divi/module';
import { D4ModuleAttrs } from './types';


/**
 * Divi 4 module's script data component.
 *
 * @since ??
 *
 * @returns {ReactElement}
 */
export const ModuleScriptData = ({
  attrs,
  selector,
  id,
}: ModuleScriptDataProps<D4ModuleAttrs>): ReactElement => {
  useElementScriptData({
    attrs: attrs?.module?.decoration ?? {},
    selector,
    id,
  });

  return null;
};
