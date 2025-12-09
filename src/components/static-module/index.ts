// Divi dependencies.
import {
  type Metadata,
  type ModuleLibrary,
} from '@divi/types';

// Local dependencies.
import metadata from './module.json';
import defaultRenderAttributes from './module-default-render-attributes.json';
import defaultPrintedStyleAttributes from './module-default-printed-style-attributes.json';
import { StaticModuleEdit } from './edit';
import { StaticModuleAttrs } from './types';
import { placeholderContent } from './placeholder-content';

// Styles.
import './style.scss';
import './module.scss';

export const staticModule: ModuleLibrary.Module.RegisterDefinition<StaticModuleAttrs> = {
  // Imported json has no inferred type hence type-cast is necessary.
  metadata:                 metadata as Metadata.Values<StaticModuleAttrs>,
  defaultAttrs:             defaultRenderAttributes as Metadata.DefaultAttributes<StaticModuleAttrs>,
  defaultPrintedStyleAttrs: defaultPrintedStyleAttributes as Metadata.DefaultAttributes<StaticModuleAttrs>,
  placeholderContent,
  renderers: {
    edit: StaticModuleEdit,
  },
};
