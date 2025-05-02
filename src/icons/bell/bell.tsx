import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './bell.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/bell'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M945.778 211.556c-46.222 45.156-142.222 86.4-142.222 301.156s-112 302.933-206.222 320.711c-6.4 1.067-12.8 2.133-18.844 3.2v39.822c0 34.489-28.8 62.222-64 62.222s-64-27.733-64-62.222v-38.756c-7.467-1.067-15.644-2.489-23.822-3.911-94.222-17.778-206.222-106.311-206.222-320.711s-96-256.356-142.222-301.156c-46.222-45.156-35.556-135.111 88.889-135.111 81.067 0 242.133 1.067 344.889 1.778 102.756-0.711 264.178-1.778 344.889-1.778 124.444 0 135.111 89.956 88.889 134.756zM514.489-85.333c63.644 0 115.556 50.133 115.556 112.356h-231.467c0.356-62.222 52.267-112.356 115.911-112.356z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 