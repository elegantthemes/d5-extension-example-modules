import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './eye-slash.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/eye-slash'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M844.8 538.666l-150.4-99.2c0-3.2 0-9.6 0-12.8 0-102.4-83.2-182.4-182.4-182.4-32 0-60.8 6.4-86.4 22.4l-70.4-44.8c48-16 99.2-28.8 153.6-28.8 240 0 432 208 438.4 217.6 9.6 9.6 9.6 25.6 0 35.2 0 3.2-38.4 44.8-102.4 92.8zM1004.8 727.466l-12.8 16c-6.4 6.4-16 9.6-22.4 3.2l-224-147.2c-67.2 35.2-147.2 60.8-233.6 60.8-240 0-432-208-438.4-217.6-9.6-9.6-9.6-25.6 0-35.2 3.2-6.4 73.6-80 176-137.6l-204.8-131.2c-6.4-6.4-9.6-16-3.2-22.4l12.8-16c6.4-6.4 16-9.6 22.4-3.2l307.2 201.6 614.4 409.6c9.6 0 12.8 9.6 6.4 19.2zM611.2 509.866c0 3.2-3.2 3.2-3.2 6.4-35.2 35.2-89.6 44.8-131.2 25.6 6.4-9.6 12.8-22.4 12.8-35.2 0-32-25.6-57.6-57.6-57.6-9.6 0-19.2 3.2-28.8 6.4-6.4-25.6-3.2-54.4 9.6-80l-60.8-35.2c-12.8 25.6-22.4 54.4-22.4 86.4 0 102.4 83.2 182.4 182.4 182.4 57.6 0 108.8-28.8 144-70.4l-44.8-28.8z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 