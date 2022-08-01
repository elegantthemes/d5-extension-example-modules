import { createElement } from 'react';
import { shallow } from 'enzyme';
import {
  forEach,
} from 'lodash';

import { registerAppUiStore } from '@divi/app-ui';
import { registerModuleLibraryStore } from '@divi/module-library';
import { registerEventsStore } from '@divi/events';
import { registerKeyboardShortcutsStore } from '@divi/keyboard-shortcuts';
import { registerModals } from '@divi/modal-library';
import { registerEditPostStore } from '@divi/edit-post';
import { registerSerializedPostStore } from '@divi/serialized-post';
import { StaticModuleEdit } from '../edit';
import * as attrs from '../__mock-data__/attrs';


beforeAll(() => {
  registerModuleLibraryStore();
});

beforeEach(() => {
  registerAppUiStore();
  registerEventsStore();
  registerKeyboardShortcutsStore();
  registerModals();
  registerSerializedPostStore();
  registerEditPostStore();
});

describe('<StaticModuleEdit />', () => {
  // Snapshot test based on storybook configuration.
  // Prevents regression due to unintentionally modifying component.
  forEach(attrs, (attr, attrKey) => {
    it(`Should match the snapshot when "${attrKey}" will render correctly`, () => {
      expect(
        shallow(createElement(StaticModuleEdit, {
          name: 'divi/static-module',
          id:    attrKey,
          attrs: attr,
        })).html(),
      ).toMatchSnapshot();
    });
  });
});
