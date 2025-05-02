import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_calendar.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_calendar'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M1020.224 780.032c-8.064 26.048-31.488 45.312-60.224 45.312h-64v-99.328c0-52.928-43.072-96-96-96s-96 43.072-96 96v99.328h-384.32v-99.328c0-52.928-43.072-96-96-96s-96 43.072-96 96v99.328h-63.68c-28.736 0-52.16-19.264-60.224-45.312h-3.776v-780.032c0-35.328 28.672-64 64-64h896c35.328 0 64 28.672 64 64v780.032h-3.776zM960 0h-896v512h896v-512zM223.68 694.016c17.664 0 32 14.336 32 32v201.984c0 17.664-14.336 32-32 32s-32-14.336-32-32v-201.984c0-17.664 14.336-32 32-32zM800 694.016c17.664 0 32 14.336 32 32v201.984c0 17.664-14.336 32-32 32s-32-14.336-32-32v-201.984c0-17.664 14.336-32 32-32z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 