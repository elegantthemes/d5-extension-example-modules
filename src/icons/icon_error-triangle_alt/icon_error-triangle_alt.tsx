import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_error-triangle_alt.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_error-triangle_alt'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M1012.48 94.144l-444.032 832c-11.072 20.8-32.768 33.856-56.384 33.856h-0.064c-23.616 0-45.248-12.992-56.384-33.792l-446.016-832c-10.624-19.84-10.048-43.776 1.472-63.104 11.584-19.264 32.448-31.104 54.912-31.104h889.984c22.464 0 43.328 11.776 54.912 31.104 11.584 19.264 12.16 43.2 1.6 63.040zM65.984 64l446.016 832 444.032-832h-890.048zM448 574.976v-192c0-35.328 28.672-64 64-64s64 28.672 64 64v192c0 35.328-28.672 64-64 64s-64-28.608-64-64zM448 192c0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64s-64-28.654-64-64z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 