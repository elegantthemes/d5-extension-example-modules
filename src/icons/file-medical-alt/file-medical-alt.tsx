import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './file-medical-alt.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/file-medical-alt'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M828.8 730.666l-115.2 115.2c-6.4 6.4-12.8 9.6-19.2 9.6h-19.2v-163.2h163.2v9.6c0 9.6-3.2 25.6-9.6 28.8zM835.2 625.066h-163.2c-38.4 0-64 22.4-64 64v166.4h-384c-35.2 0-35.2 0-35.2-41.6v-396.8h-86.4c-12.8 0-25.6-12.8-25.6-25.6 0-16 12.8-25.6 25.6-25.6h240l51.2 121.6c3.2 9.6 16 16 25.6 16 12.8 0 19.2-9.6 22.4-19.2l38.4-163.2 51.2 83.2c3.2 6.4 12.8 12.8 22.4 12.8h150.4c16 0 25.6-12.8 25.6-25.6 0-16-12.8-25.6-25.6-25.6h-137.6l-73.6-124.8c-3.2-6.4-12.8-12.8-22.4-12.8 0 0-3.2 0-3.2 0-9.6 3.2-19.2 9.6-22.4 19.2l-35.2 147.2-28.8-64c-3.2-9.6-12.8-16-22.4-16h-169.6v-275.2c0-41.6 0-41.6 41.6-41.6h563.2c44.8 0 41.6 0 41.6 41.6v585.6z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 