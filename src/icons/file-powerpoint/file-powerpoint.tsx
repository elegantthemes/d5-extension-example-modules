import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './file-powerpoint.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/file-powerpoint'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M828.8 730.666l-115.2 115.2c-6.4 6.4-12.8 9.6-19.2 9.6h-19.2v-163.2h163.2v9.6c0 9.6-3.2 25.6-9.6 28.8zM524.8 461.866h-80v-134.4h80c22.4 0 41.6 6.4 54.4 16s19.2 25.6 19.2 48c0 22.4-6.4 38.4-19.2 51.2-16 12.8-32 19.2-54.4 19.2zM835.2 625.066h-163.2c-38.4 0-64 22.4-64 64v166.4h-384c-35.2 0-35.2 0-35.2-41.6v-777.6c0-41.6 0-41.6 41.6-41.6h563.2c44.8 0 41.6 0 41.6 41.6v588.8zM640 292.266c-28.8-25.6-67.2-35.2-118.4-35.2h-76.8v-150.4h-89.6v428.8h166.4c32 0 60.8-6.4 86.4-19.2s44.8-28.8 57.6-51.2 19.2-48 19.2-73.6c-3.2-41.6-16-73.6-44.8-99.2z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 