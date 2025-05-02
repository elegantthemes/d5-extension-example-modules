import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './file-prescription.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/file-prescription'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M825.6 730.666l-115.2 115.2c-6.4 6.4-12.8 9.6-19.2 9.6h-19.2v-163.2h163.2v9.6c0 9.6-3.2 25.6-9.6 28.8zM499.2 535.466c-9.6 9.6-25.6 16-44.8 16h-60.8v-112h60.8c19.2 0 35.2 6.4 44.8 16s16 22.4 16 41.6c0 16-6.4 28.8-16 38.4zM832 625.066h-163.2c-38.4 0-64 22.4-64 64v166.4h-384c-35.2 0-35.2 0-35.2-41.6v-777.6c0-41.6 0-41.6 41.6-41.6h563.2c44.8 0 41.6 0 41.6 41.6v588.8zM627.2 93.866l-73.6 124.8-73.6-124.8h-64l105.6 169.6-76.8 124.8h-51.2v-131.2h-57.6v342.4h118.4c38.4 0 70.4-9.6 89.6-25.6s32-41.6 32-76.8c0-22.4-6.4-41.6-16-57.6s-25.6-25.6-44.8-35.2l-9.6-3.2 54.4-92.8 70.4 121.6h67.2l-102.4-166.4 105.6-169.6h-73.6z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 