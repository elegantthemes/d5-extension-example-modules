import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './arrow-fill-down.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/arrow-fill-down'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M544 896c-265.088 0-480-214.912-480-480s214.912-480 480-480 480 214.912 480 480-214.912 480-480 480zM758.656 329.344l-192-192c-2.944-2.944-6.464-5.312-10.368-6.912-7.808-3.264-16.64-3.264-24.448 0-3.84 1.6-7.232 3.904-10.112 6.72-0.064 0.064-0.192 0.064-0.256 0.192l-192 192c-12.48 12.48-12.48 32.768 0 45.248s32.768 12.48 45.248 0l137.28-137.344v498.752c0 17.664 14.336 32 32 32s32-14.336 32-32v-498.752l137.344 137.344c12.48 12.48 32.768 12.48 45.248 0 12.544-12.48 12.544-32.704 0.064-45.248z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 