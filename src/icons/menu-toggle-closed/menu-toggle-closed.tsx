import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './menu-toggle-closed.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/menu-toggle-closed'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M307.998 39.994v816.010l476.004-408.006-476.004-408.006z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 