import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_cloud-download.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_cloud-download'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M832 448c-2.24 0-4.352-0.576-6.528-0.64 4.288 20.864 6.528 42.496 6.528 64.64 0 176.704-143.296 320-320 320s-320-143.296-320-320c0-1.088 0.32-2.112 0.32-3.2-108.544-15.488-192.32-107.968-192.32-220.8 0-112.768 83.584-205.12 192-220.8v-3.2h320l-199.808 256h135.808v256c0 35.328 28.672 64 64 64s64-28.672 64-64v-256h135.808l-199.808-256h320c106.048 0 192 85.952 192 192s-85.952 192-192 192z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 