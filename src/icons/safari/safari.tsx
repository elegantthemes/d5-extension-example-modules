import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './safari.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/safari'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M512 917.334c-270.578 0-490.667-220.089-490.667-490.667s220.089-490.667 490.667-490.667 490.667 220.089 490.667 490.667-220.089 490.667-490.667 490.667zM579.556 378.667l-19.556-17.778-354.844-241.067 240.711 354.844 19.556 17.778 353.067 240.711-238.933-354.489z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 