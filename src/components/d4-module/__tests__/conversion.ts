import { forEach, get, omit } from 'lodash';
import { v4 as uuid } from 'uuid';

import { maybeConvertContent } from '@divi/conversion';
import { parseSerializedPostIntoFlatModuleObject } from '@divi/edit-post';

import * as attrs from '../__mock-data__/attrs';
import * as shortcodes from '../__mock-data__/shortcodes';
import { registerModule, registerModuleLibraryStore } from '@divi/module-library';
import { registerHelpStore } from '@divi/help';

import { d4Module } from '..';

registerHelpStore();
registerModuleLibraryStore();
registerModule(d4Module.metadata, omit(d4Module, 'metadata'));

// Mock uuid for consistent value.
jest.mock('uuid', () => ({
  v4: jest.fn(),
}));

const mockedUuid = uuid as jest.MockedFunction<typeof uuid>;

describe('Conversion of `d4_module` shortcode into `divi/d4-module` GB Format attributes.', () => {
  const moduleId = 'module-d4-module-1';

  mockedUuid.mockReturnValue(moduleId);

  forEach(shortcodes, (shortcodeItem, shortcodeKey) => {
    it(`should verify that \`${shortcodeKey}\` shortcode matches \`${shortcodeKey}\` attributes`, () => {
      const moduleObject = parseSerializedPostIntoFlatModuleObject(
        maybeConvertContent(shortcodeItem),
        undefined,
        uuid,
      );

      expect(moduleObject[moduleId].props.attrs).toEqual(get(attrs, [shortcodeKey]));
    });
  });
});
