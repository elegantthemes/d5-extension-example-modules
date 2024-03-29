import { placeholderContent } from '@divi/module';

import { ChildModuleAttrs } from '../types';

export const defaultAttributes: ChildModuleAttrs = {
  title: {
    innerContent: {
      desktop: {
        value: placeholderContent.title,
      },
    },
  },
  content: {
    innerContent: {
      desktop: {
        value: placeholderContent.body,
      },
    },
  },
};

export const customIcon: ChildModuleAttrs = {
  ...defaultAttributes,
  icon: {
    innerContent: {
      desktop: {
        value: {
          unicode: '&#x39;',
          type:    'divi',
          weight:  '400',
        },
      },
    },
  },
};

export const iconStyle: ChildModuleAttrs = {
  ...customIcon,
  icon: {
    ...customIcon.icon,
    advanced: {
      color: {
        desktop: {
          value: '#ae16f0',
        },
      },
      size: {
        desktop: {
          value: '28px',
        },
      },
    },
  },
};

export const titleStyle: ChildModuleAttrs = {
  ...defaultAttributes,
  title: {
    ...defaultAttributes.title,
    decoration: {
      font: {
        font: {
          desktop: {
            value: {
              color:  '#ae16f0',
              weight: '300',
              size:   '31px',
              style:  [
                'italic',
                'uppercase',
              ],
            },
          },
        },
      },
    },
  },
};

export const contentStyle: ChildModuleAttrs = {
  ...defaultAttributes,
  content: {
    ...defaultAttributes.content,
    decoration: {
      bodyFont: {
        body: {
          font: {
            desktop: {
              value: {
                color: '#ae16f0',
                size: '16px',
                style: [
                  'capitalize',
                  'underline',
                ],
              },
            },
          },
        },
      },
    },
  },
};
