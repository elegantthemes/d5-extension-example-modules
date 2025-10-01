// Divi dependencies.
const placeholder = window?.divi?.moduleUtils?.placeholderContent;

// Local dependencies.
import { StaticModuleAttrs } from './types';


export const placeholderContent: StaticModuleAttrs = {
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
  image: {
    innerContent: {
      desktop: {
        value: {
          src: placeholder.image.landscape,
        },
      },
    },
  },
};
