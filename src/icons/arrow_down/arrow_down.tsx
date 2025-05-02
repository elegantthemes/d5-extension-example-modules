import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './arrow_down.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/arrow_down'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M544 832c-17.664 0-32-14.336-32-32v-626.752l-137.344 137.344c-12.48 12.48-32.768 12.48-45.248 0s-12.48-32.768 0-45.248l192-192c0.064-0.064 0.192-0.064 0.256-0.192 2.88-2.816 6.336-5.184 10.112-6.72 7.808-3.264 16.64-3.264 24.448 0 3.904 1.6 7.424 3.968 10.368 6.912l192 192c12.48 12.48 12.48 32.768 0 45.248s-32.768 12.48-45.248 0l-137.344-137.344v626.752c0 17.664-14.336 32-32 32z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 