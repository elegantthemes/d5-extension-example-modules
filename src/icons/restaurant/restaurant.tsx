import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './restaurant.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/restaurant'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M889.8 662.267l-38.8 258.2c-1.6 10.6-10.6 18.2-21 18.2-0.2 0-0.4 0-0.8 0-10.8-0.4-19.6-8.8-20.6-19.6l-18.6-224c-1.2-13.8-25.6-13.8-26.8 0l-18.6 224c-1 11-10.2 19.6-21.2 19.6s-20.4-8.4-21.2-19.6l-18.6-224.2c-1.2-13.8-25.6-13.8-26.8 0l-19 224.2c-0.8 10.8-9.8 19.2-20.6 19.6-0.2 0-0.4 0-0.6 0-10.6 0-19.6-7.6-21-18.2l-38.6-258.2c-11.4-75.6 29.6-174.8 98.8-205l-33-434.8c-2-27.8 7.8-55.4 26.8-75.8s45.8-32 73.6-32h0.2c27.8 0 54.8 11.6 73.8 32s28.8 48 26.8 75.8l-33 434.8c69 30.2 110.2 129.4 98.8 205zM326 934.267c-68-14.6-139.2-64.6-139.2-272.8 0-149.8 77.6-234 76.2-256.2-5-75.8-47.4-88.6-51.2-167.6-1.8-37.6-16-210.2-16-210.2-3-28.8 6.6-57.4 25.8-78.8 19.4-21.4 47.2-33.6 76-33.6 56.4 0 102.4 46 102.4 102.4v847.8c0.2 7 0 84.8-74 69z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 