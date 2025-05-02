import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './social_googledrive.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/social_googledrive'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M975.616 384l-292.928 507.52h-341.376l292.992-507.52zM463.488 511.808l-170.624 295.68-292.864-507.328 170.688-295.68zM288.704-1.344h564.608l170.688 321.344h-552z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 