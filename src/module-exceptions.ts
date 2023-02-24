import { addFilter } from '@wordpress/hooks';

// Add module exceptions to the conversion attributes map.
addFilter('conversion.attrs.map.moduleExceptions', 'extensionExample', (moduleExceptions) => {
  return {
      ...moduleExceptions, // This is important. Without this, all other exceptions will be overwritten.
      'example/d4-module': {
        header_level: 'titleFont.font.*.headingLevel', // This is a custom attribute. By default it will be converted to `headerLevel.*`. But we want to convert it to `titleFont.font.*.headingLevel`.
      },
  };
});
