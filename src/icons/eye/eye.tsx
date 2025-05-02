import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './eye.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/eye'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M950.4 442.666c-6.4 9.6-198.4 217.6-438.4 217.6s-432-208-438.4-217.6c-9.6-9.6-9.6-25.6 0-35.2 6.4-9.6 198.4-217.6 438.4-217.6s432 208 438.4 217.6c9.6 12.8 9.6 25.6 0 35.2zM512 244.266c-102.4 0-182.4 83.2-182.4 182.4 0 102.4 83.2 182.4 182.4 182.4 102.4 0 182.4-83.2 182.4-182.4 0-102.4-80-182.4-182.4-182.4zM512 535.466c-16 0-35.2-3.2-48-12.8 16-12.8 25.6-32 25.6-51.2 0-41.6-41.6-73.6-83.2-60.8 9.6-51.2 51.2-89.6 105.6-89.6 57.6 0 105.6 48 105.6 105.6s-48 108.8-105.6 108.8z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 