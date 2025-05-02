import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './arrow-fill-up.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/arrow-fill-up'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M544 896c-265.088 0-480-214.912-480-480s214.912-480 480-480 480 214.912 480 480-214.912 480-480 480zM758.656 457.344c-12.48-12.48-32.768-12.48-45.248 0l-137.408 137.408v-498.752c0-17.664-14.336-32-32-32s-32 14.336-32 32v498.752l-137.344-137.408c-12.48-12.48-32.768-12.48-45.248 0s-12.48 32.768 0 45.248l192 192c0.064 0.128 0.128 0.128 0.192 0.192 2.88 2.816 6.336 5.184 10.112 6.72 7.808 3.264 16.64 3.264 24.448 0 3.968-1.6 7.488-3.904 10.496-6.848l192-192c12.48-12.544 12.48-32.768 0-45.312z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 