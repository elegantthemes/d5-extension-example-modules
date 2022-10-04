// Divi dependencies.
import { placeholderContent as placeholder } from '@divi/module';

import { D4ModuleAttrs } from '../types';

export const defaultAttributes: D4ModuleAttrs = {
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
};

export const styleOne: D4ModuleAttrs = {
  ...defaultAttributes,
  background: {
    desktop: {
      value: {
        color: '#8300E9',
      },
    },
  },
  titleFont: {
    font: {
      desktop: {
        value: {
          color: '#ffffff',
        },
      },
    },
  },
  spacing: {
    desktop: {
      value: {
        padding: {
          bottom:         '30px',
          left:           '30px',
          right:          '30px',
          top:            '30px',
          syncHorizontal: 'on',
          syncVertical:   'on',
        },
      },
    },
  },
};

export const styleTwo: D4ModuleAttrs = {
  ...defaultAttributes,
};

export const contentStyle: D4ModuleAttrs = {
  ...defaultAttributes,
};