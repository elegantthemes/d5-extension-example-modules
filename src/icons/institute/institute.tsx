import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './institute.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/institute'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M89.6 525.866h83.2v-316.8h-83.2v-89.6h848v89.6h-83.2v316.8h83.2v22.4h32v70.4l-457.6 249.6-451.2-240v-80h28.8v-22.4zM588.8 525.866h115.2v-316.8h-115.2v316.8zM323.2 525.866h115.2v-316.8h-115.2v316.8zM963.2 100.266h-902.4c-9.6 0-16-6.4-16-16v-54.4c0-9.6 6.4-16 16-16h899.2c9.6 0 16 6.4 16 16v54.4c0 9.6-6.4 16-12.8 16z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 