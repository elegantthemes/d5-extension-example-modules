// WordPress dependencies.
import { __ } from '@wordpress/i18n';

// Divi dependencies.
import { ModuleRegisterDefinition } from '@divi/module-library';

// Local dependencies.
import metadata from './module.json';
import { ParentModuleEdit } from './edit';
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
export const parentModule: ModuleRegisterDefinition<ParentModuleAttrs> = {
  metadata,
  childrenName: ['example/child-module'],
  template:     [
    ['example/child-module', {}],
    ['example/child-module', {}],
    ['example/child-module', {}],
  ],
  settings:   {
    content:  SettingsContent,
    design:   SettingsDesign,
    advanced: SettingsAdvanced,
  },
  renderers: {
    edit: ParentModuleEdit,
  },
};
