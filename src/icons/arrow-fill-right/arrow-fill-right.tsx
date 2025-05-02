import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './arrow-fill-right.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/arrow-fill-right'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M544 896c-265.088 0-480-214.912-480-480s214.912-480 480-480 480 214.912 480 480-214.912 480-480 480zM832 416c0-0.064 0-0.064 0-0.128 0-4.16-0.832-8.256-2.432-12.096-1.6-3.904-3.968-7.424-6.912-10.368l-192-192c-12.48-12.48-32.768-12.48-45.248 0s-12.48 32.768 0 45.248l137.344 137.344h-498.752c-17.664 0-32 14.336-32 32s14.336 32 32 32h498.752l-137.408 137.344c-12.48 12.48-12.48 32.768 0 45.248s32.768 12.48 45.248 0l192-192c2.944-2.944 5.312-6.464 6.912-10.368 1.664-3.904 2.496-8.064 2.496-12.224v0z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 