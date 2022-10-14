import {
  createElement,
  ReactElement,
} from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { Story } from '@storybook/react';
import { rest } from 'msw';

import {
  defaultAttributes, numberOfPosts, postTitleStyle, titleStyle,
} from '../__mock-data__/attrs';

import { DynamicModuleEdit } from '../edit';
import { DynamicModuleEditProps } from '../types';
import { select } from '@divi/data';
import { registerEditPostStore } from '@divi/edit-post';
import { dynamicModule } from '..';
import { isNull, isUndefined, omit, times } from 'lodash';
import { registerModule, registerModuleLibraryStore } from '@divi/module-library';
import { registerEventsStore } from '@divi/events';
import { registerModals } from '@divi/modal-library';
import { registerAppUiStore } from '@divi/app-ui';
import { registerKeyboardShortcutsStore } from '@divi/keyboard-shortcuts';
import { registerSerializedPostStore } from '@divi/serialized-post';
import { registerSettingsStore } from '@divi/settings';
import { registerHistoryStore } from '@divi/history';
import { registerAppPreferencesStore } from '@divi/app-preferences';
import { registerAjaxStore } from '@divi/ajax';
import { post } from '../__mock-data__/posts';

// Create template to render argument given.
const templateDividerEdit: Story<DynamicModuleEditProps> = args => createElement(DynamicModuleEdit, args);

const name = 'example/dynamic-module';

const posts = rest.get('wp-json/wp/v2/posts', (req, res, ctx) => {
  const perPage = req?.url?.searchParams?.get('per_page');
  
  return res(        
    ctx.json(times(parseInt(perPage), () => post)),
  );
});

// Stories.
const DefaultValues      = templateDividerEdit.bind({}) as Story<DynamicModuleEditProps>;
DefaultValues.args       = {
  name,
  id:    'dynamicModule1',
  attrs: defaultAttributes,
};
DefaultValues.parameters = {
  docs: {
    description: {
      story: 'Default attributes that gets added when Dynamic module is added.',
    },
  },
  msw: {
    handlers: {
      posts,
    },
  },
};

const NumberOfPosts      = templateDividerEdit.bind({}) as Story<DynamicModuleEditProps>;
NumberOfPosts.args       = {
  name,
  id:    'dynamicModule2',
  attrs: numberOfPosts,
};
NumberOfPosts.parameters = {
  docs: {
    description: {
      story: 'Display only 2 posts when the numberOfPosts attribute is set to 2.',
    },
  },
  msw: {
    handlers: {
      posts,
    },
  },
};

const TitleStyle      = templateDividerEdit.bind({}) as Story<DynamicModuleEditProps>;
TitleStyle.args       = {
  name,
  id:    'dynamicModule3',
  attrs: titleStyle,
};
TitleStyle.parameters = {
  docs: {
    description: {
      story: 'Display title style properly when the title style is set.',
    },
  },
  msw: {
    handlers: {
      posts,
    },
  },
};

const PostTitleStyle      = templateDividerEdit.bind({}) as Story<DynamicModuleEditProps>;
PostTitleStyle.args       = {
  name,
  id:    'dynamicModule3',
  attrs: postTitleStyle,
};
PostTitleStyle.parameters = {
  docs: {
    description: {
      story: 'Display title style properly when the post title style is set.',
    },
  },
  msw: {
    handlers: {
      posts,
    },
  },
};


export {
  DefaultValues,
  NumberOfPosts,
  TitleStyle,
  PostTitleStyle,
};

export default {
  title: 'Modules/Dynamic Module/Edit',
  decorators: [
    ((story: () => ReactElement): ReactElement => {
      registerAppPreferencesStore();
      registerAppUiStore();
      registerEventsStore();
      registerKeyboardShortcutsStore();
      registerModals();
      registerSettingsStore();
      registerAjaxStore();
      registerSerializedPostStore();
      registerEditPostStore();
      registerHistoryStore();
      if (isNull(select('divi/module-library'))) {
        registerModuleLibraryStore();
      }

      const theModule  = select('divi/module-library').getModule(dynamicModule?.metadata?.name);

      if (isUndefined(theModule)) {
        registerModule(dynamicModule.metadata, omit(dynamicModule, 'metadata'));
      }
      return story();
    }),
  ],
};
