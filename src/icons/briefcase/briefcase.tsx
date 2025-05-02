import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './briefcase.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/briefcase'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M919.736 757.634h-232.994v58.246c0 32.188-26.058 58.246-58.246 58.246h-232.992c-32.188 0-58.248-26.058-58.248-58.246v-58.246h-232.992c-32.188 0-58.246-26.060-58.246-58.248v-116.496c321.796-97.592 632.148-98.102 931.968 0v116.496c0 32.188-26.058 58.248-58.246 58.248zM395.504 802.596h232.994v-58.248h-232.992v58.248zM602.642 407.532c2.248-45.472-52.524-41.9-84.616-41.9h-21.87c-32.188 0-75.212 0-73.678 44.552v58.248c-125.592 4.496-283.984 34.54-376.464 67.342v-349.49c0-32.188 26.058-58.246 58.246-58.246h815.474c32.188 0 58.246 26.058 58.246 58.246v349.49c-142.964-41.592-270.6-67.55-375.342-70.102v-58.146zM551.136 395.78h-74.6c-6.028 0-10.932 4.904-10.932 10.932v47.314c0 6.028 4.904 10.932 10.932 10.932h74.6c6.028 0 10.932-4.904 10.932-10.932v-47.314c0-6.028-4.904-10.932-10.932-10.932z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 