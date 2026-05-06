# Parent Module

It is an example of Parent module. It will help you to understand the basic structure of a parent module. It uses `example/child-module` as its only child module type. Parent module will also included with the tests and storybooks example. But for parent module, you need to setup a store for tests and storybook. It has that store data file in `__mock-data__` folder. `module-objects.ts` is the store data file.

## Optional: any module as children (third‑party / `divi/group` pattern)

This example **restricts** children to `example/child-module` via `childModuleName`, `childModuleTitle`, and `childrenName` in `module.json` (and `childrenName` in `index.ts`). To allow **any** Divi module inside the parent instead:

1. **`module.json`** — Set `"childrenName": []` and remove `childModuleName` and `childModuleTitle`.
2. **`index.ts`** — Set `childrenName: []` to match metadata (see the JSDoc on `parentModule` for the same checklist).
3. **`edit.tsx`** — Use a neutral wrapper (not `tag="ul"`) if children are not all list rows; mirror core `divi/group` by passing `childrenIds`, `isLooped`, `loopIndex`, and `canvasId` into `ModuleContainer` / `ChildModulesContainer` as needed.
4. **Child presentation** — If the child used `tag="li"` only for a `<ul>` parent, change it when the parent wrapper changes, and update SCSS if selectors assumed `ul` / `li`.

Keep **`callbacks.content.elements` → `elementsCallbacks`** from `@divi/module-utils` whenever the Elements group exists in JSON, so "Add element" uses the add‑module flow correctly.

## Folder Structure
```
parent-module
├── README.md
├── __mock-data__
│   ├── attrs.ts
│   └── module-objects.ts
├── __tests__
│   ├── __snapshots__
│   │   └── edit.tsx.snap
│   └── edit.tsx
├── custom-css.ts
├── edit.tsx
├── index.ts
├── module.json
├── module.scss
├── settings-advanced.tsx
├── settings-content.tsx
├── settings-design.tsx
├── stories
│   └── edit.stories.tsx
├── style.scss
├── styles.tsx
└── types.ts
```
