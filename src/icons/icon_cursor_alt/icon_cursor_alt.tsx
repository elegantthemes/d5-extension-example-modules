import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_cursor_alt.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_cursor_alt'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M314.496 948.608c-8.704 10.304-22.848 14.080-35.456 9.472s-21.056-16.64-21.056-30.080v-835.008c0-13.824 8.832-26.048 21.952-30.4 3.264-1.088 6.656-1.6 10.048-1.6 9.92 0 19.52 4.608 25.664 12.928l143.104 192.768 99.264-283.968c12.736-36.352 52.544-55.552 88.896-42.816s55.552 52.544 42.816 88.896l-97.408 278.592 223.872-43.328c13.376-2.688 26.816 3.52 33.664 15.168 6.848 11.712 5.632 26.432-3.136 36.8l-532.224 632.576zM494.4 391.616c-12.096 2.432-24.448-2.432-31.744-12.352l-140.608-189.44v650.432l417.536-496.128-245.184 47.488z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 