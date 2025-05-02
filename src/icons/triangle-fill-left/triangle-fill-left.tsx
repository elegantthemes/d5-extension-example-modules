import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './triangle-fill-left.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/triangle-fill-left'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M544 896c-265.088 0-480-214.912-480-480s214.912-480 480-480 480 214.912 480 480-214.912 480-480 480zM640 221.12c0-7.872-4.16-14.912-10.816-19.968-0.128-0.128-0.128-0.256-0.256-0.32-13.888-10.88-36.416-10.88-50.304 0l-246.912 195.456c-0.384 0.32-0.896 0.384-1.28 0.704-13.888 10.88-13.888 28.608 0 39.488l248.128 195.968c13.888 10.88 36.416 10.88 50.304 0l-0.128-0.128c6.848-5.056 11.264-12.16 11.264-20.16v-391.040z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 