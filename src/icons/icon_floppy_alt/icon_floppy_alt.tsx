import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_floppy_alt.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_floppy_alt'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M768 960h-704c-35.328 0-64-28.672-64-64v-896c0-35.328 28.672-64 64-64h896c35.328 0 64 28.672 64 64v768l-192 192h-64zM704 640v256h64v-256c0-35.328-28.672-64-64-64h-384c-35.328 0-64 28.672-64 64v256h256v-256h192zM192 384c0 35.328 28.672 64 64 64h512c35.328 0 64-28.672 64-64v-384h-640v384z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 