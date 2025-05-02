import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_book_alt.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_book_alt'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M929.344 960h-704c-88.32 0-159.808-70.976-161.088-158.976l-0.256 0.32v-704c0-89.088 72.256-161.344 161.344-161.344h544c35.328 0 62.656 28.672 62.656 64v672c0 17.664-12.992 32-30.656 32h-576c-53.696 0-97.344 41.024-97.344 94.656 0 53.696 43.648 97.344 97.344 97.344h670.656v-736c0-17.664 15.68-32 33.344-32s30.656 14.336 30.656 32v768c0 17.664-12.992 32-30.656 32zM225.344 640h542.72l1.28-640h-544c-53.696 0-97.344 43.648-97.344 97.344v573.952c26.88-19.712 60.48-31.296 97.344-31.296z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 