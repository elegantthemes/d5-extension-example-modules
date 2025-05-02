import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './places.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/places'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M988 747.067c0 88.4-73.8 160-165 160s-165-71.6-165-160c0-124.4 165-302 165-302s165 177.6 165 302zM757 742.067c0 36.4 29.6 66 66 66s66-29.6 66-66-29.6-66-66-66c-36.4 0-66 29.4-66 66zM493 480.667c0 126.2-103.4 228.4-231 228.4s-231-102.4-231-228.4c0-177.6 231-431.6 231-431.6s231 253.8 231 431.6zM163 478.067c0 54.6 44.4 99 99 99s99-44.4 99-99c0-54.6-44.4-99-99-99s-99 44.4-99 99zM130-16.933v-33h264v33h-97.4l548.2 396h77.2v33h-198v-33h64.4l-548.2-396z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 