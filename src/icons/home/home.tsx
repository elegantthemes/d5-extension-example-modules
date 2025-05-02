import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './home.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/home'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M951.086 459.298c0-15.136-12.316-27.496-27.496-27.496-7.062 0-13.364 2.822-18.12 7.19l-394.516 394.516-0.562-0.562-0.12 0.076-394.074-394.030c-4.802-4.314-11.104-7.148-18.12-7.148-15.18 0-27.496 12.348-27.496 27.496 0 7.632 3.070 14.488 8.108 19.462v0l412.682 412.726c5.006 5.006 11.87 8.076 19.462 8.076 7.546 0 14.456-3.070 19.376-8.076l412.76-412.762c5.082-4.92 8.11-11.786 8.11-19.462zM841.038 379.614v-305.424c0-30.436-24.62-55.066-55.066-55.066h-192.596v275.066h-165.144v-275.108h-192.556c-30.436 0-55.066 24.62-55.066 55.066v305.424l330.206 330.25 330.206-330.206z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 