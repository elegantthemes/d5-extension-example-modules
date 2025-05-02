import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './social_vimeo_circle.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/social_vimeo_circle'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M512 960c-282.752 0-512-229.248-512-512s229.248-512 512-512 512 229.248 512 512c0 282.816-229.248 512-512 512zM816.128 587.328c-34.368-193.408-226.176-357.184-283.84-394.56-57.728-37.376-110.336 14.976-129.472 54.592-21.824 45.184-87.296 290.112-104.448 310.4s-68.608-20.288-68.608-20.288l-24.96 32.704c0 0 104.512 124.736 184 140.416 84.288 16.576 84.16-129.472 104.448-210.496 19.648-78.4 32.768-123.264 49.92-123.264s49.92 43.712 85.76 110.72c35.968 67.072-1.536 126.336-71.744 84.224 28.16 168.384 293.248 208.896 258.944 15.552z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 