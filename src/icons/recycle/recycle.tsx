import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './recycle.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/recycle'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M44.8 586.666l57.6-44.8-54.4-105.6c-28.8-48 19.2-96 51.2-115.2 28.8-16 76.8-19.2 118.4-19.2l76.8 128 57.6-32-102.4 188.8h-204.8zM54.4 327.466l128-233.6c25.6-32 73.6-41.6 124.8-38.4h134.4v220.8l-252.8 3.2c-44.8-6.4-96 3.2-134.4 48zM851.2 759.466l-70.4-28.8-67.2 99.2c-28.8 48-96 28.8-124.8 9.6s-54.4-57.6-73.6-96l73.6-131.2-57.6-35.2 217.6-3.2 102.4 185.6zM620.8 877.866l-268.8 3.2c-38.4-6.4-70.4-44.8-92.8-89.6l-64-118.4 195.2-108.8 121.6 224c19.2 35.2 51.2 76.8 108.8 89.6zM630.4-27.734l6.4 73.6 118.4 9.6c57.6 3.2 70.4 67.2 70.4 102.4-3.2 35.2-25.6 73.6-48 112h-150.4l-3.2 67.2-105.6-188.8 112-176zM848 119.466l131.2 230.4c12.8 38.4-6.4 83.2-32 124.8l-70.4 112-188.8-118.4 134.4-217.6c22.4-28.8 41.6-76.8 25.6-131.2z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 