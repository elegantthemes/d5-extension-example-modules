import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_pause_alt2.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_pause_alt2'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M512-64c282.752 0 512 229.248 512 512s-229.248 512-512 512-512-229.248-512-512 229.248-512 512-512zM512 896c247.040 0 448-200.96 448-448s-200.96-448-448-448-448 200.96-448 448 200.96 448 448 448zM384 256c35.328 0 64 28.672 64 64v256c0 35.328-28.672 64-64 64s-64-28.672-64-64v-256c0-35.328 28.672-64 64-64zM640 256c35.328 0 64 28.672 64 64v256c0 35.328-28.672 64-64 64s-64-28.672-64-64v-256c0-35.328 28.672-64 64-64z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 