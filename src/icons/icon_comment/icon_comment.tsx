import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_comment.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_comment'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M162.496 176.576c-18.752-48.448-50.56-111.808-104.512-176.576 102.336 0 233.984 13.44 335.424 75.648 38.144-7.36 77.696-11.648 118.592-11.648 282.752 0 512 186.24 512 416s-229.248 416-512 416-512-186.24-512-416c0-119.808 62.72-227.52 162.496-303.424z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 