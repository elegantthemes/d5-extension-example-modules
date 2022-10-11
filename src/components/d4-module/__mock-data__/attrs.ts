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
  bodyFont: {
    body: {
      font: {
        desktop: {
          value: {
            color: '#ffffff',
          },
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
  background: {
    desktop: {
      value: {
        color: '#EDF000',
      },
    },
  },
  boxShadow: {
    desktop: {
      value: {
        style: 'preset3',
      },
    },
  },
  border: {
    desktop: {
      value: {
        radius: {
          bottomLeft:  '15px',
          bottomRight: '15px',
          sync:        'on',
          topLeft:     '15px',
          topRight:    '15px',
        },
      },
    },
  },
  titleFont: {
    font: {
      desktop: {
        value: {
          style: [ 'uppercase' ],
          headingLevel: 'h3',
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
          syncHorizontal: 'on',
          syncVertical:   'on',
          top:            '30px',
        },
      },
    },
  },
  text: {
    text: {
      desktop: {
        value: {
          orientation: 'center',
        },
      },
    },
  },
};

export const contentStyle: D4ModuleAttrs = {
  ...defaultAttributes,
  bodyFont: {
    body: {
      font: {
        desktop: {
          value: {
            color: '#8300E9',
            lineHeight: '1.8em',
            size: '18px',
            style: [
              'capitalize',
            ],
          },
        },
      },
      textShadow: {
        desktop: {
          value: {
            color: '#00FFC3',
            style: 'preset2',
          },
        },
      },
    },
  },
};