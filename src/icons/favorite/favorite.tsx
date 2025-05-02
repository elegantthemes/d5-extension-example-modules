import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './favorite.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/favorite'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M723.728 171.126l-205.212 104.236-201.956-110.75 32.572 228.014-169.382 159.61 228.014 35.832 97.72 211.728 107.492-205.214 231.272-29.316-162.866-166.126zM818.192 40.832l-296.418 146.582-289.904-159.61 48.86 325.736-244.3 228.014 328.992 52.118 140.066 302.932 153.096-296.42 325.736-39.088-231.272-234.528z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 