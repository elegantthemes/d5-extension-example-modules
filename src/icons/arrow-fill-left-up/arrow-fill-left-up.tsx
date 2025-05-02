import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './arrow-fill-left-up.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/arrow-fill-left-up'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M204.608 755.392c-187.456-187.456-187.456-491.392 0-678.848s491.392-187.456 678.848 0c187.456 187.456 187.456 491.392 0 678.848-187.52 187.456-491.392 187.456-678.848 0zM781.952 178.048c-12.48-12.48-32.768-12.48-45.248 0l-352.704 352.704v-194.304c0-17.664-14.336-32-32-32s-32 14.336-32 32v271.552c0 4.16 0.832 8.32 2.496 12.224 1.536 3.776 3.84 7.168 6.656 10.048 0.128 0.128 0.128 0.256 0.256 0.384 0.064 0.064 0.128 0.064 0.192 0.128 2.88 2.816 6.336 5.184 10.112 6.72 3.968 1.664 8.128 2.496 12.288 2.496h271.552c17.664 0 32-14.336 32-32s-14.336-32-32-32h-194.304l352.64-352.64c12.544-12.544 12.544-32.768 0.064-45.312z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 