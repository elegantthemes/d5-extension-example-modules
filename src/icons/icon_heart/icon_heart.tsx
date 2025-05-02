import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_heart.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_heart'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M1023.488 581.312c-2.688 157.056-130.112 297.024-287.488 297.024-91.008 0-171.2-47.616-224-117.504-52.8 69.888-132.992 117.504-224 117.504-157.376 0-284.8-139.968-287.488-297.024h-0.512c0-0.96 0.192-1.856 0.192-2.816 0-0.704-0.192-1.408-0.192-2.176 0-4.416 1.088-7.744 1.28-11.968 14.080-400.256 506.688-564.352 506.688-564.352s499.84 163.904 514.624 563.712c0.256 4.48 1.408 8 1.408 12.608 0 0.768-0.192 1.472-0.192 2.176 0 1.024 0.192 1.856 0.192 2.816h-0.512z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 