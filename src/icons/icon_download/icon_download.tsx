import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_download.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_download'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M512 256l320 320h-192v384h-256l1.152-384h-193.152zM128 128v-128h768v256h-128v-128h-512v128h-128z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 