import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './fitness.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/fitness'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M740.6 473.267h-95.2c-25.6 0-46.2-20.8-46.2-46.2v-88c-53.2 12.6-124.8 20.4-203.6 20.4-75 0-143.4-7-195.8-18.6v86c0 25.6-20.8 46.2-46.2 46.2h-95.6c-25.6 0-46.2-20.8-46.2-46.2v-285.6c0-25.6 20.8-46.2 46.2-46.2h95.2c25.6 0 46.2 20.8 46.2 46.2v86c52.4-11.6 120.8-18.6 195.8-18.6 78.8 0 150.4 7.8 203.6 20.4v-88c0-25.6 20.8-46.2 46.2-46.2h95.2c25.6 0 46.2 20.8 46.2 46.2v286c0.4 25.6-20.2 46.2-45.8 46.2zM967.2 779.467h-95.2c-25.6 0-46.2-20.8-46.2-46.2v-88c-53.2 12.6-124.8 20.4-203.6 20.4-75 0-143.4-7-195.8-18.6v86c0 25.6-20.8 46.2-46.2 46.2h-95.2c-25.6 0-46.2-20.8-46.2-46.2v-285.6c0-25.6 20.8-46.2 46.2-46.2h95.2c25.6 0 46.2 20.8 46.2 46.2v86c52.4-11.6 120.8-18.6 195.8-18.6 78.8 0 150.4 7.8 203.6 20.4v-88c0-25.6 20.8-46.2 46.2-46.2h95.2c25.6 0 46.2 20.8 46.2 46.2v286c0 25.6-20.6 46.2-46.2 46.2z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 