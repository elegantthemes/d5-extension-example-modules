// Divi dependencies.
import { placeholderContent as placeholder } from '@divi/module';

import { StaticModuleAttrs } from '../types';

export const defaultAttributes: StaticModuleAttrs = {
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

export const customImage: StaticModuleAttrs = {
    ...defaultAttributes,
};

export const customBackground: StaticModuleAttrs = {
    ...defaultAttributes,
};

export const imageStyle: StaticModuleAttrs = {
    ...customImage,
};

export const titleStyle: StaticModuleAttrs = {
    ...defaultAttributes,
};

export const contentStyle: StaticModuleAttrs = {
    ...defaultAttributes,
};