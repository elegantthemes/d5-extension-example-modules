import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './tablet.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/tablet'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M805.958 947.372h-591.458c-49.582 0-92.082-42.498-92.082-88.54v-818.124c0-49.582 42.498-88.54 92.082-88.54h591.458c49.582 0 88.54 38.956 88.54 88.54v818.124c0 46.040-38.956 88.54-88.54 88.54zM508.458 922.582c17.71 0 31.874-14.168 31.874-31.874s-14.168-31.874-31.874-31.874c-17.71 0-31.874 14.168-31.874 31.874 3.542 17.71 14.168 31.874 31.874 31.874zM508.458-23.040c-28.336 0-53.124 24.794-53.124 53.124s24.794 53.124 53.124 53.124c28.336 0 53.124-24.794 53.124-53.124s-21.252-53.124-53.124-53.124zM809.5 108.002h-598.542v729.584h598.542v-729.584z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 