import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './share-linkedin.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/share-linkedin'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M844.080 856.434h-654.706c-54.232 0-98.092-43.010-98.092-96.11v-641.008c0-53.062 43.858-96.11 98.092-96.11h654.706c54.198 0 98.126 43.048 98.126 96.11v641.006c0 53.1-43.932 96.11-98.126 96.11zM297.376 599.97c-38.336 0-69.382 31.080-69.382 69.382 0 38.266 31.044 69.418 69.382 69.418 38.23 0 69.348-31.15 69.348-69.418 0-38.302-31.118-69.382-69.348-69.382zM357.2 547.402v-385h-119.79v385h119.79zM805.208 162.4h-119.506v187.12c0 44.78-0.848 102.092-62.23 102.092-62.268 0-71.682-48.532-71.682-98.834v-190.376h-119.612v385h114.764v-52.602h1.626c15.93 30.234 55.010 62.198 113.206 62.198 121.066 0 143.438-79.718 143.438-183.368v-211.226z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 