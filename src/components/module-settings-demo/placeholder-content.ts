// Divi dependencies.
import { placeholderContent as placeholder } from '@divi/module-utils';

// Local dependencies.
import { ModuleSettingsDemoAttrs } from './types';


/**
 * Placeholder content for a newly added Module Settings Demo module.
 *
 * @since ??
 *
 * @type {ModuleSettingsDemoAttrs}
 * @property {object} textInput
 * @property {object} richText
 * @property {object} selectField
 * @property {object} checkboxesField
 */
export const placeholderContent: ModuleSettingsDemoAttrs = {
  textInput: {
    innerContent: {
      desktop: {
        value: 'Your text goes here',
      },
    },
  },
  richText: {
    innerContent: {
      desktop: {
        value: placeholder.body,
      },
    },
  },
  selectField: {
    innerContent: {
      desktop: {
        value: 'option_b',
      },
    },
  },
  checkboxesField: {
    innerContent: {
      desktop: {
        value: ['option_2'],
      },
    },
  },
};
