import { forEach, get } from 'lodash';
import { v4 as uuid } from 'uuid';

import { maybeConvertContent } from '@divi/conversion';
import { parseSerializedPostIntoFlatModuleObject } from '@divi/edit-post';

import * as attrs from '../__mock-data__/attrs';
import * as shortcodes from '../__mock-data__/shortcodes';
import { addFilter } from '@wordpress/hooks';

addFilter('custom_modules_list', 'd5-module-extension-example', (modulesName) => {
    return {
        ...modulesName,
        d4_module: 'divi/d4-module',
    };
});

addFilter('module_exceptions_attr_map', 'd5-module-extension-example', (moduleExceptions) => {
    return {
        ...moduleExceptions,
        'd4-module': {
          header_level: 'titleFont.font.*.headingLevel',
        },
    };
});

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
