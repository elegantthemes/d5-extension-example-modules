import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './file-code.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/file-code'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M828.8 730.666l-115.2 115.2c-6.4 6.4-12.8 9.6-19.2 9.6h-19.2v-163.2h163.2v9.6c0 9.6-3.2 25.6-9.6 28.8zM835.2 625.066h-163.2c-38.4 0-64 22.4-64 64v166.4h-384c-35.2 0-35.2 0-35.2-41.6v-777.6c0-41.6 0-41.6 41.6-41.6h563.2c44.8 0 41.6 0 41.6 41.6v588.8zM406.4 263.466c9.6-9.6 6.4-19.2-3.2-28.8s-19.2-12.8-28.8-3.2l-86.4 86.4c-3.2 3.2-6.4 9.6-6.4 16s3.2 12.8 6.4 16l86.4 80c9.6 9.6 16 6.4 28.8-3.2 12.8-12.8 12.8-19.2 3.2-28.8l-70.4-64 70.4-70.4zM595.2 455.466l-128-275.2c-3.2-6.4-12.8-12.8-19.2-12.8-3.2 0-6.4 0-9.6 3.2-9.6 6.4-16 19.2-9.6 28.8l128 275.2c6.4 9.6 19.2 16 28.8 9.6s16-19.2 9.6-28.8zM739.2 317.866l-86.4-86.4c-9.6-9.6-16-9.6-28.8 3.2-9.6 9.6-12.8 16-3.2 28.8l70.4 70.4-70.4 64c-9.6 9.6-9.6 16 3.2 28.8s19.2 12.8 28.8 3.2l86.4-80c3.2-3.2 6.4-9.6 6.4-16s-3.2-12.8-6.4-16z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 