// Divi dependencies.
import { ModuleRegisterDefinition } from '@divi/module-library';
import { ModuleMetadata } from '@divi/types';

// Local dependencies.
import metadata from './module.json';
import { StaticModuleEdit } from './edit';
import { SettingsContent } from './settings-content';
import { SettingsDesign } from './settings-design';
import { SettingsAdvanced } from './settings-advanced';
import { StaticModuleAttrs } from './types';
import { placeholderContent } from './placeholder-content';

// Styles.
import './style.scss';
import './module.scss';

export const staticModule: ModuleRegisterDefinition<StaticModuleAttrs> = {
  // Imported json has no inferred type hence type-cast is necessary.
  metadata: metadata as ModuleMetadata,
  placeholderContent,
  settings: {
    content:  SettingsContent,
    design:   SettingsDesign,
    advanced: SettingsAdvanced,
  },
  renderers: {
    edit: StaticModuleEdit,
  },
};
