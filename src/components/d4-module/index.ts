// WordPress dependencies.
import { __ } from '@wordpress/i18n';

// Divi dependencies.
import { ModuleRegisterDefinition } from '@divi/module-library';
import { ModuleMetadata } from '@divi/types';

// Local dependencies.
import metadata from './module.json';
import { D4ModuleEdit } from './edit';
import { SettingsContent } from './settings-content';
import { SettingsDesign } from './settings-design';
import { SettingsAdvanced } from './settings-advanced';
import { D4ModuleAttrs } from './types';
import { placeholderContent } from './placeholder-content';
import { conversionOutline } from './conversion-outline';


export const d4Module: ModuleRegisterDefinition<D4ModuleAttrs> = {
  metadata: metadata as ModuleMetadata,
  placeholderContent,
  conversionOutline,
  settings: {
    content:  SettingsContent,
    design:   SettingsDesign,
    advanced: SettingsAdvanced,
  },
  renderers: {
    edit: D4ModuleEdit,
  },
};
