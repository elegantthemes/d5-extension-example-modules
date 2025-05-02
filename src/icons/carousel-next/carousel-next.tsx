import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './carousel-next.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/carousel-next'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M494 448l-461.992-479.992h491.992l467.992 479.992-467.992 479.992h-491.992l461.992-479.992z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 