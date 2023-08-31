import { createElement } from 'react';
import { shallow } from 'enzyme';
import {
  omit,
} from 'lodash';

import { registerAppUiStore } from '@divi/app-ui';
import { registerModule, registerModuleLibraryStore } from '@divi/module-library';
import { registerEventsStore } from '@divi/events';
import { registerKeyboardShortcutsStore } from '@divi/keyboard-shortcuts';
import { registerModalLibraryStore, registerModals } from '@divi/modal-library';
import { registerEditPostStore } from '@divi/edit-post';
import { registerSerializedPostStore } from '@divi/serialized-post';
import { registerAppPreferencesStore } from '@divi/app-preferences';
import { select } from '@divi/data';
import { registerHistoryStore } from '@divi/history';
import { registerModuleStore } from '@divi/module';
import { registerAjaxStore } from '@divi/rest';
import { registerSettingsStore } from '@divi/settings';
import { registerHelpStore } from '@divi/help';
import { registerFontsStore } from '@divi/fonts';
import { registerShortcodeModule } from '@divi/shortcode-module';

import { childModule } from '..';
import testCases from './test-cases.json';
import { ChildModuleEditProps } from '../types';
import { ChildModuleEdit as ModuleComponent } from '../edit';

interface Expected {
  builder: string;
  frontend: string;
}

interface TestCase {
  title: string;
  args: ChildModuleEditProps;
  expected: Expected;
}

// Prepare variable to be used as Module Component that has been registered in the Module Library
// and have ModuleElements instance being passed as props + defaultAttrs merged into module attribute.
let ChildModuleEdit: typeof ModuleComponent;


beforeAll(() => {
  registerHelpStore();
  registerHistoryStore();
  registerModuleLibraryStore();
  registerShortcodeModule(true);

  registerModule(childModule.metadata, omit(childModule, 'metadata'));

  // Get module component from module-library store.
  ChildModuleEdit = select('divi/module-library').getModule('example/child-module').renderers.edit;
});

beforeEach(() => {
  registerHelpStore();
  registerSettingsStore();
  registerAjaxStore();
  registerAppPreferencesStore();
  registerEventsStore();
  registerModalLibraryStore();
  registerAppUiStore();
  registerKeyboardShortcutsStore();
  registerSerializedPostStore();
  registerEditPostStore();
  registerModuleStore();

  if (! select('divi/font')) {
    registerFontsStore();
  }
});

describe.each(testCases as unknown as TestCase[])('<ChildModuleEdit />', ({ title, args }: TestCase) => {
  it(`Should match the snapshot when "${title}"`, () => {
    const component = createElement(ChildModuleEdit, args);

    // Snapshot test
    expect(shallow(component).html()).toMatchSnapshot();
  });
});

