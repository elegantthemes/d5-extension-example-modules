import { addFilter } from '@wordpress/hooks';
import {
  moduleD4,
  moduleDynamic,
  moduleParent,
  moduleStatic,
} from './icons';

// Add module icons to the icon library.
addFilter('divi.iconLibrary.icon.map', 'extensionExample', (icons) => {
  return {
    ...icons, // This is important. Without this, all other icons will be overwritten.
    [moduleParent.name]:  moduleParent,
    [moduleStatic.name]:  moduleStatic,
    [moduleDynamic.name]: moduleDynamic,
    [moduleD4.name]:      moduleD4,
  };
});
