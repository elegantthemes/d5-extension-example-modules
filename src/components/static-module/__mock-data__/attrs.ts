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
  image: {
    image: {
      desktop: {
        value: {
          src: 'https://www.elegantthemes.com/images/home/category-thumb-store-large.jpg',
          alt: 'category thumb store large',
        },
      },
    },
  },
};

export const customBackground: StaticModuleAttrs = {
  ...defaultAttributes,
  background: {
    desktop: {
      value: {
        color: '#7cda24',
      },
    },
  },
};

export const imageStyle: StaticModuleAttrs = {
  ...customImage,
  image: {
    ...customImage.image,
    border: {
      desktop: {
        value: {
          radius: {
            sync: 'on',
            bottomLeft: '14px',
            topLeft: '14px',
            bottomRight: '14px',
            topRight: '14px',
          },
          styles: {
            all: {
              width: '10px',
              style: 'solid',
              color: '#8300e9',
            },
          },
        },
      },
    },
    boxShadow: {
      desktop: {
        value: {
          style: 'preset2',
        },
      },
    },
  },
};

export const titleStyle: StaticModuleAttrs = {
  ...defaultAttributes,
  titleFont: {
    font: {
      desktop: {
        value: {
          size: '36px',
          color: '#8300e9',
          weight: '300',
          style: [
            'uppercase',
          ],
          headingLevel: 'h1',
        },
      },
    },
  },
};

export const contentStyle: StaticModuleAttrs = {
  ...defaultAttributes,
  bodyFont: {
    body: {
      font: {
        desktop: {
          value: {
            letterSpacing: '1px',
            textAlign: 'center',
            style: [
              'italic',
            ],
          },
        },
      },
    },
  },
};