import {
  type Metadata,
  type ModuleLibrary,
} from '@divi/types';
import { DynamicModuleEdit } from './edit';
import metadata from './module.json';
import { DynamicModuleAttrs } from './types';
import { placeholderContent } from './placeholder-content';

import './module.scss';


export const dynamicModule: ModuleLibrary.Module.RegisterDefinition<DynamicModuleAttrs> = {
  // Imported json has no inferred type hence type-cast is necessary.
  metadata: metadata as Metadata.Values<DynamicModuleAttrs>,
  placeholderContent,
  renderers: {
    edit: DynamicModuleEdit,
  },
};
