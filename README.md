# D5 Extension Example Modules
This extension is a collection of example modules. You can use these modules as a reference for your development. This extension uses composer to autoload the modules in PHP. You can find the example modules in the `src/components` folder for Visual Builder and in the `modules` folder for Front-end rendering.

## Installation

### Composer Dependencies

Install the composer dependencies:
```
composer install
```

### Node.js Dependencies

You need to have **npm** available in your node.js environment. And make sure to use **node version: 18.0.0 or later**.

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

Track C **L3** checklists for flows automated tests do not cover: live Visual Builder integration, save/reload persistence, drag-and-resize, and front-end rendering inside a real WordPress + Divi install. Use these steps when you need to verify module behavior manually in the Visual Builder.

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

#### Static Module

Module library name: **Static Module** (`example/static-module`).

- [ ] Insert **Static Module** from the module library into the page.
- [ ] Click the module and open **Content** settings.
- [ ] Edit the **Summary** field with recognizable text (for example, `Manual VB static summary check`).
- [ ] Save the page and view the front end.
- [ ] Confirm the summary appears inside `.example_static_module__summary`.
- [ ] Confirm **Title** and **Content** fields still render in the module wrapper.

#### Dynamic Module

Module library name: **Dynamic Module** (`example/dynamic-module`).

Requires **published posts**. Draft-only sites will not return post data on the front end.

- [ ] Confirm at least two posts are **Published** (not Draft).
- [ ] Insert **Dynamic Module** from the module library.
- [ ] Open **Content** settings and set **Number of posts** to `2` (or fewer than your published count).
- [ ] Save the page and view the front end.
- [ ] Confirm `.example_dynamic_module__post-item` elements render for published posts.
- [ ] Confirm `.example_dynamic_module__post-item-title` shows real post titles (not placeholder lorem text).
- [ ] Confirm `.example_dynamic_module__post-item-content` shows post excerpt content.

#### Parent Module and Child Module

Module library names: **Parent Module** (`example/parent-module`) and **Child Module** (`example/child-module`).

Focus: **icon inheritance** from parent to child when the child does not define its own icon.

- [ ] Insert **Parent Module** from the module library.
- [ ] Add a **Child Module** nested inside the parent (not as a sibling section/module).
- [ ] Select the **Parent Module** and open **Content** → **Icon**.
- [ ] Set a recognizable parent icon (default is ETmodules `&#x39;` if unchanged).
- [ ] Select the **Child Module** and open **Content** → **Icon**.
- [ ] Leave the child icon unset (do not pick a custom child icon).
- [ ] Confirm the child shows the parent icon in the Visual Builder preview (`.example_child_module__icon.et-pb-icon`).
- [ ] Save the page and view the front end.
- [ ] Confirm the child still renders the inherited icon on the front end.
- [ ] Change only the parent icon, save, and confirm the child icon updates without setting a child icon.

#### Divi 4 Module

Module library name: **Divi 4 Module** (`example/d4-module`). D4 shortcode slug: `d4_module`.

Test **both** paths below: direct D5 insertion and legacy shortcode conversion.

##### Path A — Insert in Divi 5 Visual Builder

- [ ] Insert **Divi 4 Module** from the module library.
- [ ] Open **Content** settings and set **Title** and **Content**.
- [ ] Set title **Heading Level** to `H2` in design/font settings.
- [ ] Confirm the Visual Builder canvas shows a rendered heading and content (not raw JavaScript or broken markup).
- [ ] Save the page and view the front end.
- [ ] Confirm the title renders as `<h2 class="example_d4_module_title">` (not a plain `<div>` wrapper).
- [ ] Confirm content renders inside `.example_d4_module_content`.

##### Path B — Convert legacy `[d4_module]` shortcode

- [ ] Create a test page with a Divi 4 layout that includes the `d4_module` shortcode, for example:

```text
[d4_module title="D4 converted title" header_level="h2"]D4 converted content for manual VB check.[/d4_module]
```

- [ ] Open the page in the **Divi 5 Visual Builder** so the shortcode converts to the D5 block.
- [ ] Confirm the converted module preview renders title and content (not raw JS).
- [ ] Open module settings and confirm **Title**, **Content**, and heading level mapped correctly.
- [ ] Save the page and view the front end.
- [ ] Confirm the front end matches Path A expectations (`<h2 class="example_d4_module_title">` and `.example_d4_module_content`).

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

_Note: If you see error messages for divi packages related to `placeholderContent` in `npm run start` and `npm run start:all`, this is a known issue and it will be fixed once we update `divi-types` npm packages. You can continue developing despite the error messages._

### `npm run build`
It will build all JS and CSS assets for production. By default, it works for D5 modules. For D4 modules, you need to run `npm run build:divi-4`. You can also use `npm run build:all` to build assets for both Divi 5 and Divi 4 modules.

_Note: If you see error messages for divi packages related to `placeholderContent` in `npm run build` and `npm run build:all`, this is a known issue and it will be fixed once we update `divi-types` npm packages._

### `npm run reset-install`
It will remove node_modules and reinstall all dependencies for D5 modules. For D4 modules, you need to run `npm run reset-install:divi-4`.

_Note: If you are facing error for divi packages in `npm run install`, then you need to run `npm run reset-install` command._

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
