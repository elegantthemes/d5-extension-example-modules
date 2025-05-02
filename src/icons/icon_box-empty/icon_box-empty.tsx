import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_box-empty.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_box-empty'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M832 832h-640c-35.328 0-64-28.672-64-64v-640c0-35.328 28.672-64 64-64h640c35.328 0 64 28.672 64 64v640c0 35.328-28.672 64-64 64zM832 128h-640v640h640v-640z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 