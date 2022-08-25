// WordPress dependencies.
import { __ } from '@wordpress/i18n';

// Divi dependencies.
import { ModuleRegisterDefinition } from '@divi/module-library';

// Local dependencies.
import { ChildModuleEdit } from './edit';
import { ChildModuleSave } from './save';
import { SettingsContent } from './settings-content';
import { SettingsDesign } from './settings-design';
import { SettingsAdvanced } from './settings-advanced';
import { ChildModuleAttrs } from './types';
import { placeholderContent } from './placeholder-content';

// Styles.
import './style.scss';
import './module.scss';

/**
 * Call To Action module.
 *
 * @since ??
 */
export const childModule: ModuleRegisterDefinition<ChildModuleAttrs> = {
  metadata,
  placeholderContent,
  settings:   {
    content:  SettingsContent,
    design:   SettingsDesign,
    advanced: SettingsAdvanced,
  },
  renderers: {
    edit: ChildModuleEdit,
    save: ChildModuleSave,
  },
};
