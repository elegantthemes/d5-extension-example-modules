import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_menu.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_menu'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M224 448h576c17.664 0 32 14.336 32 32s-14.336 32-32 32h-576c-17.664 0-32-14.336-32-32s14.336-32 32-32zM224 640h576c17.664 0 32 14.336 32 32s-14.336 32-32 32h-576c-17.664 0-32-14.336-32-32s14.336-32 32-32zM224 256h576c17.664 0 32 14.336 32 32s-14.336 32-32 32h-576c-17.664 0-32-14.336-32-32s14.336-32 32-32z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 