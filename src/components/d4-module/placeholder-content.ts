// Divi dependencies.
const placeholder = window?.divi?.moduleUtils?.placeholderContent;

// Local dependencies.
import { D4ModuleAttrs } from './types';


export const placeholderContent: D4ModuleAttrs = {
  title: {
    innerContent: {
      desktop: {
        value: placeholder.title,
      },
    }
  },
  content: {
    innerContent: {
      desktop: {
        value: placeholder.body,
      },
    }
  },
};
