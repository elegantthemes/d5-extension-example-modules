import {
  createElement,
  ReactElement,
} from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { Story } from '@storybook/react';
import {
  defaultAttributes,
} from '../__mock-data__/attrs';

import { ParentModuleEdit } from '../edit';
import { ParentModuleEditProps } from '../types';
import { dispatch, select } from '@divi/data';
import { registerEditPostStore } from '@divi/edit-post';
import { parentModule } from '..';
import { childModule } from '../../child-module';
import { state } from '../__mock-data__/module-objects';
import { isNull } from 'lodash';
import { registerModuleLibraryStore } from '@divi/module-library';
import { registerEventsStore } from '@divi/events';
import { registerModalLibraryStore, registerModals } from '@divi/modal-library';
import { registerAppUiStore } from '@divi/app-ui';
import { registerKeyboardShortcutsStore } from '@divi/keyboard-shortcuts';
import { registerSerializedPostStore } from '@divi/serialized-post';
import { registerSettingsStore } from '@divi/settings';
import { registerHistoryStore } from '@divi/history';
import { registerAppPreferencesStore } from '@divi/app-preferences';

// Create template to render argument given.
const templateDividerEdit: Story<ParentModuleEditProps> = args => createElement(ParentModuleEdit, args);

const name = 'divi/parent-module';

// Stories.
const DefaultValues      = templateDividerEdit.bind({}) as Story<ParentModuleEditProps>;
DefaultValues.args       = {
  name,
  id:    'parent-module-1',
  attrs: defaultAttributes,
  childrenIds: [
    'childModule1',
    'childModule2',
    'childModule3',
  ],
};
DefaultValues.parameters = {
  docs: {
    description: {
      story: 'Default attributes that gets added when Child module is added.',
    },
  },
};


export {
  DefaultValues,
};

export default {
  title: 'Modules/Parent Module/Edit',
  decorators: [
    ((story: () => ReactElement): ReactElement => {
      registerAppPreferencesStore();
      registerAppUiStore();
      registerEventsStore();
      registerKeyboardShortcutsStore();
      registerModals();
      registerSettingsStore();
      registerSerializedPostStore();
      registerEditPostStore(state);
      registerHistoryStore();
      if (isNull(select('divi/module-library'))) {
        registerModuleLibraryStore();
      }

      dispatch('divi/module-library').addModule(childModule);
      dispatch('divi/module-library').addModule(parentModule);
      return story();
    }),
  ],
};
