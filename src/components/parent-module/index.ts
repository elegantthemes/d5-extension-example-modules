// Divi dependencies.
import { elementsCallbacks } from '@divi/module-utils';
import {
  type Metadata,
  type ModuleLibrary,
} from '@divi/types';

// Local dependencies.
import metadata from './module.json';
import { ParentModuleEdit } from './edit';
import { ParentModuleAttrs } from './types';

// Styles.
import './module.scss';

/**
 * Parent module (example): accepts only `example/child-module` as nested content.
 *
 * ### Optional: allow *any* module as children
 *
 * 1. **`module.json`** — Set `"childrenName": []` and remove `childModuleName` / `childModuleTitle`.
 * 2. **`index.ts`** — Set `childrenName: []` here so registration matches metadata.
 * 3. **`edit.tsx`** — Prefer a neutral wrapper (not `tag="ul"`) if children are not all list items;
 *    pass `childrenIds`, `isLooped`, `loopIndex`, and `canvasId` into `ModuleContainer` /
 *    `ChildModulesContainer` the same way core Group does.
 * 4. **Child module markup** — If the child used `tag="li"`, switch to `div` (or similar) when the
 *    parent is no longer a `<ul>`, and adjust SCSS selectors if needed.
 * 5. **`callbacks.content.elements`** — Keep `elementsCallbacks` from `@divi/module-utils` whenever
 *    `module.json` exposes the Elements group (`advanced.elements`), so “Add” opens the module
 *    picker instead of dispatching with an undefined module name.
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
  renderers: {
    edit: ParentModuleEdit,
  },
  callbacks: {
    content: {
      elements: elementsCallbacks,
    },
  },
};
