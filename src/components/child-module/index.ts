// Divi dependencies.
import { ModuleRegisterDefinition } from '@divi/module-library';

// Local dependencies.
import metadata from './module.json';
import { ChildModuleEdit } from './edit';
import { SettingsContent } from './settings-content';
import { SettingsDesign } from './settings-design';
import { SettingsAdvanced } from './settings-advanced';
import { ChildModuleAttrs } from './types';
import { placeholderContent } from './placeholder-content';

// Styles.
import './style.scss';
import './module.scss';
import { ModuleMetadata } from '@divi/types';

/**
 * Call To Action module.
 *
 * @since ??
 */
export const childModule: ModuleRegisterDefinition<ChildModuleAttrs> = {
  // Imported json has no inferred type hence type-cast is necessary.
  metadata: metadata as ModuleMetadata,
  placeholderContent,
  settings:   {
    content:  SettingsContent,
    design:   SettingsDesign,
    advanced: SettingsAdvanced,
  },
  renderers: {
    edit: ChildModuleEdit,
  },
  parentsName: ['example/parent-module'],
};
