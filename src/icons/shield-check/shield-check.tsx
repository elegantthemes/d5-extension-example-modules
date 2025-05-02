import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './shield-check.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/shield-check'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M921.6 714.666l-409.6 156.8-409.6-156.8-32-12.8 3.2-35.2c38.4-515.2 310.4-649.6 438.4-684.8 0 0 0 0 0 0s0 0 0 0c128 35.2 400 169.6 438.4 684.8l3.2 35.2-32 12.8zM512 29.866v0c0 0 0 0 0 0s0 0 0 0v0c-128 38.4-358.4 176-390.4 640l390.4 150.4 390.4-150.4c-32-464-262.4-601.6-390.4-640zM147.2 657.066c41.6-512 329.6-588.8 364.8-598.4 0 0 0 0 0 0s0 0 0 0c35.2 9.6 323.2 86.4 364.8 598.4l-364.8 137.6-364.8-137.6zM697.6 599.466c6.4 6.4 25.6 19.2 41.6 6.4 3.2-3.2 16-12.8 25.6-22.4s9.6-25.6 0-38.4-240-262.4-240-262.4c-12.8-12.8-32-22.4-41.6-22.4-16 0-28.8 6.4-38.4 16s-124.8 124.8-124.8 128c-12.8 12.8-9.6 25.6 0 38.4 3.2 3.2 25.6 25.6 32 28.8 12.8 9.6 25.6 6.4 35.2-3.2 3.2-3.2 96-96 96-96s208 220.8 214.4 227.2z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 