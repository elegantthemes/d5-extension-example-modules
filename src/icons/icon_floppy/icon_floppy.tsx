import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_floppy.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_floppy'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M768 960h-704c-35.328 0-64-28.672-64-64v-896c0-35.328 28.672-64 64-64h896c35.328 0 64 28.672 64 64v768l-192 192h-64zM768 896v-256h-128v256h128zM576 896v-256h-320v256h320zM256 0v384h512v-384h-512zM960 0h-128v384c0 35.328-28.672 64-64 64h-512c-35.328 0-64-28.672-64-64v-384h-128v896h128v-256c0-35.328 28.672-64 64-64h512c35.328 0 64 28.672 64 64v229.504l128-128v-741.504z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 