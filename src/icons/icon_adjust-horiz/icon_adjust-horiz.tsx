import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_adjust-horiz.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_adjust-horiz'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M864 768h-96c0 35.328-28.672 64-64 64h-64c-35.328 0-64-28.672-64-64h-416c-17.664 0-32-14.336-32-32s14.336-32 32-32h416c0-35.328 28.672-64 64-64h64c35.328 0 64 28.672 64 64h96c17.664 0 32 14.336 32 32s-14.336 32-32 32zM704 704h-64v64h64v-64zM864 512h-416c0 35.328-28.672 64-64 64h-64c-35.328 0-64-28.672-64-64h-96c-17.664 0-32-14.336-32-32s14.336-32 32-32h96c0-35.328 28.672-64 64-64h64c35.328 0 64 28.672 64 64h416c17.664 0 32 14.336 32 32s-14.336 32-32 32zM384 448h-64v64h64v-64zM864 256h-224c0 35.328-28.672 64-64 64h-64c-35.328 0-64-28.672-64-64h-288c-17.664 0-32-14.336-32-32s14.336-32 32-32h288c0-35.328 28.672-64 64-64h64c35.328 0 64 28.672 64 64h224c17.664 0 32 14.336 32 32s-14.336 32-32 32zM576 192h-64v64h64v-64z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 