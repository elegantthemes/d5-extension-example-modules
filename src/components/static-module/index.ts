// WordPress dependencies.
import { __ } from '@wordpress/i18n';

// Divi dependencies.
import { ModuleDefinition } from '@divi/module-library';

// Local dependencies.
import { StaticModuleEdit } from './edit';
import { StaticModuleSave } from './save';
import { SettingsContent } from './settings-content';
import { SettingsDesign } from './settings-design';
import { SettingsAdvanced } from './settings-advanced';
import { StaticModuleAttrs } from './types';
import { placeholderContent } from './placeholder-content';

// Styles.
import './style.scss';
import './module.scss';

/**
 * Call To Action module.
 *
 * @since ??
 */
export const staticModule: ModuleDefinition<StaticModuleAttrs> = {
  name:     'divi/static-module',
  settings: {
    title:      __('Static Module', 'd5-module-extension-example'),
    titles:     __('Static Modules', 'd5-module-extension-example'),
    moduleIcon: 'divi/module-cta',
    category:   'module',
    attributes: {},
    placeholderContent,
    settings:   {
      content:  SettingsContent,
      design:   SettingsDesign,
      advanced: SettingsAdvanced,
    },
    renderers: {
      edit: StaticModuleEdit,
      save: StaticModuleSave,
    },
  },
};
