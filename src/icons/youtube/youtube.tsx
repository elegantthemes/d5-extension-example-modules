import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './youtube.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/youtube'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M979.706 676.414c0 0-10.876 68.884-36.254 94.266-36.254 36.254-76.14 36.254-94.264 39.88-137.774 10.876-337.184 10.876-337.184 10.876s-199.41 0-337.184-10.876c-18.13 0-58.010 0-94.266-39.88-29.004-29.006-36.256-94.266-36.256-94.266s-10.876-83.39-10.876-159.524v-72.51c0-83.39 10.876-159.524 10.876-159.524s10.876-68.884 36.256-94.264c36.256-36.254 83.39-36.254 105.144-39.88 76.14-3.626 326.306-10.876 326.306-10.876s199.41 0 337.184 10.876c18.13 0 58.010 0 94.264 39.88 29.004 29.004 36.254 94.264 36.254 94.264s10.876 76.14 10.876 159.524v72.51c0 83.39-10.876 159.524-10.876 159.524zM370.6 281.22v395.192l373.44-195.784-373.44-199.41z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 