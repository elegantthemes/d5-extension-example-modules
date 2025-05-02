import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './social_googleplus_circle.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/social_googleplus_circle'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M512 960c-281.6 0-512-230.4-512-512s230.4-512 512-512 512 230.4 512 512-230.4 512-512 512zM422.4 211.2c-128 0-230.4 108.8-230.4 236.8s102.4 236.8 230.4 236.8c57.6 0 115.2-25.6 153.6-57.6-38.4-44.8-38.4-51.2-57.6-70.4-25.6 19.2-51.2 38.4-96 38.4-76.8 0-134.4-64-134.4-140.8s57.6-140.8 134.4-140.8c70.4 0 102.4 32 121.6 96-32 0-121.6 0-121.6 0v89.6c0 0 179.2 0 224 0 19.2-115.2-32-288-224-288zM832 384v-64h-64v64h-64v64h64v64h64v-64h64v-64h-64z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 