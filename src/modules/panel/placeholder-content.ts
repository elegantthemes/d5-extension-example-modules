// Divi dependencies.
import {placeholderContent as placeholder} from '@divi/module';

// Local dependencies.
import { ModuleAttrs } from './types';


export const placeholderContent: ModuleAttrs = {
  module: {
    meta: {
      adminLabel: {
        desktop: {
          value: 'Panel Module'
        }
      },
    },
    advanced: {
      layout: {
        desktop: {
          value: {
            style: 'default'
          }
        }
      }
    }
  },
  title: {
    innerContent: {
      desktop: {
        value: 'Heading Title'
      }
    },
    decoration: {
      font: {
        font: {
          desktop: {
            value: {
              headingLevel: 'h4',
              textAlign: 'left',
            }
          }
        }
      }
    },
    readMore:{
      link: {
        desktop: {
          value: {
            url: '#',
            target: 'on',
            text: 'Read More'
          }
        }
      },
      icon: {
        desktop: {
          value: {
            show: 'off'
          }
        }
      }
    }
  }
};
