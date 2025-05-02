import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './triangle-fill-right.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/triangle-fill-right'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M544 896c-265.088 0-480-214.912-480-480s214.912-480 480-480 480 214.912 480 480-214.912 480-480 480zM757.568 396.8l-248.128-195.968c-13.888-10.88-36.416-10.88-50.304 0l0.128 0.128c-6.848 5.056-11.264 12.16-11.264 20.16v391.040c0 7.872 4.16 14.912 10.816 19.968 0.128 0.064 0.192 0.192 0.32 0.32 13.888 10.88 36.416 10.88 50.304 0l246.848-195.52c0.384-0.32 0.896-0.384 1.28-0.704 13.888-10.88 13.888-28.544 0-39.424z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 