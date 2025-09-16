# Parent Module
It is an example of Parent module. It will help you to understand the basic structure of a parent module. It will use `divi/child-module` as child module. Parent module will also included with the tests and storybooks example. But for parent module, you need to setup a store for tests and storybook. It has that store data file in `__mock-data__` folder. `module-objects.ts` is the store data file.

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
