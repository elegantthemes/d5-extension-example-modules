import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './warning-fill.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/warning-fill'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M735.632 925.83c-11.656 11.656-27.404 18.166-43.896 18.166h-359.474c-16.43 0-32.24-6.51-43.834-18.166l-254.198-254.26c-11.718-11.594-18.228-27.342-18.228-43.834v-359.536c0-16.43 6.51-32.24 18.166-43.834l254.198-254.26c11.656-11.594 27.404-18.104 43.896-18.104h359.536c16.43 0 32.24 6.51 43.834 18.166l254.198 254.26c11.656 11.594 18.166 27.342 18.166 43.834v359.474c0 16.43-6.51 32.24-18.166 43.834l-254.198 254.26zM512 324c-34.224 0-62 27.776-62 62v371.998c0 34.224 27.776 62 62 62s62-27.776 62-62v-371.998c0-34.224-27.776-62-62-62zM574 138.002c0-34.224-27.776-62-62-62s-62 27.776-62 62c0 34.224 27.776 62 62 62s62-27.776 62-62z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 