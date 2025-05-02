import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_cone.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_cone'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M694.272 576l-121.984 341.504c-9.088 25.472-33.216 42.496-60.288 42.496s-51.2-17.024-60.288-42.496l-121.984-341.504h364.544zM854.272 128l-91.456 256h-501.632l-91.456-256zM64 64c-35.328 0-64-28.672-64-64s28.672-64 64-64h896c35.328 0 64 28.672 64 64s-28.672 64-64 64h-896z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 