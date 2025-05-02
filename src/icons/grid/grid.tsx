import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './grid.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/grid'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M178.664 514.668h200.002c36.8 0 66.668 29.866 66.668 66.668v200.002c0 36.8-29.866 66.668-66.668 66.668h-200.002c-36.8 0-66.668-29.866-66.668-66.668v-200.002c0-36.8 29.866-66.668 66.668-66.668zM645.334 514.668h200.002c36.8 0 66.668 29.866 66.668 66.668v200.002c0 36.8-29.866 66.668-66.668 66.668h-200.002c-36.8 0-66.668-29.866-66.668-66.668v-200.002c0-36.8 29.866-66.668 66.668-66.668zM111.996 114.664c0-36.8 29.866-66.668 66.668-66.668h200.002c36.8 0 66.668 29.866 66.668 66.668v200.002c0 36.8-29.866 66.668-66.668 66.668h-200.002c-36.8 0-66.668-29.866-66.668-66.668v-200.002zM578.668 114.664c0-36.8 29.866-66.668 66.668-66.668h200.002c36.8 0 66.668 29.866 66.668 66.668v200.002c0 36.8-29.866 66.668-66.668 66.668h-200.002c-36.8 0-66.668-29.866-66.668-66.668v-200.002z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 