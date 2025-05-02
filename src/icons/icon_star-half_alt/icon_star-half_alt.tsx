import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_star-half_alt.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_star-half_alt'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M1020.288 545.728c-7.552 23.168-27.584 40.064-51.712 43.52l-275.84 40.064-123.328 249.984c-10.816 21.888-33.024 35.712-57.408 35.712s-46.592-13.824-57.408-35.712l-123.328-249.92-275.84-40.064c-24.128-3.52-44.16-20.416-51.648-43.584-7.552-23.168-1.28-48.576 16.192-65.6l199.616-194.56-47.104-274.752c-4.096-24 5.76-48.256 25.472-62.592 11.072-8.128 24.256-12.224 37.568-12.224 10.176 0 20.416 2.432 29.76 7.36l246.72 129.728 246.72-129.728c9.344-4.928 19.584-7.36 29.76-7.36 13.248 0 26.496 4.096 37.632 12.224 19.712 14.336 29.568 38.592 25.472 62.592l-47.104 274.752 199.616 194.56c17.472 17.024 23.744 42.432 16.192 65.6zM735.68 307.904l52.8-307.904-276.48 145.344v705.664l138.24-280.128 309.12-44.928-223.68-218.048z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 