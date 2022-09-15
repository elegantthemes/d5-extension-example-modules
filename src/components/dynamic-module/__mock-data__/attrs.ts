import { DynamicModuleAttrs } from '../types';

export const defaultAttributes: DynamicModuleAttrs = {
  title: {
    desktop: {
      value: 'Your Title Goes Here',
    },
  },
};

export const numberOfPosts: DynamicModuleAttrs = {
  ...defaultAttributes,
  numberOfPosts: {
    desktop: {
      value: '2',
    },
  },
};

export const titleStyle: DynamicModuleAttrs = {
  ...defaultAttributes,
  titleFont: {
    font: {
      desktop: {
        value: {
          size: '35px',
          headingLevel: 'h1',
          weight: '900',
          style: [
            'uppercase',
          ],
        },
      },
    },
  },
};

export const postTitleStyle: DynamicModuleAttrs = {
  ...defaultAttributes,
  postTitleFont: {
    font: {
      desktop: {
        value: {
          color: '#8300e9',
          size: '25px',
          headingLevel: 'h2',
          style: [
            'capitalize',
          ],
        },
      },
    },
  },
};
