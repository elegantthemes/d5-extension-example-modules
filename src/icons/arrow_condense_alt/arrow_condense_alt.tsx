import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './arrow_condense_alt.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/arrow_condense_alt'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M960 960h-896c-35.328 0-64-28.672-64-64v-896c0-35.328 28.672-64 64-64h896c35.328 0 64 28.672 64 64v896c0 35.328-28.672 64-64 64zM448 352v-256c0-17.664-14.336-32-32-32s-32 14.336-32 32v178.752l-201.344-201.344c-12.48-12.48-32.768-12.48-45.248 0s-12.48 32.768 0 45.248l201.344 201.344h-178.752c-17.664 0-32 14.336-32 32s14.336 32 32 32h256c4.16 0 8.32-0.832 12.224-2.496 7.808-3.264 14.080-9.472 17.28-17.28 1.664-3.904 2.496-8.064 2.496-12.224v0zM864 576c17.664 0 32-14.336 32-32s-14.336-32-32-32h-256c-4.16 0-8.32 0.832-12.224 2.496-3.84 1.536-7.232 3.84-10.176 6.72-0.064 0.064-0.128 0.064-0.256 0.128-0.064 0.128-0.128 0.256-0.192 0.384-2.816 2.88-5.12 6.272-6.656 10.048-1.6 3.904-2.496 8-2.496 12.096 0 0.064 0 0.064 0 0.128v256c0 17.664 14.336 32 32 32s32-14.336 32-32v-178.752l201.344 201.344c12.48 12.48 32.768 12.48 45.248 0s12.48-32.768 0-45.248l-201.344-201.344h178.752z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 