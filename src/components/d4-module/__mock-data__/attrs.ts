import { D4ModuleAttrs } from '../types';

export const defaultAttributes: D4ModuleAttrs = {
  title: {
    innerContent: {
      desktop: {
        value: 'Your Title Goes Here',
      },
    },
  },
  content: {
    innerContent: {
      desktop: {
        value: '<p>Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings and even apply custom CSS to this text in the module Advanced settings.</p>',
      },
    },
  },
};

export const styleOne: D4ModuleAttrs = {
  ...defaultAttributes,
  module: {
    decoration: {
      background: {
        desktop: {
          value: {
            color: '#8300E9',
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
    },
  },
  title: {
    ...defaultAttributes.title,
    decoration: {
      font: {
        font: {
          desktop: {
            value: {
              color: '#ffffff',
            },
          },
        },
      },
    },
  },
  content: {
    ...defaultAttributes.content,
    decoration: {
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
    },
  },
};

export const styleTwo: D4ModuleAttrs = {
  ...defaultAttributes,
  module: {
    advanced: {
      text: {
        text: {
          desktop: {
            value: {
              orientation: 'center',
            },
          },
        },
      },
    },
    decoration: {
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
    },
  },
  title: {
    ...defaultAttributes.title,
    decoration: {
      font: {
        font: {
          desktop: {
            value: {
              style: [ 'uppercase' ],
              headingLevel: 'h3',
            },
          },
        },
      },
    },
  },
};

export const contentStyle: D4ModuleAttrs = {
  ...defaultAttributes,
  content: {
    ...defaultAttributes.content,
    decoration: {
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
    },
  },
};