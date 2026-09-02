# Parent Module

It is an example of Parent module. It will help you understand a parent that accepts **both** the extension **Child Module** and **any normal Divi module** inside it.

This uses the same idea as core **Accordion**: `childrenName` lists the dedicated child (`example/child-module`) and **`allowAllElements`: true** so the module library still shows Text, Blurb, Group, etc. If you only set `childrenName: []` like `divi/group`, Divi’s `isValidChild` **blocks** modules with `category: "child-module"` — so your custom child would disappear from the add list. The `allowAllElements` + explicit child name avoids that.

The initial template still inserts three `example/child-module` blocks as a demo. For tests/storybook, use `__mock-data__/module-objects.ts`.

## Optional: only your own child module (no arbitrary modules)

Remove **`allowAllElements`** (or set it `false`) and keep a single entry in `childrenName` / `childModuleName` / `childModuleTitle`. Optionally switch the parent/child edit components to `ul` / `li` and adjust SCSS — see JSDoc on `parentModule` in `index.ts`.

Keep **`callbacks.content.elements` → `elementsCallbacks`** from `@divi/module-utils` whenever the Elements group exists in `module.json`.

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
