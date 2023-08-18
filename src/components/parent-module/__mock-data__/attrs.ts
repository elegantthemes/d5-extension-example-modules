import {ParentModuleAttrs} from '../types';

export const defaultAttributes: ParentModuleAttrs = {};

export const customIcon: ParentModuleAttrs = {
  icon: {
    decoration: {
      icon: {
        desktop: {
          value: {
            unicode: '&#x39;',
            type: 'divi',
            weight: '400',
          },
        },
      }
    }
  },
};

export const iconStyle: ParentModuleAttrs = {
  ...defaultAttributes,
  icon: {
    decoration: {
      icon: {
        desktop: {
          value: {
            unicode: '&#x39;',
            type: 'divi',
            weight: '400',
            color: '#ae16f0',
            size: '27px',
          },
        },
      }
    }
  },
};

export const titleStyle: ParentModuleAttrs = {
  title: {
    decoration: {
      font: {
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
      }
    }
  },
};

export const contentStyle: ParentModuleAttrs = {
  content: {
    decoration: {
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
  }
}
