import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './arrow_right-down.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/arrow_right-down'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M864 448c-17.664 0-32-14.336-32-32v-242.752l-649.344 649.408c-12.48 12.48-32.768 12.48-45.248 0s-12.48-32.768 0-45.248l649.344-649.408h-242.752c-17.664 0-32-14.336-32-32s14.336-32 32-32h320c4.16 0 8.32 0.832 12.224 2.496 7.808 3.264 14.080 9.472 17.28 17.28 1.6 3.904 2.496 8 2.496 12.096 0 0.064 0 0.064 0 0.128v320c0 17.664-14.336 32-32 32z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 