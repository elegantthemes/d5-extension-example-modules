import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './arrow-prev.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/arrow-prev'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M300.8 448l390.4 390.4c25.6 25.6 25.6 70.4 0 102.4-25.6 25.6-70.4 25.6-102.4 0l-441.6-441.6c-12.8-12.8-19.2-32-19.2-51.2s6.4-38.4 19.2-51.2l441.6-441.6c25.6-25.6 70.4-25.6 102.4 0 25.6 25.6 25.6 70.4 0 102.4l-390.4 390.4z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 