import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './carousel-prev.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/carousel-prev'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M991.992 927.992h-491.992l-467.992-479.992 467.992-479.992h491.992l-461.992 479.992 461.992 479.992z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 