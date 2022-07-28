// WordPress dependencies.
import { __ } from '@wordpress/i18n';

// Divi dependencies.
import { mergeAttrs } from '@divi/module-utils';

// Local dependencies.
import { StaticModuleAttrs } from './types';

/**
 * Default attributes. Default attributes that are needed on rendered module
 * as well on the module's settings modal.
 *
 * @since ??
 */
export const defaultAttrs: StaticModuleAttrs = {
  text: {
    text: {
      desktop: {
        value: {
          color: 'light',
        }
      }
    }
  },
  titleFont: {
    font: {
      desktop: {
        value: {
          headingLevel: 'h2',
        },
      },
    },
  },
};

/**
 * Default attributes that is inferred from module's static style. Rendered module doesn't
 * need this because static style already executes style that resulting identical output should
 * these attributes are being rendered.
 *
 * @since ??
 */
export const defaultPrintedStyleAttrs: StaticModuleAttrs = {
  background: {
    desktop: {
      value: {
        color: 'ecf4f7',
      },
    },
  },
  titleFont: {
    font: {
      desktop: {
        value: {
          size: '26px',
          lineHeight: '1em',
          weight: '500',
        },
      },
    },
  },
};

/**
 * Combination of default attributes and defaults that are inferred from printed style attributes
 * that are needed by module's setting modal to render correct `defaultValue`.
 *
 * @since ??
 */
export const defaultSettingsAttrs: StaticModuleAttrs = mergeAttrs({
    defaultAttrs,
    attrs: defaultPrintedStyleAttrs,
})