import { addFilter } from '@wordpress/hooks';

addFilter('et_vb_module_exceptions_attr_map', 'd5-extension-example-modules', (moduleExceptions) => {
  return {
      ...moduleExceptions,
      'example/d4-module': {
        header_level: 'titleFont.font.*.headingLevel',
      },
  };
});