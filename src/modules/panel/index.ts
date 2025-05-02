// WordPress package dependencies.

// Divi package dependencies.
import {
  type Metadata,
  type ModuleLibrary,
} from '@divi/types';

// Module metadata that is used in both Frontend and Visual Builder.
import metadata from './module.json';
import { conversionOutline } from './conversion-outline';
import { ModuleAttrs } from './types';
import { Edit } from './edit';
import { placeholderContent } from './placeholder-content';

// Module settings components.
import { SettingsContent } from './settings-content';
import { SettingsDesign } from './settings-design';
import { SettingsAdvanced } from './settings-advanced';


/**
 * CAWeb Panel Module.
 */
export const CAWebPanelModule: ModuleLibrary.Module.RegisterDefinition<ModuleAttrs> = {
  // Metadata that is used on Visual Builder and Frontend
  metadata: metadata as Metadata.Values<ModuleAttrs>,
  
  // Attribute that is automatically added into the module when the module is inserted
  // into the layout so that the newly inserted module has some placeholder content
  placeholderContent,
  
  // Conversion outline for the module.
  conversionOutline,

  // Layout renderer components.
  renderers: {
    // React Function Component for rendering module's output on layout area.
    edit: Edit,
  },

  // Settings panel components.
  settings: {
    content: SettingsContent,
    design: SettingsDesign,
    advanced: SettingsAdvanced,
  },
};
