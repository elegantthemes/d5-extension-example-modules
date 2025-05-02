import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './carousel-pause.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/carousel-pause'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M255 782.1h192v-666.1h-192v666.1zM575 782.1h192v-666.1h-192v666.1z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 