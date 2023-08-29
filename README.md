# D5 Extension Example Modules
This extension is a collection of example modules. You can use these modules as a reference for your development. This extension uses composer to autoload the modules in PHP. You can find the example modules in the `src/components` folder for Visual Builder and in the `modules` folder for Front-end rendering.

## Installation
You need to have **npm** available in your node.js environment.
```
npm install
```

Install the composer dependencies:
```
composer install
```

Now, start the project:
```
npm run start
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

## Module Conversion
You can find the module conversion process in the `src/components/d4-module` folder. You can use this process for your migration process. Also, maybe you need to convert the module attributes to new format. Most of will be done automatically. But some conversion need to be declare in the `src/module-exceptions.ts` file.

## Module Icons
You can find the module icons in the `src/icons` folder. You can use these icons for module icon. You can also add your own icons in this folder.

## Tests
In Divi 5, we always use testing. The `test-config` folder contains the configuration for JavaScript testing. The testing for the module is set up in the `__tests__` folder. We test modules based on `test-cases.json`. Some modules require additional mock data, and this data is stored in the `__mock-data__` folder.

## Available Commands
Some `npm` commands are available for your development and tests.

### `npm run start`
It will start the webpack compiler for development with watch mode.

### `npm run build`
It will build all JS and CSS assets for production.

### `npm run zip`
It will zip all assets and files without the `src` folder for distribution.

### `npm run test`
It will run all tests for the module.

### `npm run reset-install`
It will remove node_modules and reinstall all dependencies.

_Note: If you are facing error for divi packages in `npm run install`, then you need to run `npm run reset-install` command._


## Folder Structure
```
d5-extension-example-modules
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
├── scripts -- (build scripts)
├── src
│   ├── components
│   │   └── module-name
│   │       ├── __mock-data__
│   │       │   └── attrs.ts
│   │       │   └── shortcodes.ts -- (for converted modules from Divi 4 module)
│   │       ├── __tests__
│   │       │   ├── __snapshots__
│   │       │   │   └── edit.tsx.snap
│   │       │   └── conversion.ts -- (for converted modules from Divi 4 module)
│   │       │   └── edit.tsx
│   │       ├── custom-css.ts
│   │       ├── edit.tsx
│   │       ├── index.ts
│   │       ├── module.json
│   │       ├── module.scss
│   │       ├── placeholder-content.ts
│   │       ├── settings-advanced.tsx
│   │       ├── settings-content.tsx
│   │       ├── settings-design.tsx
│   │       ├── style.scss
│   │       ├── styles.tsx
│   │       └── types.ts
|   ├── icons
|   |   ├── icon-name
|   |   |   └── index.tsx
│   │   └── index.ts
│   ├── index.ts
│   └── module-icons.ts
├── d5-extension-example-modules.php
├── gulpfile.js
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.json
└── webpack.config.js
```