import { addFilter } from '@wordpress/hooks';

addFilter('et_vb_module_exceptions_attr_map', 'd5-module-extension-example', (moduleExceptions) => {
  return {
      ...moduleExceptions,
      'd4-module': {
        header_level: 'titleFont.font.*.headingLevel',
      },
  };
});