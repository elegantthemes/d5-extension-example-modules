import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './social_googleplus.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/social_googleplus'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M524.8 576v-192c0 0 204.8 0 275.2 0-38.4-134.4-115.2-236.8-275.2-236.8-172.8 0-307.2 140.8-307.2 307.2 0 172.8 134.4 307.2 307.2 307.2 89.6 0 153.6-32 204.8-70.4 38.4 38.4 38.4 44.8 140.8 147.2-89.6 70.4-217.6 121.6-345.6 121.6-288 0-524.8-224-524.8-505.6s236.8-518.4 524.8-518.4c428.8 0 531.2 396.8 499.2 640-102.4 0-499.2 0-499.2 0zM1664 576h-192v192h-128v-192h-192v-128h192v-192h128v192h192z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 