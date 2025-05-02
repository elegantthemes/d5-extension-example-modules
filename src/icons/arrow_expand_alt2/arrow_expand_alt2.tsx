import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './arrow_expand_alt2.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/arrow_expand_alt2'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M128 480c0-17.664 14.336-32 32-32s32 14.336 32 32v242.752l594.752-594.752h-242.752c-17.664 0-32-14.336-32-32s14.336-32 32-32h320c4.16 0 8.32 0.832 12.224 2.496 7.808 3.264 14.080 9.472 17.28 17.28 1.6 3.904 2.496 8 2.496 12.096 0 0.064 0 0.064 0 0.128v320c0 17.664-14.336 32-32 32s-32-14.336-32-32v-242.752l-594.752 594.752h242.752c17.664 0 32 14.336 32 32s-14.336 32-32 32h-320c-4.16 0-8.32-0.832-12.224-2.496-3.84-1.536-7.232-3.84-10.176-6.72-0.064-0.064-0.128-0.064-0.256-0.128-0.064-0.128-0.128-0.32-0.192-0.384-2.816-2.88-5.12-6.272-6.656-10.048-1.664-3.904-2.496-8.064-2.496-12.224v0-320z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 