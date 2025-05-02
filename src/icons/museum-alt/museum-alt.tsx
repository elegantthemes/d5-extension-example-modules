import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './museum-alt.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/museum-alt'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M608.8 904.867c-223 0-403.8-43.8-403.8-98 0-9.4 5.6-18.6 15.8-27.2 21.8 14.4 54.8 27 98.8 37.8 8.2 2 16.6 3.8 25.2 5.6 61.4 24.6 173 41.2 300.6 41.2 50.2 0 98.2-2.6 141.4-7.2v37.8c-53.8 6.4-114 10-178 10zM217.6 708.467c21.6 15.4 55.8 28.8 102 40 18.8 4.6 39.2 8.6 60.8 12.2 64.4 18 159.2 29.4 265 29.4 50.2 0 98.2-2.6 141.4-7.2v37.8c-53.6 6.4-114 10-177.8 10-223 0-403.8-44-403.8-98 0-8.4 4.2-16.6 12.4-24.2zM275.4 608.467v-672.2c21.2 31.2 45.4 63.6 72.4 96v648.8c22 8.6 50.2 16.2 83 22.2v-579.6c2.6 2.8 5.4 5.4 8.2 8.2 21.4 21.4 42.8 41.6 64.4 60.6v521.2c26.2 2.8 54 4.8 83 6v-459c24.6 18.6 48.8 35.4 72.4 50.4v409.8c18.8-0.2 37.4-0.8 55.4-1.6v-375.8c25.6 13.6 49.8 24.4 72.4 32.2v375.8c-53.6 6.4-114 10-177.8 10-223 0-403.8-43.8-403.8-98 0.2-20.2 26.2-39.4 70.4-55z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 