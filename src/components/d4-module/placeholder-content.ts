// Divi dependencies.
import { placeholderContent as placeholder } from '@divi/module';

// Local dependencies.
import { D4ModuleAttrs } from './types';


export const placeholderContent: D4ModuleAttrs = {
  title: {
    desktop: {
      value: placeholder.title,
    },
  },
  content: {
    desktop: {
      value: placeholder.body,
    },
  },
};
