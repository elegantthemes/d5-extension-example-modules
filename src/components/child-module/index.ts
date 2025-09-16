// Divi dependencies.
import {
  type Metadata,
  type ModuleLibrary,
} from '@divi/types';

// Local dependencies.
import metadata from './module.json';
import { ChildModuleEdit } from './edit';
import { SettingsContent } from './settings-content';
import { SettingsDesign } from './settings-design';
import { ChildModuleAttrs } from './types';
import { placeholderContent } from './placeholder-content';

// Styles.
import './module.scss';


/**
 * Child module.
 *
 * @since ??
 */
export const childModule: ModuleLibrary.Module.RegisterDefinition<ChildModuleAttrs> = {
  // Imported json has no inferred type hence type-cast is necessary.
  metadata: metadata as Metadata.Values<ChildModuleAttrs>,
  placeholderContent,
  settings:   {
    content: SettingsContent,
    design:  SettingsDesign,
  },
  renderers: {
    edit: ChildModuleEdit,
  },
  parentsName: ['example/parent-module'],
};
