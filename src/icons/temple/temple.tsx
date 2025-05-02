import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './temple.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/temple'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M68.8 895.267h889.6c18.6 0 33.6-15.2 33.6-33.6v-29.6c0-18.6-15.2-33.6-33.6-33.6h-889.6c-18.6 0-33.6 15.2-33.6 33.6v29.6c-0.2 18.4 15 33.6 33.6 33.6v0zM475.6 498.667v-560.2h-88v560.2h-74.6v-560.2h-88v560.2h-23c-18.6 0-33.6 15.2-33.6 33.6v29.6c0 18.6 15.2 33.6 33.6 33.6h623.6c18.6 0 33.6-15.2 33.6-33.6v-29.6c0-18.6-15.2-33.6-33.6-33.6h-23v-560.2h-88v560.2h-74.6v-560.2h-88v560.2h-76.4zM139.4 745.267h748.4c18.6 0 33.6-15.2 33.6-33.6v-29.6c0-18.4-15.2-33.6-33.6-33.6h-748.4c-18.4 0-33.6 15.2-33.6 33.6v29.6c-0.2 18.6 15 33.6 33.6 33.6v0z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 