import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_mail_alt.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_mail_alt'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M960 832h-896c-35.328 0-64-28.672-64-64v-640c0-35.328 28.672-64 64-64h896c35.328 0 64 28.672 64 64v640c0 35.328-28.672 64-64 64zM363.52 382.272l148.608-100.992 147.712 101.696 254.912-254.976h-805.504l254.272 254.272zM64 173.248v412.672l245.632-166.976-245.632-245.696zM713.408 419.84l246.592 169.728v-416.32l-246.592 246.592zM960 768v-103.552l-1.344 1.92-446.784-307.648-447.872 304.512v104.768h896z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 