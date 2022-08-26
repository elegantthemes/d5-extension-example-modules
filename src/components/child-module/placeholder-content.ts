// Divi dependencies.
import { placeholderContent as placeholder } from '@divi/module';

// Local dependencies.
import { ChildModuleAttrs } from './types';


export const placeholderContent: ChildModuleAttrs = {
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
