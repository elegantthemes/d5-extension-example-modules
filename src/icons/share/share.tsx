import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './share.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/share'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M832 640c70.72 0 128 57.28 128 128s-57.28 128-128 128-128-57.28-128-128c0-9.216 1.088-18.112 2.88-26.752l-418.816-209.472c-23.488 26.88-57.6 44.224-96.064 44.224-70.72 0-128-57.28-128-128s57.28-128 128-128c38.464 0 72.576 17.344 96.064 44.224l418.88-209.408c-1.856-8.704-2.944-17.6-2.944-26.816 0-70.72 57.28-128 128-128s128 57.28 128 128-57.28 128-128 128c-38.464 0-72.576-17.344-96.064-44.224l-418.816 209.472c1.792 8.64 2.88 17.536 2.88 26.752s-1.088 18.112-2.88 26.752l418.88 209.408c23.424-26.816 57.536-44.16 96-44.16zM768 128c0 35.264 28.736 64 64 64s64-28.736 64-64-28.736-64-64-64-64 28.736-64 64zM256 448c0-35.264-28.736-64-64-64s-64 28.736-64 64 28.736 64 64 64 64-28.736 64-64zM832 832c35.264 0 64-28.736 64-64s-28.736-64-64-64-64 28.736-64 64 28.736 64 64 64z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 