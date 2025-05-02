import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './caret-line-right.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/caret-line-right'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M694.4 438.72l-207.552 207.552c-12.48 12.48-32.768 12.48-45.248 0s-12.48-32.768 0-45.248l185.024-185.024-185.024-185.024c-12.48-12.48-12.48-32.768 0-45.248s32.768-12.48 45.248 0l207.552 207.552c6.272 6.272 9.408 14.528 9.344 22.72 0 8.256-3.072 16.448-9.344 22.72zM546.304 891.392c-263.808 0-477.696-213.888-477.696-477.696s213.888-477.696 477.696-477.696 477.696 213.888 477.696 477.696-213.888 477.696-477.696 477.696zM546.304 0c-228.096 0-413.696 185.6-413.696 413.696s185.6 413.696 413.696 413.696 413.696-185.6 413.696-413.696-185.6-413.696-413.696-413.696z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 