import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './arrow_left-right.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/arrow_left-right'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M1021.504 492.224c-1.6 3.904-3.968 7.424-6.912 10.368l-128 128c-12.48 12.48-32.768 12.48-45.248 0s-12.48-32.768 0-45.248l73.408-73.344h-805.504l73.344 73.344c12.48 12.48 12.48 32.768 0 45.248s-32.768 12.48-45.248 0l-128-128c-0.064-0.064-0.128-0.256-0.192-0.32-2.816-2.88-5.12-6.272-6.656-10.048-1.664-3.904-2.496-8.064-2.496-12.224v0c0-0.064 0-0.064 0-0.128 0-4.096 0.896-8.192 2.496-12.096 1.536-3.776 3.84-7.168 6.656-10.048 0.064-0.128 0.128-0.256 0.192-0.384l128-128c12.48-12.48 32.768-12.48 45.248 0s12.48 32.768 0 45.248l-73.344 73.408h805.504l-73.344-73.344c-12.48-12.48-12.48-32.768 0-45.248s32.768-12.48 45.248 0l128 128c2.944 2.944 5.312 6.464 6.912 10.368 1.536 3.904 2.432 8 2.432 12.096 0 0.064 0 0.064 0 0.128v0c0 4.16-0.832 8.32-2.496 12.224z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 