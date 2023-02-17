# D5 Module Extension Example
This extension is a collection of example modules. You can use these modules as a reference for your development. This extension uses composer to autoload the modules in PHP. You can find the example modules in the `src/components` folder for Visual Builder and in the `modules` folder for Front-end rendering.

## Installation
You need to install **Yarn 3.2.0** and set the `nodeLinker` to `node-modules`
```
yarn set version 3.2.0 && yarn config set nodeLinker node-modules
```

Then, install the project dependencies:
```
yarn
```

Install the composer dependencies:
```
yarn composer
```

Now, start the project:
```
yarn start
```

## Example Modules
This extension contains 5 example modules.
1. **Static Module** - Simple static module like Blurb module.
2. **Dynamic Module** - Dynamic module like Blog module.
3. **Parent Module** - Parent module like Accordion module.
4. **Child Module** - Child module like Accordion Item module.
5. **Divi 4 Module** - Module converted from Divi 4 to Divi 5.

### 1. Static Module
This example is the basic static module by using Divi 5 API. It will help you to understand the basic Divi 5 module without dynamic content. You can find the module in the `src/components/static-module` folder for Visual Builder and in the `modules/StaticModule` folder for Front-end rendering.

### 2. Dynamic Module
This example is the dynamic module by using Divi 5 API. This modules use WordPress default REST API to fetch the posts. It will help you to understand the dynamic content module. You can find the module in the `src/components/dynamic-module` folder for Visual Builder and in the `modules/DynamicModule` folder for Front-end rendering.

### 3. Parent Module
This example is the parent module by using Divi 5 API. This module will contain the child module. It will help you to understand the parent module in Divi 5. You can find the module in the `src/components/parent-module` folder for Visual Builder and in the `modules/ParentModule` folder for Front-end rendering.

### 4. Child Module
This example is the child module by using Divi 5 API. This module will be used as a child module. It will help you to understand the child module in Divi 5. You can find the module in the `src/components/child-module` folder for Visual Builder and in the `modules/ChildModule` folder for Front-end rendering.

### 5. Divi 4 Module
This modules is converted from Divi 4 to Divi 5. It will help you to understand the migration process. You can find the module for Divi 5 in the `src/components/divi-4-module` folder for Visual Builder and in the `modules/Divi4Module` folder for Front-end rendering. Also, the code for divi 4 module is in the `divi-4/modules/Divi4Module` folder.

## Divi 4 Modules
You can find the Divi 4 modules in the `divi-4/modules` folder. You can use these modules as a reference for your migration process. Currently, we have converted the `Divi4Module` module from Divi 4 to Divi 5 and `Divi4OnlyModule` module is only for Divi 4.

## Storybook
All modules have storybook examples. You will find all story declarations in the `stories` folder. The configuration for the storybook contains the `.storybook` folder. You must need to add a `.env` file to start the storybook. You can see the `.env.example` file for reference. You need to add only `STORYBOOK_SITE_URL` variable with the WordPress site URL.

## Tests
In Divi 5 we always use testing. The `test-config` folder contains the configuration of js testing. The testing for the module is setup in `__tests__` folder and all mock data related to the tests are in `__mock-data__` folder.

## Available Commands
Some `yarn` commands are available for your development and tests.

### `yarn start`
It will start the webpack compiler for development with watch mode.

### `yarn build`
It will build all JS and CSS assets for production.

### `yarn test`
It will run all tests for the module.

### `yarn zip`
It will zip all assets and files without the `src` folder for distribution.

### `yarn storybook`
It will run the storybook server

### `yarn build-storybook`
It will build the storybook to host it into your server.

## Folder Structure
```
d5-extension-example-modules
├── .storybook
│   ├── main.js
│   ├── preview-head.html
│   └── preview.js
├── divi-4
│   ├── modules
│   │   └── divi-4-module-name
│   │       └── Divi4Module.php
├── modules
│   └── ModuleName
|   |   ├── ModuleNameTrait
│   │   │   ├── CustomCssTrait.php
│   │   │   ├── ModuleClassnamesTrait.php
│   │   │   ├── ModuleScriptDataTrait.php
│   │   │   ├── ModuleStylesTrait.php
│   │   │   └── RenderCallbackTrait.php
│   │   └── ModuleName.php
│   └── Modules.php
├── src
│   ├── components
│   │   ├── module-name
│   │   │   ├── __mock-data__
│   │   │   │   └── attrs.ts
│   │   │   ├── __tests__
│   │   │   │   ├── __snapshots__
│   │   │   │   │   └── edit.tsx.snap
│   │   │   │   └── edit.tsx
│   │   │   ├── stories
│   │   │   │   └── edit.stories.tsx
│   │   │   ├── constants.ts
│   │   │   ├── custom-css.ts
│   │   │   ├── edit.tsx
│   │   │   ├── index.ts
│   │   │   ├── module.json
│   │   │   ├── module.scss
│   │   │   ├── placeholder-content.ts
│   │   │   ├── settings-advanced.tsx
│   │   │   ├── settings-content.tsx
│   │   │   ├── settings-design.tsx
│   │   │   ├── style.scss
│   │   │   ├── styles.tsx
│   │   │   └── types.ts
│   └── index.ts
├── storybook-assets
│   └── mockServiceWorker.js
├── test-config
│   ├── babel-transformer.js
│   ├── global-mocks.js
│   ├── jest.config.js
│   └── override-react-use-layout-effect.js
├── d5-extension-example-modules.php
├── gulpfile.js
├── package.json
├── README.md
├── tsconfig.json
├── webpack.config.js
└── yarn.lock
```