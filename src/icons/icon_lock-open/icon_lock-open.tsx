import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_lock-open.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_lock-open'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M896 576h-580.928v59.072c0 108.608 88.32 196.928 196.928 196.928 71.552 0 133.824-38.656 168.256-95.936 0.32 0.384 0.896 0.576 1.28 0.96 11.584-16.512 29.824-28.032 51.52-28.032 35.328 0 64 28.672 64 64 0 8.64-1.792 16.896-4.928 24.448-0.256 0.448-0.448 0.96-0.704 1.408-2.816 6.4-6.848 12.032-11.52 17.088-58.24 86.464-155.776 144.064-267.904 144.064-179.456 0-324.928-145.472-324.928-324.928v-59.072h-59.072c-35.328 0-64-28.672-64-64v-512c0-35.328 28.672-64 64-64h768c35.328 0 64 28.672 64 64v512c0 35.328-28.672 64-64 64zM512 128c-70.72 0-128 57.28-128 128s57.28 128 128 128 128-57.28 128-128-57.28-128-128-128z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 