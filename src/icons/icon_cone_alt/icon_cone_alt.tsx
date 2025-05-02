import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_cone_alt.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_cone_alt'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M798.912 320l-24.256 64h-525.312l-24.256-64-97.088-256h768l-97.088 256zM293.568 320h436.928l72.832-192h-582.592l72.832 192zM657.664 512h68.48l-24.256 64-130.176 343.104c-9.536 24.64-33.28 40.896-59.712 40.896s-50.176-16.256-59.712-40.896l-154.368-407.104h359.744zM512 896l121.344-320h-242.688l121.344 320zM991.488 0h-958.976c-17.984 0-32.512-13.568-32.512-31.488s14.528-32.512 32.512-32.512h958.976c17.984 0 32.512 14.528 32.512 32.512s-14.528 31.488-32.512 31.488z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 