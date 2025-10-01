// Divi dependencies.
const placeholder = window?.divi?.moduleUtils?.placeholderContent;

// Local dependencies.
import { ChildModuleAttrs } from './types';


export const placeholderContent: ChildModuleAttrs = {
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
