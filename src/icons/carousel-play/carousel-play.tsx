import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './carousel-play.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/carousel-play'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M208.648 54.996v786.006l677.592-393.004-677.592-393.004z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 