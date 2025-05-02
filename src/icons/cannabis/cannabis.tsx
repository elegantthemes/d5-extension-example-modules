import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './cannabis.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/cannabis'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M694.4 292.267c0 0 248.889 110.222 297.6 333.511 0 0-273.422-36.978-390.4-200.889 0 0 55.467 273.778-88.178 502.756 0 0-0.356 0.711-1.067 0.711s-1.422-0.356-1.422-0.356c-151.467-224.711-88.178-502.756-88.178-502.756-117.333 163.911-390.756 200.533-390.756 200.533 48.711-223.644 309.689-328.178 309.689-328.178-228.622-4.622-309.689-92.444-309.689-92.444 128.356-91.378 340.267-50.133 340.267-50.133-88.178-69.333-64.711-138.311-64.711-138.311 112 9.956 163.556 70.044 174.222 83.911v-145.778c0-16.711 13.511-30.222 30.222-30.222s30.222 13.511 30.222 30.222v145.778c10.667-14.222 61.867-74.311 174.222-83.911 0 0 23.467 69.333-64.711 138.311 0 0 211.911-41.244 340.267 50.133 0 0-65.422 94.933-297.6 87.111z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 