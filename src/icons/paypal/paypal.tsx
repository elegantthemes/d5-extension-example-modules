import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './paypal.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/paypal'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M1022.222 731.023v57.244c0 23.111-18.844 41.6-41.6 41.6h-936.889c-23.111 0-41.6-18.844-41.6-41.6v-57.244c-0.356-2.133-0.711-4.622-0.711-6.756v-595.2c0-2.489 0.356-4.622 0.711-6.756v-57.244c0-23.111 18.844-41.6 41.6-41.6h936.889c23.111 0 41.6 18.844 41.6 41.6v57.244c0.356 2.133 0.711 4.622 0.711 6.756v595.2c-0.356 2.133-0.356 4.622-0.711 6.756zM289.778 279.823l84.622 387.2h176.711c55.822 0 120.889-41.244 101.333-131.911-17.067-80-80.356-127.289-156.8-127.289h-80l-27.378-128.356h-98.489zM751.644 441.956c-17.067-80-81.067-127.289-157.511-127.289h-64.711l-27.378-128.356h-92.444l36.267 184.178h49.422c31.289 0 64.711 8.178 85.689 18.133s49.067 29.511 63.644 47.289c21.333 24.889 36.622 55.822 44.444 91.733 2.844 13.867 3.911 26.311 3.911 38.044 40.533-16.356 72.889-56.533 58.667-123.733z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 