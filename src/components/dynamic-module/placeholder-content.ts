// Divi dependencies.
import {placeholderContent as placeholder} from '@divi/module-utils';

// Local dependencies.
import { DynamicModuleAttrs } from './types';


export const placeholderContent: DynamicModuleAttrs = {
  title: {
    innerContent: {
      desktop: {
        value: placeholder.title,
      }
    }
  },
};
