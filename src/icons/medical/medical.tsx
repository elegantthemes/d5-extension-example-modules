import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './medical.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/medical'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M512 916.8c-253.932 0-459.034-211.61-459.034-468.8s205.1-468.8 459.034-468.8c253.932 0 459.034 211.61 459.034 468.8s-205.1 468.8-459.034 468.8zM827.788 363.356h-231.144v-231.144h-169.288v231.144h-231.144v169.288h231.144v231.144h169.288v-231.144h231.144v-169.288z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 