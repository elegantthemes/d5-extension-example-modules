// Divi dependencies.
import { elementsCallbacks } from '@divi/module-utils';
import {
  type Metadata,
  type ModuleLibrary,
} from '@divi/types';

// Local dependencies.
import metadata from './module.json';
import defaultRenderAttributes from './module-default-render-attributes.json';
import { ModuleSettingsDemoEdit } from './edit';
import { ModuleSettingsDemoAttrs } from './types';
import { placeholderContent } from './placeholder-content';


/**
 * Module Settings Demo module definition.
 *
 * D5-only example module demonstrating Content panel field types (text, rich text, select, checkboxes).
 *
 * @since ??
 */
export const moduleSettingsDemo: ModuleLibrary.Module.RegisterDefinition<ModuleSettingsDemoAttrs> = {
  metadata: metadata as Metadata.Values<ModuleSettingsDemoAttrs>,
  defaultAttrs: defaultRenderAttributes as Metadata.DefaultAttributes<ModuleSettingsDemoAttrs>,
  placeholderContent,
  renderers: {
    edit: ModuleSettingsDemoEdit,
  },
  callbacks: {
    content: {
      elements: elementsCallbacks,
    },
  },
};
