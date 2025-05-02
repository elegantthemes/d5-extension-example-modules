import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './hand.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/hand'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M924.8 468.266c-6.4 9.6-19.2 16-32 16-25.6 0-57.6-9.6-80-25.6s-54.4-41.6-83.2-89.6c-6.4-9.6-12.8-16-22.4-16 0 3.2 0 3.2 0 6.4s0 9.6 0 16l28.8 371.2c0 35.2-28.8 60.8-60.8 60.8s-60.8-28.8-60.8-60.8l-28.8-268.8c0-3.2-3.2-6.4-6.4-6.4s-6.4 3.2-6.4 6.4v348.8c0 35.2-28.8 60.8-60.8 60.8s-67.2-25.6-67.2-60.8l3.2-342.4c0-12.8-6.4-12.8-9.6-12.8s-6.4 3.2-6.4 6.4l-16 307.2c0 28.8-25.6 54.4-54.4 54.4s-54.4-25.6-64-54.4l28.8-332.8c0-6.4-3.2-9.6-6.4-12.8-3.2 0-9.6 3.2-9.6 9.6l-38.4 198.4c0 28.8-25.6 54.4-54.4 54.4-32 0-54.4-25.6-54.4-54.4l35.2-428.8c16-217.6 147.2-246.4 275.2-246.4 105.6 0 201.6 51.2 249.6 137.6 6.4 9.6 22.4 35.2 41.6 67.2 48 76.8 89.6 140.8 96 150.4 12.8 25.6 28.8 44.8 41.6 57.6 12.8 9.6 22.4 25.6 28.8 38.4 0 6.4 3.2 28.8-6.4 44.8z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 