import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './caret-line-down.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/caret-line-down'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M729.024 518.4l-185.024-185.024-185.024 185.024c-12.48 12.48-32.768 12.48-45.248 0s-12.48-32.768 0-45.248l207.552-207.552c6.272-6.272 14.528-9.408 22.72-9.344 8.256 0 16.448 3.072 22.72 9.344l207.552 207.552c12.48 12.48 12.48 32.768 0 45.248s-32.768 12.48-45.248 0zM546.304 891.456c-263.808 0-477.696-213.888-477.696-477.696-0.064-263.872 213.824-477.76 477.696-477.76 263.808 0 477.696 213.888 477.696 477.696 0 263.872-213.888 477.76-477.696 477.76zM546.304 0c-228.096 0-413.696 185.6-413.696 413.696s185.6 413.696 413.696 413.696c228.096 0.064 413.696-185.536 413.696-413.696 0-228.096-185.6-413.696-413.696-413.696z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 