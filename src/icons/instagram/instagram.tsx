import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './instagram.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/instagram'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M697.6 874.667h-371.2c-147.2 0-262.4-115.2-262.4-262.4v-374.4c0-144 118.4-262.4 262.4-262.4h374.4c144 0 262.4 118.4 262.4 262.4v374.4c-3.2 147.2-118.4 262.4-265.6 262.4zM870.4 241.067c0-96-76.8-172.8-172.8-172.8h-371.2c-96 0-172.8 76.8-172.8 172.8v371.2c0 96 76.8 172.8 172.8 172.8h374.4c96 0 172.8-76.8 172.8-172.8v-371.2zM512 634.667c-115.2 0-208-92.8-208-208s92.8-208 208-208 208 92.8 208 208-92.8 208-208 208zM512 301.867c-67.2 0-124.8 54.4-124.8 124.8s54.4 124.8 124.8 124.8 124.8-54.4 124.8-124.8-57.6-124.8-124.8-124.8zM790.4 644.267c0-30.044-24.356-54.4-54.4-54.4s-54.4 24.356-54.4 54.4c0 30.044 24.356 54.4 54.4 54.4s54.4-24.356 54.4-54.4z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 