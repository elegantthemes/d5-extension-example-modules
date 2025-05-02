import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './arrow-next.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/arrow-next'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M729.6 448l-390.4 390.4c-25.6 25.6-25.6 70.4 0 102.4 25.6 25.6 70.4 25.6 102.4 0l441.6-441.6c12.8-12.8 19.2-32 19.2-51.2s-6.4-38.4-19.2-51.2l-441.6-441.6c-25.6-25.6-70.4-25.6-102.4 0-25.6 25.6-25.6 70.4 0 102.4l390.4 390.4z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 