import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './drawer.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/drawer'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M896 832c-17.984 40-50.624 64-86.016 64h-601.984c-35.328 0-64-24-80-64l-128-512v-289.024c0-17.664 14.336-32 32-32h960c17.664 0 32 14.336 32 32v285.056l-0.832 2.944-127.168 513.024zM188.48 810.688c2.944 6.592 10.432 21.312 19.52 21.312h601.984c8.768 0 18.88-9.024 25.984-22.784l112.704-458.048c0-0.128-0.192 0-0.192-0.128 0-17.664-14.336-32-32-32-0.064 0-0.064-0.064-0.128-0.064h-244.352c-17.664 0-32-14.336-32-32v-62.976c0-17.664-14.336-32-32-32-0.64 0-1.28-0.832-1.92-1.024h-188.992c-0.448 0.192-0.448 1.024-1.088 1.024-17.664 0-32 14.336-32 32v62.976c0 17.664-14.336 32-32 32h-244.352c-0.064 0-0.064 0.064-0.128 0.064-17.664 0-32.512 14.336-32.512 32 0 0.448-0.512 0.128-0.64 0.448l114.112 459.2z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 