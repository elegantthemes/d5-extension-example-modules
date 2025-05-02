import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './social_flickr_square.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/social_flickr_square'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M832 960h-640c-106.048 0-192-85.952-192-192v-640c0-106.048 85.952-192 192-192h640c106.048 0 192 85.952 192 192v640c0 106.048-85.952 192-192 192zM323.584 319.744c-71.744 0-129.856 58.112-129.856 129.856s58.112 129.856 129.856 129.856c71.744 0 129.856-58.112 129.856-129.856s-58.112-129.856-129.856-129.856zM701.76 319.744c-71.744 0-129.856 58.112-129.856 129.856s58.112 129.856 129.856 129.856c71.744 0 129.856-58.112 129.856-129.856s-58.112-129.856-129.856-129.856z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 