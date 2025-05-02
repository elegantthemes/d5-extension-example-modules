import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './info-line.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/info-line'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M512 603.862c-34.174 0-61.958-27.784-61.958-61.958v-371.746c0-34.174 27.784-61.958 61.958-61.958s61.958 27.784 61.958 61.958v371.746c0 34.174-27.784 61.958-61.958 61.958zM512 799.706c-38.82 0-70.284-31.462-70.284-70.284s31.462-70.284 70.284-70.284 70.284 31.462 70.284 70.284c0 38.724-31.462 70.284-70.284 70.284zM512.388 933.98c-268.16 0-485.594-217.432-485.594-485.594s217.432-485.594 485.594-485.594 485.594 217.432 485.594 485.594-217.432 485.594-485.594 485.594zM512.388 18.75c-237.278 0-429.638 192.36-429.638 429.638s192.36 429.734 429.638 429.734 429.638-192.36 429.638-429.638-192.262-429.734-429.638-429.734z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 