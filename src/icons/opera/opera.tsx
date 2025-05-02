import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './opera.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/opera'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M59.733 481.423c0 0.356 0 0.711 0 1.067-0.356-0.356-0.356-0.711-0.711-1.067h0.711zM511.644 917.689c-268.089 0-455.467-194.489-455.467-486.044 0-259.556 182.044-496 455.822-496 273.422 0 455.467 236.444 455.467 496 0.356 291.556-187.378 486.044-455.822 486.044zM511.644 14.934c-166.756 0-185.244 246.044-185.244 427.733v3.556c0 196.267 29.511 403.911 184.178 403.911s185.956-214.044 185.956-410.311c0-181.333-17.778-424.889-184.889-424.889z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 