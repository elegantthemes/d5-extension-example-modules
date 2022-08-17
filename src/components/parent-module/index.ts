// WordPress dependencies.
import { __ } from '@wordpress/i18n';

// Divi dependencies.
import { ModuleDefinition } from '@divi/module-library';

// Local dependencies.
import { ParentModuleEdit } from './edit';
import { ParentModuleSave } from './save';
import { SettingsContent } from './settings-content';
import { SettingsDesign } from './settings-design';
import { SettingsAdvanced } from './settings-advanced';
import { ParentModuleAttrs } from './types';

// Styles.
import './style.scss';
import './module.scss';

/**
 * Call To Action module.
 *
 * @since ??
 */
export const parentModule: ModuleDefinition<ParentModuleAttrs> = {
  name:     'divi/parent-module',
  settings: {
    title:      __('Parent Module', 'd5-module-extension-example'),
    titles:     __('Parent Modules', 'd5-module-extension-example'),
    category:   'module',
    attributes: {},
    childrenName: ['divi/child-module'],
    template:     [
      ['divi/child-module', {}],
      ['divi/child-module', {}],
      ['divi/child-module', {}],
    ],
    settings:   {
      content:  SettingsContent,
      design:   SettingsDesign,
      advanced: SettingsAdvanced,
    },
    renderers: {
      edit: ParentModuleEdit,
      save: ParentModuleSave,
    },
  },
};
