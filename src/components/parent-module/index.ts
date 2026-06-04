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
 * Parent module (example): **any** regular module *plus* `example/child-module` as a nested child.
 *
 * Uses the same metadata pattern as core **Accordion** (`childrenName` lists the dedicated child block
 * and **`allowAllElements`: true**). A parent with only `childrenName: []` cannot nest modules whose
 * `category` is `child-module` — Divi’s `isValidChild` rejects them by design.
 *
 * ### Optional: only one child type (no arbitrary modules)
 *
 * Omit **`allowAllElements`** (or set it `false`) and keep a single entry in `childrenName` /
 * `childModuleName` so only that module may be nested.
 *
 * ### Optional: `ul` / `li` list markup
 *
 * 1. **`edit.tsx`** — `tag="ul"` on the parent and `tag="li"` on the child edit when every child is the same row type.
 * 2. **SCSS** — Target `ul.your_parent_class` if you use a list wrapper.
 *
 * When your `ModuleEditProps` typings include them, you may forward `isLooped`, `loopIndex`, and `canvasId`
 * like core `divi/group`.
 *
 * Keep **`callbacks.content.elements` → `elementsCallbacks`** from `@divi/module-utils` whenever
 * `module.json` exposes the Elements group (`advanced.elements`).
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
