import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './file-zip.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/file-zip'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M425.6 346.666c-28.8 0-48-22.4-48-51.2s22.4-51.2 48-51.2c28.8 0 48 22.4 48 51.2s-22.4 51.2-48 51.2zM838.4 701.866c0 6.4-3.2 22.4-9.6 28.8l-115.2 115.2c-6.4 6.4-12.8 9.6-19.2 9.6h-19.2v-163.2h163.2v9.6zM835.2 36.266v595.2h-163.2c-38.4 0-57.6 16-57.6 57.6v166.4h-390.4c-35.2 0-35.2 0-35.2-41.6v-777.6c0-41.6 0-41.6 41.6-41.6h563.2c44.8 3.2 41.6 3.2 41.6 41.6zM419.2 641.066v38.4h54.4v-38.4h-54.4zM473.6 573.866v-38.4h-54.4v38.4h54.4zM419.2 749.866v38.4h54.4v-38.4c0 0-54.4 0-54.4 0zM364.8 842.666h54.4v-38.4h-54.4v38.4zM364.8 733.866h54.4v-38.4h-54.4v38.4zM364.8 628.266h54.4v-38.4h-54.4v38.4zM364.8 519.466h54.4v-38.4h-54.4v38.4zM425.6 205.866c-60.8 0-83.2 44.8-83.2 86.4 0 38.4 35.2 169.6 35.2 169.6h96c0 0 35.2-131.2 35.2-169.6s-22.4-86.4-83.2-86.4z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 