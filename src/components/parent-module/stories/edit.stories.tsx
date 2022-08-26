import {
  createElement,
  ReactElement,
} from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { Story } from '@storybook/react';
import {
  defaultAttributes,
  customIcon,
  iconStyle,
  titleStyle,
  contentStyle,
} from '../__mock-data__/attrs';

import { ParentModuleEdit } from '../edit';
import { ParentModuleEditProps } from '../types';
import { dispatch, select } from '@divi/data';
import { registerEditPostStore } from '@divi/edit-post';
import { parentModule } from '..';
import { childModule } from '../../child-module';
import { state } from '../__mock-data__/module-objects';
import { isNull, isUndefined } from 'lodash';
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
  id:    'parentModule1',
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
      story: 'Default attributes that gets added when Parent module is added.',
    },
  },
};

const CustomIcon      = templateDividerEdit.bind({}) as Story<ParentModuleEditProps>;
CustomIcon.args       = {
  name,
  id:    'parentModule2',
  attrs: customIcon,
  childrenIds: [
    'childModule4',
    'childModule5',
    'childModule6',
  ],
};
CustomIcon.parameters = {
  docs: {
    description: {
      story: 'Display selected icon properly into child module when the icon value is set.',
    },
  },
};

const IconStyle      = templateDividerEdit.bind({}) as Story<ParentModuleEditProps>;
IconStyle.args       = {
  name,
  id:    'parentModule3',
  attrs: iconStyle,
  childrenIds: [
    'childModule7',
    'childModule8',
    'childModule9',
  ],
};
IconStyle.parameters = {
  docs: {
    description: {
      story: 'Display icon style properly when the icon style is set.',
    },
  },
};

const TitleStyle      = templateDividerEdit.bind({}) as Story<ParentModuleEditProps>;
TitleStyle.args       = {
  name,
  id:    'parentModule4',
  attrs: titleStyle,
  childrenIds: [
    'childModule10',
    'childModule11',
    'childModule12',
  ],
};
TitleStyle.parameters = {
  docs: {
    description: {
      story: 'Display title style properly when the title style is set.',
    },
  },
};

const ContentStyle      = templateDividerEdit.bind({}) as Story<ParentModuleEditProps>;
ContentStyle.args       = {
  name,
  id:    'parentModule5',
  attrs: contentStyle,
  childrenIds: [
    'childModule13',
    'childModule14',
    'childModule15',
  ],
};
ContentStyle.parameters = {
  docs: {
    description: {
      story: 'Display content style properly when the content style is set.',
    },
  },
};


export {
  DefaultValues,
  CustomIcon,
  IconStyle,
  TitleStyle,
  ContentStyle,
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

      const theChildModule  = select('divi/module-library').getModule(childModule.name);
      const theParentModule = select('divi/module-library').getModule(parentModule.name);

      if (isUndefined(theChildModule)) {
        dispatch('divi/module-library').addModule(childModule);
      }
      if (isUndefined(theParentModule)) {
        dispatch('divi/module-library').addModule(parentModule);
      }
      return story();
    }),
  ],
};
