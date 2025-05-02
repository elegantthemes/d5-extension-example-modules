import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './caret-down.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/caret-down'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M729.024 518.4l-185.024-185.024-185.024 185.024c-12.48 12.48-32.768 12.48-45.248 0s-12.48-32.768 0-45.248l207.552-207.552c6.272-6.272 14.528-9.408 22.72-9.344 8.256 0 16.448 3.072 22.72 9.344l207.552 207.552c12.48 12.48 12.48 32.768 0 45.248s-32.768 12.48-45.248 0z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 