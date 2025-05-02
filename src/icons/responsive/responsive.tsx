import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './responsive.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/responsive'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M947.2 913.066h-729.6c-32 0-57.6-25.6-57.6-60.8v-134.4h54.4v144h742.4v-454.4h-323.2v-208h102.4c3.2 0 6.4 3.2 6.4 6.4v25.6c0 3.2-3.2 6.4-6.4 6.4h-44.8v60.8h252.8c32 0 60.8 25.6 60.8 60.8v496c3.2 32-25.6 57.6-57.6 57.6zM611.2 657.066c0 25.6-19.2 44.8-44.8 44.8h-28.8v3.2h-41.6c0 0 0 0 0-3.2v0h-336c-25.6 0-44.8-19.2-44.8-44.8v-89.6h-3.2v-28.8c0 0 0 0 3.2 0v-57.6h-3.2v-28.8c0 0 0 0 3.2 0v-9.6h41.6v185.6h412.8v-489.6h-256v-64h256c25.6 0 44.8 19.2 44.8 44.8v390.4h3.2v57.6c0 0 0 0-3.2 0l-3.2 89.6zM297.6 391.466c0 19.2-19.2 35.2-41.6 35.2h-198.4c-22.4 0-41.6-16-41.6-35.2v-428.8c0-19.2 19.2-35.2 41.6-35.2h198.4c22.4 0 41.6 16 41.6 35.2v428.8zM281.6-2.134h-246.4v358.4h246.4v-358.4z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 