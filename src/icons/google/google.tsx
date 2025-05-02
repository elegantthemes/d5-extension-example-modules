import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './google.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/google'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M527.583 517.491h477.050c65.113-324.563-177.308-632.877-515.784-602.824-225.725 12.577-420.619 181.537-467.367 411.826-91.27 460.355 443.77 792.264 815.193 505.099 8.459-6.344 16.362-13.468 23.263-19.144l-148.591-148.703c-50.238 40.635-114.905 65.233-185.318 65.233-16.428 0-32.543-1.339-48.242-3.914l1.713 0.232c-65.402-9.435-122.575-39.21-166.19-82.6l0.012 0.012c-210.031-209.475-33.391-562.755 267.13-516.897 113.308 14.358 198.678 89.377 218.602 194.337h-271.471z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 