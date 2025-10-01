// Divi dependencies.
const placeholder = window?.divi?.moduleUtils?.placeholderContent;

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
