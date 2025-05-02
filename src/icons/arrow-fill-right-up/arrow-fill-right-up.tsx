import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './arrow-fill-right-up.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/arrow-fill-right-up'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M204.608 755.392c-187.456-187.456-187.456-491.392 0-678.848s491.392-187.456 678.848 0c187.456 187.456 187.456 491.392 0 678.848-187.52 187.456-491.392 187.456-678.848 0zM768 608v-271.552c0-17.664-14.336-32-32-32s-32 14.336-32 32v194.304l-352.64-352.64c-12.48-12.48-32.768-12.48-45.248 0s-12.48 32.768 0 45.248l352.64 352.64h-194.304c-17.664 0-32 14.336-32 32s14.336 32 32 32h271.552c4.16 0 8.32-0.832 12.224-2.496 7.808-3.264 14.080-9.472 17.28-17.28 1.664-3.904 2.496-8.064 2.496-12.224v0z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 