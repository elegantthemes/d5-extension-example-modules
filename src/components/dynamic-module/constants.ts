// Divi dependencies.
import { mergeAttrs } from '@divi/module-utils';

// Local dependencies.
import { DynamicModuleAttrs } from './types';

/**
 * Default attributes. Default attributes that are needed on rendered module
 * as well on the module's settings modal.
 *
 * @since ??
 */
export const defaultAttrs: DynamicModuleAttrs = {
  numberOfPosts: {
    desktop: {
      value: '5',
    },
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
  postTitleFont: {
    font: {
      desktop: {
        value: {
          headingLevel: 'h3',
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
export const defaultPrintedStyleAttrs: DynamicModuleAttrs = {
  background: {
    desktop: {
      value: {
        color: '#f5f5f5',
      },
    },
  },
  titleFont: {
    font: {
      desktop: {
        value: {
          textAlign: 'center',
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
export const defaultSettingsAttrs: DynamicModuleAttrs = mergeAttrs({
    defaultAttrs,
    attrs: defaultPrintedStyleAttrs,
})