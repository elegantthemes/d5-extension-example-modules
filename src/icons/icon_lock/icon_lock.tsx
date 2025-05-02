import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_lock.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_lock'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M512 960c-179.456 0-324.928-145.472-324.928-324.928v-59.072h-59.072c-35.328 0-64-28.672-64-64v-512c0-35.328 28.672-64 64-64h768c35.328 0 64 28.672 64 64v512c0 35.328-28.672 64-64 64h-59.072v59.072c0 179.456-145.472 324.928-324.928 324.928zM315.072 635.072c0 108.608 88.32 196.928 196.928 196.928s196.928-88.32 196.928-196.928v-59.072h-393.856v59.072zM512 128c-70.72 0-128 57.28-128 128s57.28 128 128 128 128-57.28 128-128c0-70.72-57.28-128-128-128z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 