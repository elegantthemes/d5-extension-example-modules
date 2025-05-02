import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './puzzle-piece.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/puzzle-piece'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M748.8 509.866c-41.6-41.6-102.4-35.2-144 6.4s-44.8 102.4-6.4 144c48 48 80 22.4 112 35.2 3.2 0 6.4 6.4 0 9.6l-156.8 156.8c-9.6 12.8-35.2 12.8-51.2 0l-166.4-166.4c-3.2-3.2-6.4 0-6.4 0-16 35.2 12.8 64-35.2 112-38.4 41.6-99.2 35.2-140.8-3.2-41.6-41.6-44.8-102.4-6.4-144 48-48 76.8-19.2 112-35.2 3.2 0 6.4-3.2 0-6.4l-150.4-150.4c-12.8-16-12.8-41.6 3.2-57.6l156.8-156.8c3.2-3.2 0-6.4 0-6.4-32-16-64 12.8-112-35.2-41.6-41.6-35.2-102.4 3.2-144 41.6-41.6 102.4-44.8 144-6.4 48 48 19.2 80 35.2 112 0 0 3.2 6.4 3.2 3.2l160-160c16-16 41.6-16 57.6 0l393.6 393.6c16 16 16 41.6 0 57.6l-160 160c-3.2 3.2-6.4 0-9.6-3.2-16-35.2 12.8-67.2-35.2-115.2z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 