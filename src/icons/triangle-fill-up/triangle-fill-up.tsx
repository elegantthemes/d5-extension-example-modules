import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './triangle-fill-up.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/triangle-fill-up'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M544 896c-265.088 0-480-214.912-480-480s214.912-480 480-480 480 214.912 480 480-214.912 480-480 480zM759.168 331.136l-0.128 0.128c-5.056-6.848-12.16-11.264-20.16-11.264h-391.040c-7.872 0-14.912 4.16-19.968 10.816-0.064 0.128-0.192 0.192-0.32 0.32-10.88 13.888-10.88 36.416 0 50.304l195.52 246.848c0.256 0.384 0.384 0.896 0.704 1.28 10.88 13.888 28.608 13.888 39.488 0l195.968-248.128c10.88-13.888 10.88-36.416-0.064-50.304z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 