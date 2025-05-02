import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './filter-solid.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/filter-solid'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M803.2 717.866h-569.6c-48 0-54.4-41.6-28.8-70.4l240-275.2v-240c0-9.6 6.4-19.2 12.8-25.6l83.2-54.4c19.2-12.8 48 0 48 25.6v291.2l236.8 281.6c19.2 19.2 12.8 67.2-22.4 67.2z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 