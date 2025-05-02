import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_house_alt.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_house_alt'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M51.968 454.976l76.032 60.8v-451.776c0-35.328 28.672-64 64-64h192c35.328 0 64 28.672 64 64v256h128v-256c0-35.328 28.672-64 64-64h192c35.328 0 64 28.672 64 64v451.776l76.032-60.8c5.888-4.672 12.928-6.976 19.968-6.976 9.408 0 18.688 4.096 25.024 12.032 11.008 13.824 8.768 33.92-4.992 44.992l-480 384c-11.712 9.344-28.288 9.344-40 0l-172.032-137.6v80.576c0 35.328-28.672 64-64 64s-64-28.672-64-64v-182.976l-179.968-144c-13.76-11.072-16-31.168-4.992-44.992s31.104-16.064 44.928-5.056zM512 823.040l320-256v-503.040h-192v320h-256v-320h-192v502.976l320 256.064z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 