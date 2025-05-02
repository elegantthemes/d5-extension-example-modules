import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './facebook.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/facebook'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M596.246 416.41h136.894l21.060 157.956h-157.956v101.796c0 42.12 14.040 80.734 80.736 80.734h87.754v140.406c-14.040 0-66.694 7.020-122.856 7.020-122.856 0-210.61-73.716-210.61-217.63v-122.856h-136.894v-157.956h136.894v-407.176h164.976v417.704z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 