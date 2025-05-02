import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_camera_alt.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_camera_alt'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M960 704h-128c0 0-36.992 0-64 64-13.76 32.576-28.672 64-64 64h-256c-35.328 0-50.688-31.232-64-64-25.984-64-64-64-64-64h-64c0 35.328-28.672 64-64 64h-64c-35.328 0-64-28.672-64-64-35.328 0-64-28.672-64-64v-512c0-35.328 28.672-64 64-64h896c35.328 0 64 28.672 64 64v512c0 35.328-28.672 64-64 64zM960 128h-896v256h291.2c15.68-108.416 108.032-192 220.8-192 115.52 0 209.472 87.744 221.568 200h162.432v-264zM416 416c0 88.256 71.808 160 160 160s160-71.744 160-160c0-88.192-71.808-160-160-160s-160 71.808-160 160zM796.8 448c-15.68 108.416-108.032 192-220.8 192s-205.12-83.584-220.8-192h-291.2v192h256c37.376 0 92.16 27.2 123.264 103.936 5.312 12.992 8.896 20.16 11.264 24.064h242.688c4.288-7.040 9.792-20.032 11.84-24.896 41.408-98.112 109.696-103.104 122.944-103.104h128v-192h-163.2zM128 543.36c0-17.673 14.327-32 32-32s32 14.327 32 32c0 17.673-14.327 32-32 32s-32-14.327-32-32z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 