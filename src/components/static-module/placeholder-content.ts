// Divi dependencies.
import { placeholderContent as placeholder } from '@divi/module';

// Local dependencies.
import { StaticModuleAttrs } from './types';


export const placeholderContent: StaticModuleAttrs = {
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
  image: {
    image: {
      desktop: {
        value: {
          src: placeholder.image.landscape,
        },
      },
    },
  },
};
