import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './file-export.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/file-export'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M736 701.866c0 9.6-3.2 25.6-9.6 28.8l-115.2 115.2c-6.4 6.4-12.8 9.6-19.2 9.6h-19.2v-163.2h163.2v9.6zM425.6 362.666c0 16 9.6 32 28.8 32h278.4v230.4h-163.2c-38.4 0-64 22.4-64 64v169.6h-384c-35.2 0-35.2 0-35.2-41.6v-777.6c0-41.6 0-41.6 41.6-41.6h563.2c44.8 0 41.6 0 41.6 41.6v294.4h-278.4c-22.4 0-28.8 16-28.8 28.8zM969.6 397.866l-115.2 108.8c-6.4 6.4-22.4 9.6-28.8 3.2 0 0-19.2-19.2-19.2-19.2-6.4-6.4-9.6-19.2 3.2-28.8l67.2-64h-140.8v-64h140.8l-67.2-64c-9.6-9.6-9.6-19.2-3.2-28.8 0 0 19.2-19.2 19.2-19.2 9.6-9.6 22.4-6.4 28.8 3.2l115.2 108.8c6.4 6.4 16 16 16 32 3.2 16-6.4 25.6-16 32z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 