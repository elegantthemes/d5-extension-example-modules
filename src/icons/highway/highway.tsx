import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './highway.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/highway'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M59.6 496.267c0-184 102.4-442.8 456.4-539.4 354 96.6 456.4 355.2 456.4 539.4 0 32.6-3.2 63.4-8.4 92.6h-896c-5.2-29.2-8.4-60-8.4-92.6zM832 869.667c0 0-55.2-45.6-146.4-45.6s-169.6 80.6-169.6 80.6-78.2-80.6-169.6-80.6c-91.4 0-146.4 45.6-146.4 45.6s-84.4-115.8-124.8-245.6h881.4c-40.4 129.8-124.6 245.6-124.6 245.6z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 