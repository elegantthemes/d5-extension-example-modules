import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './warning-circle.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/warning-circle'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M512 909.511c-266.311 0-482.844-216.533-482.844-482.844s216.533-482.844 482.844-482.844c266.311 0 482.844 216.533 482.844 482.844s-216.533 482.844-482.844 482.844zM512 121.6c-35.556 0-64.711 28.8-64.711 64.711 0 35.556 28.8 64.711 64.711 64.711 35.556 0 64.711-28.8 64.711-64.711s-29.156-64.711-64.711-64.711zM566.4 363.734c0-34.489-20.622-62.578-46.578-62.578h-16c-25.6 0-46.578 28.089-46.578 62.578l-18.844 305.778c0 34.489 28.089 62.578 62.578 62.578h21.333c34.489 0 62.578-28.089 62.578-62.578l-18.489-305.778z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 