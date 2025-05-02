import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './video.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/video'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M902.4 669.866c-38.4-22.4-236.8-131.2-281.6-160v67.2c0 67.2-54.4 131.2-131.2 131.2h-307.2c-67.2 0-131.2-54.4-131.2-131.2v-304c0-67.2 54.4-131.2 131.2-131.2h307.2c67.2 0 131.2 54.4 131.2 131.2v60.8c44.8-32 252.8-144 281.6-160 44.8-22.4 67.2-16 67.2 16 0 54.4 0 214.4 0 236.8s0 182.4 0 230.4-28.8 38.4-67.2 12.8z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 