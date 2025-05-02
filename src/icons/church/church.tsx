import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './church.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/church'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M339.6 876.667v-930.2h348.6v740c0 10.2-5 19.6-13.4 25.2l-289.8 190.2c-19.6 13-45.4-1.4-45.4-25.2zM409.8 545.667c0 9 7.2 16.6 16.2 16.6h61.4v54.4c0 9 7.2 16.6 16.2 16.6h20.4c9 0 16.2-7.4 16.2-16.6v-54.6h61.4c9 0 16.2-7.4 16.2-16.6v-23.2c0-9-7.2-16.6-16.2-16.6h-61.4v-151c0-9-7.2-16.6-16.2-16.6h-20.4c-9 0-16.2 7.4-16.2 16.6v151.4h-61.4c-9 0-16.2 7.4-16.2 16.6v23zM1016.4 411.067v-48.8l-303.4 109.8v69.2l285-102.2c11-4.8 18.4-15.8 18.4-28zM1016.4-23.533c0-16.6-13.2-30-29.4-30h-75.8v236.8c0 16.2-12.2 30-28 30.8-17 0.8-30.8-13-30.8-30v-237.6h-139.4v460.8l303.4-109.8v-321zM29.8 438.867l287 102.2v-69.2l-305.6-109.6v48.8c0 12.2 7.4 23.2 18.6 27.8zM316.8-53.533h-141.4v236.8c0 16.2-12.2 30-28 30.8-17 0.8-30.8-13-30.8-30v-237.6h-76c-16.2 0-29.4 13.4-29.4 30v321.2l305.4 109.8v-461z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 