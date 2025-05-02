import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './folder.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/folder'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M935.994 871.994h-302.856c-33.436 0-60.572-27.136-60.572-60.572 0 0-7.874-55.544-60.572-60.572h-423.994c-33.436 0-60.57-26.166-60.57-59.6v-61.54h969.134v181.712c0 33.434-27.136 60.57-60.572 60.57zM27.434 84.576c0-33.434 27.136-60.572 60.57-60.572h847.99c33.436 0 60.572 27.136 60.572 60.572v484.566h-969.134v-484.566z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 