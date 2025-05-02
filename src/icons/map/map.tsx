import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './map.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/map'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M315.926 785.926l-267.928 126.076v-795.434l267.928-126.076zM382.212-8.58l263.752 118.852v795.434l-263.752-118.852zM712.25 108.88l263.752-124.884v795.434l-263.752 124.884z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 