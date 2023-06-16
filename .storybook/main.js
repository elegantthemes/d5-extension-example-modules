const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    // '@storybook/preset-scss'
  ],
  staticDirs: ['../storybook-assets'],
  // "stories": [
  //   "../src/**/*.stories.mdx",
  //   "../src/**/*.stories.@(js|jsx|ts|tsx)"
  // ],
  // "addons": [
  //   "@storybook/addon-links",
  //   "@storybook/addon-essentials",
  //   "@storybook/addon-interactions"
  // ],
  // "framework": "@storybook/react",
  // "core": {
  //   "builder": "@storybook/builder-webpack5"
  // },
  babel: async (options) => ({
    ...options,
    'plugins': [
      '@babel/plugin-proposal-class-properties'
    ]
  }),
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    // Gutenberg packages in D5i is loaded via external (D5i enqueue WordPress' packages then importing it
    // as package using webpack externals). What happened here is basically the same which is setting up
    // alias for externals. The differences: the scripts can't be enqueue automatically so the printed
    // HTML is copy-pasted into `.storybook/preview-head.html` manually.
    config.externals = {
      '@wordpress/a11y': 'window.wp.a11y',
      // '@wordpress/annotations': 'window.wp.annotations',
      '@wordpress/api-fetch': 'window.wp.apiFetch',
      '@wordpress/autop': 'window.wp.autop',
      '@wordpress/blob': 'window.wp.blob',
      // '@wordpress/block-directory': 'window.wp.blockDirectory',
      '@wordpress/block-editor': 'window.wp.blockEditor',
      // '@wordpress/block-library': 'window.wp.blockLibrary',
      '@wordpress/block-serialization-default-parser': 'window.wp.blockSerializationDefaultParser',
      '@wordpress/block-serialization-spec-parser': 'window.wp.specParser',
      '@wordpress/blocks': 'window.wp.blocks',
      '@wordpress/components': 'window.wp.components',
      '@wordpress/compose': 'window.wp.compose',
      '@wordpress/core-data': 'window.wp.coreData',
      '@wordpress/data': 'window.wp.data',
      '@wordpress/data-controls': 'window.wp.dataControls',
      '@wordpress/date': 'window.wp.date',
      // '@wordpress/deprecated': 'window.wp.deprecated',
      '@wordpress/dom': 'window.wp.dom',
      '@wordpress/dom-ready': 'window.wp.domReady',
      // '@wordpress/edit-navigation': 'window.wp.editNavigation',
      // '@wordpress/edit-post': 'window.wp.editPost',
      // '@wordpress/edit-site': 'window.wp.editSite',
      // '@wordpress/edit-widgets': 'window.wp.editWidgets',
      '@wordpress/editor': 'window.wp.editor',
      '@wordpress/element': 'window.wp.element',
      '@wordpress/escape-html': 'window.wp.escapeHtml',
      // '@wordpress/format-library': 'window.wp.formatLibrary',
      '@wordpress/hooks': 'window.wp.hooks',
      '@wordpress/html-entities': 'window.wp.htmlEntities',
      '@wordpress/i18n': 'window.wp.i18n',
      // '@wordpress/icons': 'window.wp.icons',
      // '@wordpress/interface': 'window.wp.interface',
      // '@wordpress/is-shallow-equal': 'window.wp.isShallowEqual',
      // '@wordpress/keyboard-shortcuts': 'window.wp.keyboardShortcuts',
      // '@wordpress/keycodes': 'window.wp.keycodes',
      // '@wordpress/list-reusable-blocks': 'window.wp.listReusableBlocks',
      '@wordpress/media-utils': 'window.wp.mediaUtils',
      // '@wordpress/notices': 'window.wp.notices',
      // '@wordpress/nux': 'window.wp.nux',
      // '@wordpress/plugins': 'window.wp.plugins',
      // '@wordpress/primitives': 'window.wp.primitives',
      // '@wordpress/priority-queue': 'window.wp.priorityQueue',
      '@wordpress/redux-routine': 'window.wp.reduxRoutine',
      '@wordpress/rich-text': 'window.wp.richText',
      '@wordpress/server-side-render': 'window.wp.serverSideRender',
      '@wordpress/shortcode': 'window.wp.shortcode',
      '@wordpress/token-list': 'window.wp.tokenList',
      '@wordpress/url': 'window.wp.url',
      '@wordpress/viewport': 'window.wp.viewport',
      '@wordpress/warning': 'window.wp.warning',
      '@wordpress/wordcount': 'window.wp.wordcount',

      // D5i uses external React and react-dom enqueued from WordPress' wp-includes. Thus storybook
      // needs to use react from this external and avoid react duplicates. Without this,
      // the use of `withSelect()` on any *Container component will break and throwing
      // `Uncaught Error: Invalid hook call.` error.
      // @see https://github.com/storybookjs/storybook/issues/3791#issuecomment-619377477
      react: 'React',
      ['react-dom']: 'ReactDOM',
      
      '@divi/data': 'window.divi.data',
      '@divi/middleware': 'window.divi.middleware',
      '@divi/rest': 'window.divi.ajax',
      '@divi/constant-library': 'window.divi.constantLibrary',
      '@divi/divider-library': 'window.divi.dividerLibrary',
      '@divi/window': 'window.divi.window',
      '@divi/draggable': 'window.divi.draggable',
      '@divi/error-boundary': 'window.divi.errorBoundary',
      '@divi/icon-library': 'window.divi.iconLibrary',
      '@divi/keyboard-shortcuts': 'window.divi.keyboardShortcuts',
      '@divi/mask-and-pattern-library': 'window.divi.maskAndPatternLibrary',
      '@divi/module-utils': 'window.divi.moduleUtils',
      '@divi/numbers': 'window.divi.numbers',
      '@divi/context-library': 'window.divi.contextLibrary',
      '@divi/seamless-immutable-extension': 'window.divi.seamlessImmutableExtension',
      '@divi/clipboard': 'window.divi.clipboard',
      '@divi/right-click-options': 'window.divi.rightClickOptions',
      '@divi/sanitize': 'window.divi.sanitize',
      '@divi/style-library': 'window.divi.styleLibrary',
      '@divi/tooltip': 'window.divi.tooltip',
      '@divi/url': 'window.divi.url',
      '@divi/ui-library': 'window.divi.uiLibrary',
      '@divi/field-library': 'window.divi.fieldLibrary',
      '@divi/app-frame': 'window.divi.appFrame',
      '@divi/app-preferences': 'window.divi.appPreferences',
      '@divi/app-ui': 'window.divi.appUi',
      '@divi/cloud-app': 'window.divi.cloudApp',
      '@divi/settings': 'window.divi.settings',
      '@divi/colors': 'window.divi.colors',
      '@divi/hooks': 'window.divi.hooks',
      '@divi/modal': 'window.divi.modal',
      '@divi/module': 'window.divi.module',
      '@divi/module-library': 'window.divi.moduleLibrary',
      '@divi/conversion': 'window.divi.conversion',
      '@divi/edit-post': 'window.divi.editPost',
      '@divi/events': 'window.divi.events',
      '@divi/fonts': 'window.divi.fonts',
      '@divi/history': 'window.divi.history',
      '@divi/page-settings-bar': 'window.divi.pageSettingsBar',
      '@divi/modal-library': 'window.divi.modalLibrary',
      '@divi/modal-snap-indicator': 'window.divi.modalSnapIndicator',
      '@divi/root': 'window.divi.root',
      '@divi/serialized-post': 'window.divi.serializedPost',
      '@divi/object-renderer': 'window.divi.objectRenderer',
      '@divi/defaults': 'window.divi.defaults',
      '@divi/shortcode-module': 'window.divi.shortcodeModule',
    }

    // D5i uses external React and react-dom enqueued from WordPress' wp-includes. Thus storybook
    // needs to use react from this external and avoid react duplicates. Without this,
    // the use of `withSelect()` on any *Container component will break and throwing
    // `Uncaught Error: Invalid hook call.` error.
    // @see https://github.com/storybookjs/storybook/issues/3791#issuecomment-619377477
    delete config.resolve.alias['react'];
    delete config.resolve.alias['react-dom'];

    // Return the altered config
    return config;
  },
}