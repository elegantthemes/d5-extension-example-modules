import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_star-half.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_star-half'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M512 100.864v800.256l-156.8-317.696-350.592-50.944 253.696-247.296-59.904-349.184z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 