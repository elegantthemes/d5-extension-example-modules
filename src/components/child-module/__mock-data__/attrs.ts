import { placeholderContent } from '@divi/module';

import { ChildModuleAttrs } from '../types';

export const defaultAttributes: ChildModuleAttrs = {
  title: {
    desktop: {
      value: placeholderContent.title,
    },
  },
  content: {
    desktop: {
      value: placeholderContent.body,
    },
  },
};

export const customIcon: ChildModuleAttrs = {
  ...defaultAttributes,
  icon: {
    desktop: {
      value: {
        unicode: '&#x39;',
        type:    'divi',
        weight:  '400',
      },
    },
  },
};

export const iconStyle: ChildModuleAttrs = {
  ...customIcon,
  iconColor: {
    desktop: {
      value: '#ae16f0',
    },
  },
  iconSize: {
    desktop: {
      value: '28px',
    },
  },
};

export const titleStyle: ChildModuleAttrs = {
  ...defaultAttributes,
  titleFont: {
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
};

export const contentStyle: ChildModuleAttrs = {
  ...defaultAttributes,
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
};
