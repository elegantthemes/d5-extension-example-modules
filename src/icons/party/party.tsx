import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './party.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/party'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M269.8 563.467l14.2-51.6c12.2-1 24.6-1.8 36.8-2.4l-13.4 49 114.4 33.2 31.8-81c12.2 0.8 24.2 1.8 36.4 3l-37.4 95.6c26 8.8 51.8 18.4 77.2 29 1.6 0.6 3.4 1.4 5 2.2l53.2-112.6c11.8 2.2 23.6 4.6 35.2 7.2l-56 118.6 108.2 51.8 68.4-136.4c11.2 3.8 22.2 7.8 33.2 12l-73.6 147c32.8 20.4 64.4 42.4 94.8 66l-21.4 27.6c-79.4-61.2-167-112-260.4-150.8-115.8-48.2-237.4-77-361.4-85.8l2.4-34.8c37.6 2.4 75.2 7 112.4 13.2zM893.6 512.867c17.2 8 34.4 16.4 51.2 25.2l-24.2 46.4c-161.4-84.4-343.6-128.8-526.8-128.8-124.6 0-247 20-363.8 59.4l-16.8-49.6c35-11.8 70.6-22 106.4-30.4l-38.2-282.4 125 82.8 98.4-113 38.2 282c16.8-0.8 33.8-1 50.8-1 3.4 0 6.6 0 10 0l27.2-287 103 109 121.6-87.6-27.6 288.6c17.8 3.6 35.4 7.4 52.8 11.8l92.4-272.8 75.2 129.6 138.4-57.4-93.2 275.2z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 