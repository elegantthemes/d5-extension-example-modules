import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_clipboard.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_clipboard'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M832 896h-192c0 35.328-28.672 64-64 64h-128c-35.328 0-64-28.672-64-64h-192c-35.328 0-64-28.672-64-64v-832c0-35.328 28.672-64 64-64h640c35.328 0 64 28.672 64 64v832c0 35.328-28.672 64-64 64zM832 64h-640v768h128c0-35.328 28.672-64 64-64h256c35.328 0 64 28.672 64 64h128v-768zM256 608c0-17.664 14.336-32 32-32h448c17.664 0 32 14.336 32 32s-14.336 32-32 32h-448c-17.664 0-32-14.336-32-32zM736 448h-448c-17.664 0-32-14.336-32-32s14.336-32 32-32h448c17.664 0 32 14.336 32 32s-14.336 32-32 32zM736 256h-448c-17.664 0-32-14.336-32-32s14.336-32 32-32h448c17.664 0 32 14.336 32 32s-14.336 32-32 32z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 