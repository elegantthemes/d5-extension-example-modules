import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './caret-fill-right.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/caret-fill-right'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M544 896c-265.088 0-480-214.912-480-480s214.912-480 480-480 480 214.912 480 480-214.912 480-480 480zM694.4 393.28l-207.552-207.552c-12.48-12.48-32.768-12.48-45.248 0s-12.48 32.768 0 45.248l185.024 185.024-185.024 185.024c-12.48 12.48-12.48 32.768 0 45.248s32.768 12.48 45.248 0l207.552-207.552c6.272-6.272 9.408-14.528 9.344-22.72 0-8.256-3.072-16.448-9.344-22.72z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 