import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './house.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/house'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M512 939.206c-265.79 0-481.11-222.052-481.11-491.206s215.324-491.206 481.11-491.206 481.11 218.686 481.11 491.206-215.324 491.206-481.11 491.206zM794.612 168.754c0-26.914-20.188-47.1-47.1-47.1h-164.856v235.508h-141.306v-235.508h-168.22c-26.914 0-47.1 20.188-47.1 47.1v262.426l285.974 285.974 282.612-282.612v-265.79zM865.264 478.278c-6.73 0-10.092 3.366-16.822 6.73l-336.442 336.442-339.806-336.442c-3.366-3.366-10.092-6.73-16.822-6.73-13.456 0-23.552 10.092-23.552 23.552 0 6.73 3.366 13.456 6.73 16.822l356.628 353.264c3.366 3.366 10.092 6.73 16.822 6.73s13.456-3.366 16.822-6.73l353.264-353.264c3.366-3.366 6.73-10.092 6.73-16.822 0-13.456-10.092-23.552-23.552-23.552z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 