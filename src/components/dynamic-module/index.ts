import {
  type Metadata,
  type ModuleLibrary,
} from '@divi/types';
import React from 'react';
import { DynamicModuleEdit } from './edit';
import metadata from './module.json';
import { SettingsAdvanced } from './settings-advanced';
import { SettingsContent } from './settings-content';
import { SettingsDesign } from './settings-design';
import { DynamicModuleAttrs } from './types';
import { placeholderContent } from './placeholder-content';

import './module.scss';


export const dynamicModule: ModuleLibrary.Module.RegisterDefinition<DynamicModuleAttrs> = {
  // Imported json has no inferred type hence type-cast is necessary.
  metadata: metadata as Metadata.Values<DynamicModuleAttrs>,
  placeholderContent,
  settings: {
    content:  SettingsContent,
    design:   SettingsDesign,
    advanced: SettingsAdvanced,
  },
  renderers: {
    edit: DynamicModuleEdit,
  },
};
