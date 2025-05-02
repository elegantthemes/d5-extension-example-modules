import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './pencil.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/pencil'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M910.124 49.876l-59.256 178.844-478.408 478.408-119.588-119.588 478.408-478.408zM173.14 667.272l119.588 119.588-59.2 59.2c-33.038 33.038-86.55 33.038-119.588 0-33.038-32.98-33.038-86.606 0-119.588l59.2-59.2z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 