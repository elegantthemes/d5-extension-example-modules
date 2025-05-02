import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './file-word.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/file-word'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M825.6 730.666l-115.2 115.2c-6.4 6.4-12.8 9.6-19.2 9.6h-19.2v-163.2h163.2v9.6c0 9.6-3.2 25.6-9.6 28.8zM832 625.066h-163.2c-38.4 0-64 22.4-64 64v166.4h-384c-35.2 0-35.2 0-35.2-41.6v-777.6c0-41.6 0-41.6 41.6-41.6h563.2c44.8 0 41.6 0 41.6 41.6v588.8zM672 109.866h-89.6l-70.4 284.8-70.4-288h-89.6l-96 428.8h89.6l57.6-304 70.4 304h73.6l70.4-304 57.6 304h89.6l-92.8-425.6z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 