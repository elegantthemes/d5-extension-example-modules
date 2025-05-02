import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './info.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/info'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M512.358 893.958c-246.074 0-445.6-199.526-445.6-445.6s199.526-445.6 445.6-445.6 445.6 199.526 445.6 445.6-199.526 445.6-445.6 445.6zM568.852 193.038c0-31.36-25.494-56.852-56.854-56.852s-56.854 25.494-56.854 56.852v341.132c0 31.358 25.494 56.852 56.854 56.852s56.854-25.494 56.854-56.852v-341.132zM512 641.752c-35.62 0-64.494 28.874-64.494 64.494s28.874 64.494 64.494 64.494 64.494-28.874 64.494-64.494c0-35.62-28.874-64.494-64.494-64.494z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 