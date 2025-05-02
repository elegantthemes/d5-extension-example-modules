import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './pipe.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/pipe'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M512-64c-12.8 0-25.6 12.8-25.6 25.6v934.4c0 12.8 12.8 25.6 25.6 25.6s25.6-12.8 25.6-25.6v-938.667c0-12.8-8.533-21.333-25.6-21.333z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 