import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_upload.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_upload'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M192 640h192v-384h256l-1.344 384h193.344l-320 320zM768 128h-512v128h-128v-256h768v256h-128z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 