import {
  createElement,
  ReactElement,
} from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { Story } from '@storybook/react';
import {
  defaultAttributes,
  contentStyle,
  customBackground,
  customImage,
  imageStyle,
  titleStyle,
} from '../__mock-data__/attrs';

import { StaticModuleEdit } from '../edit';
import { StaticModuleEditProps } from '../types';
import { dispatch, select } from '@divi/data';
import { staticModule } from '..';
import { isNull, isUndefined } from 'lodash';
import { registerModuleLibraryStore } from '@divi/module-library';
import { registerEventsStore } from '@divi/events';
import { registerModalLibraryStore, registerModals } from '@divi/modal-library';
import { registerAppUiStore } from '@divi/app-ui';
import { registerKeyboardShortcutsStore } from '@divi/keyboard-shortcuts';
import { registerSerializedPostStore } from '@divi/serialized-post';
import { registerEditPostStore } from '@divi/edit-post';
import { registerSettingsStore } from '@divi/settings';
import { registerHistoryStore } from '@divi/history';
import { registerAppPreferencesStore } from '@divi/app-preferences';

// Create template to render argument given.
const templateDividerEdit: Story<StaticModuleEditProps> = args => createElement(StaticModuleEdit, args);

const name = 'divi/static-module';

// Stories.
const DefaultValues      = templateDividerEdit.bind({}) as Story<StaticModuleEditProps>;
DefaultValues.args       = {
  name,
  id:    'static-module-1',
  attrs: defaultAttributes,
};
DefaultValues.parameters = {
  docs: {
    description: {
      story: 'Default attributes that gets added when Static module is added.',
    },
  },
};

const ContentStyle      = templateDividerEdit.bind({}) as Story<StaticModuleEditProps>;
ContentStyle.args       = {
  name,
  id:    'static-module-2',
  attrs: contentStyle,
};
ContentStyle.parameters = {
  docs: {
    description: {
      story: 'Display content text style properly when the content text style is set.',
    },
  },
};

const CustomBackground      = templateDividerEdit.bind({}) as Story<StaticModuleEditProps>;
CustomBackground.args       = {
  name,
  id:    'static-module-3',
  attrs: customBackground,
};
CustomBackground.parameters = {
  docs: {
    description: {
      story: 'Display custom background properly when the custom background is set.',
    },
  },
};

const CustomImage      = templateDividerEdit.bind({}) as Story<StaticModuleEditProps>;
CustomImage.args       = {
  name,
  id:    'static-module-4',
  attrs: customImage,
};
CustomImage.parameters = {
  docs: {
    description: {
      story: 'Display custom image properly when the custom image is set.',
    },
  },
};

const ImageStyle      = templateDividerEdit.bind({}) as Story<StaticModuleEditProps>;
ImageStyle.args       = {
  name,
  id:    'static-module-5',
  attrs: imageStyle,
};
ImageStyle.parameters = {
  docs: {
    description: {
      story: 'Display image style properly when the image style is set.',
    },
  },
};

const TitleStyle      = templateDividerEdit.bind({}) as Story<StaticModuleEditProps>;
TitleStyle.args       = {
  name,
  id:    'static-module-6',
  attrs: titleStyle,
};
TitleStyle.parameters = {
  docs: {
    description: {
      story: 'Display title text style properly when the title text style is set.',
    },
  },
};


export {
  DefaultValues,
  TitleStyle,
  ContentStyle,
  CustomBackground,
  CustomImage,
  ImageStyle,
};

export default {
  title: 'Modules/Static Module/Edit',
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

      const theModule = select('divi/module-library').getModule(staticModule.name);

      if (isUndefined(theModule)) {
        dispatch('divi/module-library').addModule(staticModule);
      }
      return story();
    }),
  ],
};
