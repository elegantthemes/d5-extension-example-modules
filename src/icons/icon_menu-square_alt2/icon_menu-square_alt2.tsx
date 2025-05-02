import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_menu-square_alt2.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_menu-square_alt2'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M960 896h-832c-35.328 0-64-28.672-64-64v-832c0-35.328 28.672-64 64-64h832c35.328 0 64 28.672 64 64v832c0 35.328-28.672 64-64 64zM960 0h-832v832h832v-832zM288 384h512c17.664 0 32 14.336 32 32s-14.336 32-32 32h-512c-17.664 0-32-14.336-32-32s14.336-32 32-32zM288 576h512c17.664 0 32 14.336 32 32s-14.336 32-32 32h-512c-17.664 0-32-14.336-32-32s14.336-32 32-32zM288 192h512c17.664 0 32 14.336 32 32s-14.336 32-32 32h-512c-17.664 0-32-14.336-32-32s14.336-32 32-32z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 