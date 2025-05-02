import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_target.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_target'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M512 960c-282.752 0-512-229.248-512-512s229.248-512 512-512 512 229.248 512 512-229.248 512-512 512zM512 0c-247.040 0-448 200.96-448 448s200.96 448 448 448 448-200.96 448-448-200.96-448-448-448zM512 768c-176.704 0-320-143.296-320-320s143.296-320 320-320 320 143.296 320 320-143.296 320-320 320zM512 256c-105.856 0-192 86.144-192 192s86.144 192 192 192 192-86.144 192-192c0-105.856-86.144-192-192-192zM448 448c0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64s-64-28.654-64-64z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 