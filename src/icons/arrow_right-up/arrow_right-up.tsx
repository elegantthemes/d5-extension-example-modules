import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './arrow_right-up.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/arrow_right-up'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M137.344 73.344c12.48-12.48 32.768-12.48 45.248 0l649.408 649.408v-242.752c0-17.664 14.336-32 32-32s32 14.336 32 32v320c0 4.16-0.832 8.32-2.496 12.224-3.264 7.808-9.472 14.080-17.28 17.28-3.904 1.664-8.064 2.496-12.224 2.496h-320c-17.664 0-32-14.336-32-32s14.336-32 32-32h242.752l-649.408-649.344c-12.48-12.544-12.48-32.768 0-45.312z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 