import { ParentModuleAttrs } from '../types';

export const defaultAttributes: ParentModuleAttrs = {};

export const customIcon: ParentModuleAttrs = {
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

export const iconStyle: ParentModuleAttrs = {
  ...customIcon,
  iconColor: {
    desktop: {
      value: '#ae16f0',
    },
  },
  iconSize: {
    desktop: {
      value: '27px',
    },
  },
};

export const titleStyle: ParentModuleAttrs = {
  titleFont: {
    font: {
      desktop: {
        value: {
          color: '#ae16f0',
          weight: '300',
          style: [
            'capitalize',
          ],
        },
      },
    },
  },
};

export const contentStyle: ParentModuleAttrs = {
  bodyFont: {
    body: {
      font: {
        desktop: {
          value: {
            color: '#ae16f0',
            size: '16px',
            style: [
              'uppercase',
            ],
          },
        },
      },
    },
  },
}