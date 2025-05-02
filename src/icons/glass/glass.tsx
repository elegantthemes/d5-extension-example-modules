import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './glass.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/glass'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M914.489 912h-804.978c-81.422 0-98.133-44.444-37.333-98.844l329.244-293.333c12.089-10.667 55.822-28.444 55.822-109.867v-380.8h-156.8c-24.178 0-44.089-19.911-44.089-44.089v0c0-24.178 19.911-44.089 44.089-44.089h423.467c24.178 0 44.089 19.911 44.089 44.089v0c0 24.178-19.911 44.089-44.089 44.089h-156.8v400c1.067 55.111 39.111 77.156 55.822 91.022l329.244 293.333c60.444 54.044 43.733 98.489-37.689 98.489zM727.111 726.4h-430.222l-113.067 100.978h656.356l-113.067-100.978z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 