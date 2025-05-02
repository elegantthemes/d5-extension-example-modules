import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './filter.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/filter'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M601.6 960c-275.2 12.8-544-44.8-595.2-134.4-6.4-19.2-6.4-44.8 0-64l364.8-454.4c12.8-19.2 25.6-44.8 25.6-70.4v-281.6c0-12.8 12.8-25.6 25.6-25.6 6.4 0 12.8 0 12.8 6.4l166.4 115.2c12.8 12.8 25.6 25.6 25.6 44.8v147.2c0 25.6 6.4 51.2 25.6 70.4l364.8 454.4c51.2 83.2-134.4 172.8-416 192zM512 691.2c-268.8 0-435.2 64-435.2 108.8s166.4 108.8 435.2 108.8c268.8 0 435.2-64 435.2-108.8s-166.4-108.8-435.2-108.8z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 