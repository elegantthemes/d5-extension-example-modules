import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './menu.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/menu'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M951.15 683.096c0-37.292-28.104-67.556-62.726-67.556h-752.846c-34.656 0-62.726 30.266-62.726 67.556v8.444c0 37.292 28.104 67.556 62.726 67.556h752.814c34.622 0 62.726-30.266 62.726-67.556v-8.444zM951.15 450.872c0-37.292-28.104-67.556-62.726-67.556h-752.846c-34.656 0-62.726 30.266-62.726 67.556v8.444c0 37.292 28.104 67.556 62.726 67.556h752.814c34.622 0 62.726-30.266 62.726-67.556v-8.444zM951.15 218.646c0-37.292-28.104-67.556-62.726-67.556h-752.846c-34.656 0-62.726 30.266-62.726 67.556v8.444c0 37.292 28.104 67.556 62.726 67.556h752.814c34.622 0 62.726-30.266 62.726-67.556v-8.444z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 