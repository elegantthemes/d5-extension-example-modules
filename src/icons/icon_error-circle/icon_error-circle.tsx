import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_error-circle.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_error-circle'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M512-64c282.752 0 512 229.248 512 512s-229.248 512-512 512-512-229.248-512-512 229.248-512 512-512zM576 384c0-35.328-28.672-64-64-64s-64 28.672-64 64v320c0 35.328 28.672 64 64 64s64-28.672 64-64v-320zM512 257.024c35.328 0 64-28.672 64-64s-28.672-64-64-64-64 28.672-64 64c0 35.328 28.672 64 64 64z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 