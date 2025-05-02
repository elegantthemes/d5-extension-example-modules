import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_lock-open_alt.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_lock-open_alt'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M960 0v512c0 35.328-28.672 64-64 64h-640.32l0.32 27.136c0 172.416 106.496 292.864 259.072 292.864 111.68 0 211.2-64.192 259.776-167.552 7.488-16 26.496-22.848 42.56-15.296 16 7.488 22.848 26.56 15.296 42.56-59.2 125.952-180.864 204.288-317.632 204.288-187.2 0-323.072-150.080-323.072-356.48l-0.32-27.52h-63.68c-35.328 0-64-28.672-64-64v-512c0-35.328 28.672-64 64-64h768c35.328 0 64 28.672 64 64zM128 512h768v-512h-768v512zM512 384c-70.72 0-128-57.28-128-128s57.28-128 128-128 128 57.28 128 128-57.28 128-128 128zM512 192c-35.264 0-64 28.736-64 64s28.736 64 64 64 64-28.736 64-64-28.736-64-64-64z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 