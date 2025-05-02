import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_refresh.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_refresh'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M959.168 960c-35.84 0-64.832-29.056-64.832-64.832v-151.168c-73.088 88.512-157.312 216-389.12 216-278.528 0-505.216-226.624-505.216-505.216s226.688-505.216 505.216-505.216c218.752 0 411.648 139.712 480.128 347.648 11.328 34.624-7.488 71.936-42.112 83.328s-71.936-7.424-83.328-42.048c-50.56-153.664-193.088-256.896-354.688-256.896-205.824 0-373.248 167.424-373.248 373.248s167.424 372.48 373.248 372.48c145.728 0 226.688-90.688 292.736-185.792h-163.008c-35.84 0-64.832-29.056-64.832-64.832 0-35.84 29.056-64.832 64.832-64.832h324.224c35.776-0.128 64.832 28.928 64.832 64.704v318.592c0 35.776-29.056 64.832-64.832 64.832z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 