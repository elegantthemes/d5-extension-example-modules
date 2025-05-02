import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './caret-fill-up.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/caret-fill-up'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M544-64c265.088 0 480 214.912 480 480s-214.912 480-480 480-480-214.912-480-480 214.912-480 480-480zM313.728 358.848l207.552 207.552c6.272 6.272 14.464 9.344 22.72 9.344s16.448-3.072 22.72-9.344l207.552-207.552c12.48-12.48 12.48-32.768 0-45.248s-32.768-12.48-45.248 0l-185.024 185.024-185.024-185.024c-12.48-12.48-32.768-12.48-45.248 0s-12.48 32.768 0 45.248z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 