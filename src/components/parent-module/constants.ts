// WordPress dependencies.
import { __ } from '@wordpress/i18n';

// Divi dependencies.
import { mergeAttrs } from '@divi/module-utils';

// Local dependencies.
import { ParentModuleAttrs } from './types';

/**
 * Default attributes. Default attributes that are needed on rendered module
 * as well on the module's settings modal.
 *
 * @since ??
 */
export const defaultAttrs: ParentModuleAttrs = {
  icon: {
    desktop: {
      value: {
        unicode: '&#x4e;',
        type:    'divi',
        weight:  '400',
      },
    },
  },
  adminLabel: {
    desktop: {
      value: __('Parent Module', 'd5-module-extension-example')
    }
  }
};

/**
 * Default attributes that is inferred from module's static style. Rendered module doesn't
 * need this because static style already executes style that resulting identical output should
 * these attributes are being rendered.
 *
 * @since ??
 */
export const defaultPrintedStyleAttrs: ParentModuleAttrs = {
  iconColor: {
    desktop: {
      value: '#29c4a9',
    },
  },
  iconSize: {
    desktop: {
      value: '21px',
    },
  },
  titleFont: {
    font: {
      desktop: {
        value: {
          size:       '21px',
          lineHeight: '1em',
          weight:     '600',
        },
      },
    },
  },
  bodyFont: {
    body: {
      font: {
        desktop: {
          value: {
            color:      '#868686',
            size:       '13px',
            lineHeight: '1.6em',
          },
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
export const defaultSettingsAttrs: ParentModuleAttrs = mergeAttrs({
    defaultAttrs,
    attrs: defaultPrintedStyleAttrs,
})