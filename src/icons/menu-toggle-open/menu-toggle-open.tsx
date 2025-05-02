import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './menu-toggle-open.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/menu-toggle-open'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M86.85 731.434h850.302l-425.152-496.010-425.152 496.010z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 