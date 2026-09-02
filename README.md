# D5 Extension Example Modules
This extension is a collection of example modules. You can use these modules as a reference for your development. This extension uses composer to autoload the modules in PHP. You can find the example modules in the `src/components` folder for Visual Builder and in the `modules` folder for Front-end rendering.

## Installation

### Composer Dependencies

Install the composer dependencies:
```
composer install
```

### Node.js Dependencies

You need to have **npm** available in your node.js environment. Use **Node.js 20.18.1 or later** (required by transitive dependencies such as `undici@7.x`; Node `20.18.0` will fail `npm install` when `engine-strict` is enabled).

For D5 modules only:
```
npm install
```

For D4 modules only:
```
npm run install:divi-4
```

For both of D4 and D5 modules:
```
npm run install:all
```

### Start the Project

Now, start the project.

For D5 modules only:
```
npm run start
```

For D4 modules only:
```
npm run start:divi-4
```

For both of D4 and D5 modules:
```
npm run start:all
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
This modules is converted from Divi 4 to Divi 5. It will help you to understand the migration process. You can find the module for Divi 5 in the `src/components/d4-module` folder for Visual Builder and in the `modules/D4Module` folder for Front-end rendering. Also, the code for divi 4 module is in the `divi-4/modules/Divi4Module` folder and its Visual Builder component is in the `divi-4/src/components/divi4-module` folder.

## Divi 4 Modules
You can find the Divi 4 modules in the `divi-4/modules` folder. You can use these modules as a reference for your migration process. Currently, we have converted the `Divi4Module` module from Divi 4 to Divi 5 and `Divi4OnlyModule` module is only for Divi 4.

## Module Conversion
You can find the module conversion process in the `src/components/d4-module` folder. You can use this process for your migration process. Also, maybe you need to convert the module attributes to new format. Most of will be done automatically.

## Module Icons
You can find the module icons in the `src/icons` folder. You can use these icons for module icon. You can also add your own icons in this folder.

## Tests
In Divi 5, we always use testing. The `test-config` folder contains the configuration for JavaScript testing. Module tests live in each module's `__tests__` folder. Some modules require additional mock data, and this data is stored in the `__mock-data__` folder.

### Local test prerequisites
Tests run locally against your WordPress and Divi installs. Set the following environment variables before running tests:

```bash
export DIVI_PATH=/absolute/path/to/wp-content/themes/Divi
export DIVIDIR=$DIVI_PATH/includes/builder-5/visual-builder/build
export WPDIR=/absolute/path/to/wordpress/root/folder
```

For PHP tests, copy `tests/php/.env.example` to `tests/php/.env` and update the database and WordPress paths for your environment. PHPUnit bootstraps through Divi's WP test suite using `DIVI_PATH`. WooCommerce must be installed in your local WordPress plugins directory when using Divi's PHPUnit bootstrap.

Build assets before running tests:

```bash
npm run build:all
composer install
npm install
composer test
npm test
npm run test:modules
```

`npm run build:all` runs both `npm run build` (D5 `modules-json/` output) and `npm run build:divi-4` (Divi 4 Visual Builder assets). Run `npm run build:divi-4` separately when working on the `divi-4/` subtree only.

`npm test` runs the smoke test harness plus module metadata tests (StaticModule, DynamicModule, ParentModule, and ChildModule) and D4Module conversion tests. `npm run test:modules` uses the full Divi and WordPress Jest setup for upcoming module tests.

PHPUnit requires a PHP binary with the `mysqli` extension enabled. If `composer test` fails with a missing MySQL extension error, run PHPUnit with a compatible PHP binary such as `php vendor/bin/phpunit`.

### Manual VB testing

Track C **L3** manual testing for flows automated tests do not cover: live Visual Builder integration, save/reload persistence, and front-end rendering inside a real WordPress + Divi install. The items below describe capabilities you can verify in the Visual Builder — not step-by-step checklists.

#### Prerequisites

- Local WordPress with **Divi 5** active.
- This plugin cloned or symlinked into `wp-content/plugins/d5-extension-example-modules`.
- At least **two published posts** in WordPress (required for Dynamic Module checks).

#### Build and activate

Run these commands from the plugin root before opening the Visual Builder:

```bash
composer install
npm install
npm run build:all
```

`npm run build:all` builds D5 `modules-json/` output and Divi 4 Visual Builder assets. Run `npm run build:divi-4` separately when you change only the `divi-4/` subtree.

Then in WordPress admin:

1. Go to **Plugins**.
2. Activate **D5 Extension Example: Modules**.
3. Create or open a test page and launch the **Visual Builder**.

#### Static Module (`example/static-module`)

Basic static module with title, summary, content, and image fields. Settings open in the standard module panel and front-end output mirrors Visual Builder edits after save.

What you can do:

- Insert **Static Module** from the Add Module dialog
- Open module settings and edit **Title**, **Summary**, and **Content** in the Content tab
- See summary, title, and content update in the Visual Builder canvas as you edit
- Save the page and confirm the summary renders on the front end inside `.example_static_module__summary`

#### Dynamic Module (`example/dynamic-module`)

Dynamic post-list module that fetches published posts through the WordPress REST API. Requires at least two **published** posts — draft-only sites will not return post data on the front end.

What you can do:

- Insert **Dynamic Module** from the Add Module dialog
- Set **Number of posts** in Content settings and see the post list update in the Visual Builder
- Confirm `.example_dynamic_module__post-item-title` shows real published post titles (not placeholder text)
- Confirm `.example_dynamic_module__post-item-content` shows post excerpt content on the front end after save

#### Parent Module and Child Module (`example/parent-module` / `example/child-module`)

Parent module that accepts nested child modules. Child modules inherit the parent icon when no child icon is set.

What you can do:

- Insert **Parent Module** and add a **Child Module** nested inside it (not as a sibling)
- Set a parent icon in **Content** → **Icon** and see it appear on child items that have no icon of their own
- Confirm the inherited icon renders in the Visual Builder preview on `.example_child_module__icon.et-pb-icon`
- Save the page and confirm the inherited icon still renders on the front end
- Change only the parent icon and see the child icon update without setting a child icon

#### Divi 4 Module (`example/d4-module`)

Module converted from Divi 4 to Divi 5. D4 shortcode slug: `d4_module`. Supports direct insertion in the Visual Builder and conversion from legacy shortcode layouts.

What you can do:

- Insert **Divi 4 Module** from the Add Module dialog and edit **Title** and **Content** in settings
- Set the title **Heading Level** (for example, H2) and see a rendered heading in the Visual Builder canvas (not raw JavaScript or broken markup)
- Save the page and confirm the title renders as `<h2 class="example_d4_module_title">` with content inside `.example_d4_module_content`
- Open a page that contains a legacy `[d4_module]` shortcode in the Divi 5 Visual Builder and confirm it converts to the D5 block

Example shortcode:

```text
[d4_module title="D4 converted title" header_level="h2"]D4 converted content for manual VB check.[/d4_module]
```

- Confirm the converted module preview renders title and content in the Visual Builder
- Confirm converted **Title**, **Content**, and heading level settings are preserved in the module panel
- Save and confirm the converted module front-end output matches a directly inserted Divi 4 Module

#### Related automated tests

| Module | Automated coverage |
|--------|-------------------|
| StaticModule | `module-json` metadata smoke test; PHP snapshot render |
| DynamicModule | Metadata smoke test; PHP snapshot render |
| ParentModule + ChildModule | Metadata and default-attrs smoke tests; nested FE snapshot; icon inheritance unit test |
| D4Module | Conversion outline smoke test; PHP conversion + FE heading snapshot |

Run `composer test` and `npm test` after `npm run build:all` for automated L1/L2 coverage.

## Available Commands
Some `npm` commands are available for your development and tests.

### `npm install`
It will install dependencies for Divi 5 modules. For D4 modules, you need to run `npm run install:divi-4`. You can also use `npm run install:all` to install dependencies for both Divi 5 and Divi 4 modules.

### `npm run start`
It will start the webpack compiler for development with watch mode. By default, it works for D5 modules. For D4 modules, you need to run `npm run start:divi-4`. You can also use `npm run start:all` to start both D5 and D4 modules.

_Note: Divi Visual Builder type definitions are installed from scoped `@divi/*` npm packages (see [Release 5.1](https://dev.elegantthemes.com/docs/blog/release-5.1)). Install only the `@divi/*` packages your code imports; npm will pull related type dependencies as needed._

### `npm run build`
It will build all JS and CSS assets for production. By default, it works for D5 modules. For D4 modules, you need to run `npm run build:divi-4`. You can also use `npm run build:all` to build assets for both Divi 5 and Divi 4 modules.

_Note: If TypeScript reports missing types for a `@divi/*` import, add that package to `devDependencies` in `package.json` and run `npm install`._

### `npm run reset-install`
It will remove node_modules and reinstall all dependencies for D5 modules. For D4 modules, you need to run `npm run reset-install:divi-4`.

_Note: If you are facing errors for `@divi/*` packages in `npm run install`, run `npm run reset-install` to refresh `node_modules` and `package-lock.json`._

### `npm run zip`
It will zip all assets and files without the `src` folder for distribution.

### `npm run test`
It will run all JavaScript tests for the module.

### `composer test`
It will run all PHP tests for the plugin.


## Folder Structure
```
d5-extension-example-modules
├── divi-4
│   ├── build -- (Divi 4 Visual Builder build output)
│   │   └── d5-extension-example-modules-divi4.js
│   ├── modules
│   │   ├── Divi4Module
│   │   │   └── Divi4Module.php
│   │   └── Divi4OnlyModule
│   │       └── Divi4OnlyModule.php
│   ├── src -- (Divi 4 Visual Builder components)
│   │   ├── components
│   │   │   ├── divi4-module
│   │   │   │   └── index.jsx
│   │   │   └── divi4-only-module
│   │   │       └── index.jsx
│   │   └── index.js
│   ├── package.json
│   └── webpack.config.js
├── modules
│   └── ModuleName
│   │   ├── ModuleNameTrait
│   │   │   ├── CustomCssTrait.php
│   │   │   ├── ModuleClassnamesTrait.php
│   │   │   ├── ModuleScriptDataTrait.php
│   │   │   ├── ModuleStylesTrait.php
│   │   │   └── RenderCallbackTrait.php
│   │   └── ModuleName.php
│   └── Modules.php
├── scripts -- (Divi 5 build scripts)
├── src -- (Divi 5 Visual Builder components)
│   ├── components
│   │   └── module-name
│   │       ├── __mock-data__
│   │       │   └── attrs.ts
│   │       │   └── shortcodes.ts -- (for converted modules from Divi 4 module)
│   │       ├── __tests__
│   │       │   ├── __snapshots__
│   │       │   │   └── edit.tsx.snap
│   │       │   └── conversion.ts -- (for converted modules from Divi 4 module)
│   │       │   └── edit.tsx
│   │       ├── custom-css.ts
│   │       ├── edit.tsx
│   │       ├── index.ts
│   │       ├── module.json
│   │       ├── module.scss
│   │       ├── placeholder-content.ts
│   │       ├── settings-advanced.tsx
│   │       ├── settings-content.tsx
│   │       ├── settings-design.tsx
│   │       ├── style.scss
│   │       ├── styles.tsx
│   │       └── types.ts
│   ├── icons
│   │   ├── icon-name
│   │   │   └── index.tsx
│   │   └── index.ts
│   ├── index.ts
│   └── module-icons.ts
├── d5-extension-example-modules.php
├── gulpfile.js
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.json
└── webpack.config.js
```
