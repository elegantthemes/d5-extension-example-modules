import { createElement } from 'react';
import { shallow } from 'enzyme';
import {
  forEach,
  pickBy,
  has,
  get,
} from 'lodash';

import { registerAppUiStore } from '@divi/app-ui';
import { registerModuleLibraryStore } from '@divi/module-library';
import { registerEventsStore } from '@divi/events';
import { registerKeyboardShortcutsStore } from '@divi/keyboard-shortcuts';
import { registerModals } from '@divi/modal-library';
import { registerEditPostStore } from '@divi/edit-post';
import { registerSerializedPostStore } from '@divi/serialized-post';
import { ParentModuleEdit } from '../edit';
import { dispatch } from '@divi/data';
import { parentModule } from '..';

import * as editStories  from '../stories/edit.stories';
import { state } from '../__mock-data__/module-objects';
import { childModule } from '../../child-module';
import { registerAppPreferencesStore } from '@divi/app-preferences';

// Only test story that has description. This naturally excludes `default` export from being included as test.
const testableStories = pickBy(editStories, story => has(story, 'parameters.docs.description.story')) as Omit<typeof editStories, 'default'>;

beforeAll(() => {
  registerModuleLibraryStore();
  dispatch('divi/module-library').addModule(childModule);
  dispatch('divi/module-library').addModule(parentModule);
});

beforeEach(() => {
  registerAppPreferencesStore();
  registerAppUiStore();
  registerEventsStore();
  registerKeyboardShortcutsStore();
  registerModals();
  registerSerializedPostStore();
  registerEditPostStore(state);
});

describe('<ParentModuleEdit />', () => {
  // Snapshot test based on storybook configuration.
  // Prevents regression due to unintentionally modifying component.
  forEach(testableStories, testableStory => {
    it(`Should match the snapshot when "${get(testableStory, 'parameters.docs.description.story') as string}"`, () => {
      expect(
        shallow(createElement(ParentModuleEdit, testableStory.args)).html(),
      ).toMatchSnapshot();
    });
  });
});
