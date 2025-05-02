import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './arrow-up-down.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/arrow-up-down'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M649.344 777.344c12.48-12.48 32.768-12.48 45.248 0s12.48 32.768 0 45.248l-128 128c-2.944 3.008-6.464 5.312-10.368 6.912-7.808 3.264-16.64 3.264-24.448 0-3.84-1.536-7.232-3.84-10.176-6.72-0.064-0.064-0.128-0.064-0.256-0.128l-128-128c-12.48-12.48-12.48-32.768 0-45.248s32.768-12.48 45.248 0l73.408 73.344v-805.504l-73.344 73.344c-12.48 12.48-32.768 12.48-45.248 0s-12.48-32.768 0-45.248l128-128c0.064-0.064 0.192-0.064 0.256-0.192 2.88-2.816 6.336-5.184 10.112-6.72 7.808-3.264 16.64-3.264 24.448 0 3.904 1.6 7.424 3.968 10.368 6.912l128 128c12.48 12.48 12.48 32.768 0 45.248s-32.768 12.48-45.248 0l-73.344-73.344v805.504l73.344-73.408z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 