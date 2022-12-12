import {
  ReactElement,
} from 'react';

import {
  ModuleScriptDataProps,
  useStickyScriptDataContainer,
} from '@divi/module';
import { DynamicModuleAttrs } from './types';


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
}: ModuleScriptDataProps<DynamicModuleAttrs>): ReactElement => {
  useStickyScriptDataContainer({
    affectingAttrs: {
      position: attrs?.position,
      sizing:   attrs?.sizing,
    },
    attr: attrs?.sticky,
    id,
    selector,
  });

  return null;
};
