import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './bookmark.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/bookmark'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M849.067 832.356c0 29.867-27.378 54.4-60.444 54.4h-552.889c-33.422 0-60.444-24.533-60.444-54.4v-870.4l337.067 204.444 337.067-204.444v870.4z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 