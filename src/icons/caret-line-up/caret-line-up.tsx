import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './caret-line-up.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/caret-line-up'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M568.72 564.4c-6.272 6.272-14.464 9.344-22.72 9.344s-16.448-3.072-22.72-9.344l-207.552-207.552c-12.48-12.48-12.48-32.768 0-45.248s32.768-12.48 45.248 0l185.024 185.024 185.024-185.024c12.48-12.48 32.768-12.48 45.248 0s12.48 32.768 0 45.248l-207.552 207.552zM548.112 889.712c-263.936 0-477.888-213.952-477.888-477.888s214.016-477.824 477.888-477.824 477.888 213.952 477.888 477.888-213.952 477.824-477.888 477.824zM548.112-2c-228.224 0-413.888 185.664-413.888 413.888s185.664 413.888 413.888 413.888 413.888-185.728 413.888-413.888-185.664-413.888-413.888-413.888z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 