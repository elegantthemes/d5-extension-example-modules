import { DynamicModuleAttrs } from '../types';

export const defaultAttributes: DynamicModuleAttrs = {
  title: {
    innerContent: {
      desktop: {
        value: 'Your Title Goes Here',
      },
    },
  },
};

export const numberOfPosts: DynamicModuleAttrs = {
  ...defaultAttributes,
  postItems: {
    innerContent: {
      desktop: {
        value: {
          postsNumber: '2',
        },
      },
    },
  },
};

export const titleStyle: DynamicModuleAttrs = {
  ...defaultAttributes,
  title: {
    ...defaultAttributes.title,
    decoration: {
      font: {
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
    },
  },
};

export const postTitleStyle: DynamicModuleAttrs = {
  ...defaultAttributes,
  postTitle: {
    decoration: {
      font: {
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
    },
  },
};
