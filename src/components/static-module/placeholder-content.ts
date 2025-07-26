// Divi dependencies.
import {placeholderContent as placeholder} from '@divi/module-utils';

// Local dependencies.
import {StaticModuleAttrs} from './types';


export const placeholderContent: StaticModuleAttrs = {
  title: {
    innerContent: {
      desktop: {
        value: placeholder.title,
      },
    }
  },
  summary: {
    innerContent: {
      desktop: {
        value: 'This is a brief summary that provides an overview of the content below. It can span multiple lines to give readers a comprehensive understanding of what to expect in the main content section.',
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
