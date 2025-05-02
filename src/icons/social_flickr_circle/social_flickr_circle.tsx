import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './social_flickr_circle.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/social_flickr_circle'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M512 960c-282.752 0-512-229.248-512-512s229.248-512 512-512 512 229.248 512 512c0 282.816-229.248 512-512 512zM323.584 319.744c-71.744 0-129.856 58.112-129.856 129.856s58.112 129.856 129.856 129.856c71.744 0 129.856-58.112 129.856-129.856s-58.112-129.856-129.856-129.856zM701.76 319.744c-71.744 0-129.856 58.112-129.856 129.856s58.112 129.856 129.856 129.856c71.744 0 129.856-58.112 129.856-129.856s-58.112-129.856-129.856-129.856z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 