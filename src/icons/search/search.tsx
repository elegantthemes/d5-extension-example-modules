import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './search.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/search'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M961.062 177.89l-30.178 25.048 0.16 0.16-95.792 77.384-135.216 111.922c27.736 49.606 42.028 104.588 42.028 160.306 0 83.326-31.97 166.616-96.36 230.886-62.842 62.884-146.088 93.552-230.802 93.552-175.372 0-324.394-149.064-324.394-324.432 0-176.84 146.17-325.818 322.886-325.818 65.692 0 131.344 19.71 187.51 58.038l139.082-115.218 95.302-76.976-0.084-0.084 32.744-27.124c16.044-13.36 39.836-11.078 52.988 4.932l45.168 54.452c13.28 15.968 10.918 39.706-5.050 52.988zM557.982 410.98c-39.342-39.426-90.538-58.404-143.074-58.404-106.748 0-198.75 90.578-198.75 200.136 0 106.71 90.58 198.75 198.75 198.75 111.024 0 201.478-90.62 201.478-198.75 0-51.108-20.364-102.266-58.404-141.73z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 