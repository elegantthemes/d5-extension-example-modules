// Divi dependencies.
import {
  type Metadata,
  type ModuleLibrary,
} from '@divi/types';

// Local dependencies.
import metadata from './module.json';
import { ParentModuleEdit } from './edit';
import { SettingsContent } from './settings-content';
import { SettingsDesign } from './settings-design';
import { SettingsAdvanced } from './settings-advanced';
import { ParentModuleAttrs } from './types';

// Styles.
import './module.scss';

/**
 * Call To Action module.
 *
 * @since ??
 */
export const parentModule: ModuleLibrary.Module.RegisterDefinition<ParentModuleAttrs> = {
  // Imported json has no inferred type hence type-cast is necessary.
  metadata: metadata as Metadata.Values<ParentModuleAttrs>,
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
