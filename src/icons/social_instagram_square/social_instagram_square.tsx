import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './social_instagram_square.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/social_instagram_square'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M832 960h-640c-106.048 0-192-85.952-192-192v-640c0-106.048 85.952-192 192-192h640c106.048 0 192 85.952 192 192v640c0 106.048-85.952 192-192 192zM832 151.104c0-12.736-10.368-23.104-23.104-23.104h-593.792c-12.736 0-23.104 10.368-23.104 23.104v593.792c0 12.736 10.368 23.104 23.104 23.104h593.792c12.736 0 23.104-10.368 23.104-23.104v-593.792zM640 704h128v-128h-128zM384 448c0-70.692 57.308-128 128-128s128 57.308 128 128c0 70.692-57.308 128-128 128s-128-57.308-128-128zM702.4 448c0-105.024-85.44-190.4-190.4-190.4s-190.4 85.376-190.4 190.4c0 13.632 1.6 19.136 4.288 32h-69.888v-288h512v288h-69.888c2.752-12.864 4.288-18.368 4.288-32z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 