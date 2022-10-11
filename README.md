# D5 Module Extension Example
Example modules for the Divi 5.

## Installation
You need to install **Yarn 3.2.0** and set the `nodeLinker` to `node-modules`
```
yarn set version 3.2.0 && yarn config set nodeLinker node-modules
```
Then, install the project dependencies:
```
yarn
```
Now, start the project:
```
yarn start
```

## Folder Structure
```
d5-module-extension-example
├── .storybook
│   ├── main.js
│   ├── preview-head.html
│   └── preview.js
├── src
│   ├── components
│   │   ├── hello-world
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
├── d5-module-extension-example.php
├── gulpfile.js
├── package.json
├── README.md
├── tsconfig.json
├── webpack.config.js
└── yarn.lock
```

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