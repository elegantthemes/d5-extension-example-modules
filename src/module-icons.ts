import { addFilter } from '@wordpress/hooks';
// Smart loading test: Only import staticModule icon
import {
  // moduleD4,
  // moduleDynamic,
  // moduleParent,
  moduleStatic,
} from './icons';

// Add module icons to the icon library - Smart loading test: Only staticModule
addFilter('divi.iconLibrary.icon.map', 'extensionExample', (icons) => {
  return {
    ...icons, // This is important. Without this, all other icons will be overwritten.
    [moduleStatic.name]: moduleStatic,
    // Removed for smart loading test:
    // [moduleParent.name]:  moduleParent,
    // [moduleDynamic.name]: moduleDynamic,
    // [moduleD4.name]:      moduleD4,
  };
});
