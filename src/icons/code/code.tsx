import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './code.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/code'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M195.2 433.066l144 131.2c19.2 16 19.2 32-6.4 57.6-22.4 25.6-35.2 25.6-54.4 9.6l-179.2-163.2c-9.6-9.6-16-19.2-16-32s3.2-25.6 12.8-32l179.2-176c19.2-19.2 35.2-16 60.8 6.4 19.2 19.2 28.8 35.2 6.4 57.6l-147.2 140.8zM931.2 468.266l-179.2 163.2c-19.2 16-32 16-57.6-6.4-25.6-25.6-25.6-41.6-6.4-57.6l144-131.2-147.2-144c-22.4-22.4-12.8-38.4 6.4-57.6 22.4-22.4 38.4-25.6 60.8-6.4l179.2 176c9.6 9.6 12.8 22.4 12.8 32s-3.2 22.4-12.8 32zM633.6 717.866l-28.8 9.6c-16 6.4-35.2-3.2-41.6-19.2l-188.8-531.2c-6.4-16 3.2-35.2 19.2-41.6l28.8-9.6c16-6.4 35.2 3.2 41.6 19.2l188.8 531.2c6.4 16-3.2 35.2-19.2 41.6z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 