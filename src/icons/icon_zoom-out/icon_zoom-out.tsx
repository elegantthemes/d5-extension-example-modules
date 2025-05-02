import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_zoom-out.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_zoom-out'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M608 960c-229.76 0-416-186.24-416-416 0-98.88 34.624-189.504 92.224-260.928l-271.168-271.168c-17.344-17.344-17.344-45.504 0-62.848s45.504-17.344 62.848 0l271.168 271.168c71.424-57.6 162.048-92.224 260.928-92.224 229.76 0 416 186.24 416 416s-186.24 416-416 416zM800 512h-384c-17.664 0-32 14.336-32 32s14.336 32 32 32h384c17.664 0 32-14.336 32-32s-14.336-32-32-32z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 