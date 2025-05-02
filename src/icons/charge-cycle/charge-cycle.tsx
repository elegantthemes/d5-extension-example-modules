import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './charge-cycle.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/charge-cycle'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M713.6 471.466c-57.6 0-99.2 0-156.8 0 0 0 96 144 144 211.2-67.2 0-172.8 0-236.8-3.2-3.2-6.4-137.6-304-144-313.6 51.2 0 99.2 0 147.2 0l-89.6-227.2c0 0 208 204.8 336 332.8zM905.6 170.666c-6.4 0-54.4-9.6-54.4-9.6 128 163.2 121.6 406.4-22.4 560-76.8 86.4-185.6 134.4-300.8 137.6-112 3.2-224-35.2-307.2-115.2-86.4-76.8-134.4-185.6-137.6-300.8s35.2-227.2 115.2-310.4c80-89.6 198.4-137.6 316.8-137.6h3.2c9.6 0 16 6.4 16 16s-6.4 16-16 16c-115.2-3.2-220.8 44.8-297.6 128-73.6 80-108.8 179.2-105.6 288 3.2 105.6 51.2 204.8 128 278.4 80 73.6 179.2 108.8 288 105.6 105.6-3.2 204.8-51.2 278.4-128 134.4-144 140.8-368 19.2-521.6 0 0 0 41.6 0 48s-6.4 19.2-19.2 16c-12.8 0-16-12.8-16-19.2s6.4-108.8 6.4-108.8 108.8 22.4 115.2 22.4c6.4 0 16 9.6 12.8 22.4-3.2 9.6-12.8 12.8-22.4 12.8z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 