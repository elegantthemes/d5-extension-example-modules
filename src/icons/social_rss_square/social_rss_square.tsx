import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './social_rss_square.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/social_rss_square'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M832 960h-640c-106.048 0-192-85.952-192-192v-640c0-106.048 85.952-192 192-192h640c106.048 0 192 85.952 192 192v640c0 106.048-85.952 192-192 192zM276.16 129.536c-46.016 0-83.392 37.12-83.392 83.072 0 45.696 37.376 83.264 83.392 83.264 46.144 0 83.456-37.568 83.52-83.264 0-45.952-37.312-83.072-83.52-83.072zM485.696 128.768c0 78.528-30.528 152.32-85.824 207.552-55.296 55.424-128.832 86.016-206.976 86.016v120.064c227.904 0 413.44-185.536 413.44-413.632h-120.64zM698.752 128.832c0 279.168-226.88 506.304-505.728 506.304v120.064c345.216 0 626.176-281.088 626.176-626.368h-120.448z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 