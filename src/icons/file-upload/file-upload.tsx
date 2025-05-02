import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './file-upload.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/file-upload'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M828.8 730.666l-115.2 115.2c-6.4 6.4-12.8 9.6-19.2 9.6h-22.4v-163.2h163.2v9.6c0 9.6-3.2 25.6-6.4 28.8zM832 625.066h-163.2c-38.4 0-64 22.4-64 64v166.4h-384c-35.2 0-35.2 0-35.2-41.6v-777.6c0-41.6 0-41.6 41.6-41.6h563.2c44.8 0 41.6 0 41.6 41.6v588.8zM656 375.466l-19.2-19.2c-9.6-6.4-19.2-6.4-28.8 3.2l-64 67.2c0 0 0-192 0-204.8 0-16-12.8-28.8-32-28.8s-32 16-32 28.8c0 12.8 0 204.8 0 204.8l-64-67.2c-9.6-12.8-22.4-9.6-28.8-3.2l-19.2 19.2c-6.4 6.4-3.2 22.4 3.2 28.8l108.8 115.2c6.4 6.4 16 16 32 16s25.6-9.6 32-16l108.8-115.2c9.6-6.4 12.8-19.2 3.2-28.8z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 