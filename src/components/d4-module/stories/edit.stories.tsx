import {
  createElement,
  ReactElement,
} from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { Story } from '@storybook/react';
import {
  defaultAttributes,
  contentStyle,
  styleOne,
  styleTwo,
} from '../__mock-data__/attrs';

import { D4ModuleEdit } from '../edit';
import { D4ModuleEditProps } from '../types';
import { d4Module } from '..';
import { isNull, isUndefined, omit } from 'lodash';
import { registerModuleLibraryStore, registerModule } from '@divi/module-library';
import { registerEventsStore } from '@divi/events';
import { registerModalLibraryStore, registerModals } from '@divi/modal-library';
import { registerAppUiStore } from '@divi/app-ui';
import { registerKeyboardShortcutsStore } from '@divi/keyboard-shortcuts';
import { registerSerializedPostStore } from '@divi/serialized-post';
import { registerEditPostStore } from '@divi/edit-post';
import { registerSettingsStore } from '@divi/settings';
import { registerHistoryStore } from '@divi/history';
import { registerAppPreferencesStore } from '@divi/app-preferences';
import { select } from '@divi/data';

// Create template to render argument given.
const templateDividerEdit: Story<D4ModuleEditProps> = args => createElement(D4ModuleEdit, args);

const name = 'example/d4-module';

// Stories.
const DefaultValues      = templateDividerEdit.bind({}) as Story<D4ModuleEditProps>;
DefaultValues.args       = {
  name,
  id:    'd4-module-1',
  attrs: defaultAttributes,
};
DefaultValues.parameters = {
  docs: {
    description: {
      story: 'Default attributes that gets added when Divi 4 module is added.',
    },
  },
};

const ContentStyle      = templateDividerEdit.bind({}) as Story<D4ModuleEditProps>;
ContentStyle.args       = {
  name,
  id:    'd4-module-2',
  attrs: contentStyle,
};
ContentStyle.parameters = {
  docs: {
    description: {
      story: 'Display content text style properly when the content text style is set.',
    },
  },
};

const StyleOne      = templateDividerEdit.bind({}) as Story<D4ModuleEditProps>;
StyleOne.args       = {
  name,
  id:    'd4-module-3',
  attrs: styleOne,
};
StyleOne.parameters = {
  docs: {
    description: {
      story: 'Display custom background, title color, content color and padding properly when the custom background, title color, content color and padding are set.',
    },
  },
};

const StyleTwo      = templateDividerEdit.bind({}) as Story<D4ModuleEditProps>;
StyleTwo.args       = {
  name,
  id:    'd4-module-4',
  attrs: styleTwo,
};
StyleTwo.parameters = {
  docs: {
    description: {
      story: 'Display custom styles properly when the custom styles are set.',
    },
  },
};


export {
  DefaultValues,
  ContentStyle,
  StyleOne,
  StyleTwo,
};

export default {
  title: 'Modules/Divi 4 Module/Edit',
  decorators: [
    ((story: () => ReactElement): ReactElement => {
      registerAppPreferencesStore();
      registerAppUiStore();
      registerEventsStore();
      registerKeyboardShortcutsStore();
      registerModals();
      registerSettingsStore();
      registerSerializedPostStore();
      registerEditPostStore();
      registerHistoryStore();
      if (isNull(select('divi/module-library'))) {
        registerModuleLibraryStore();
      }

      const theModule = select('divi/module-library').getModule(d4Module?.metadata?.name);

      if (isUndefined(theModule)) {
        registerModule(d4Module.metadata, omit(d4Module, 'metadata'));
      }
      return story();
    }),
  ],
};
