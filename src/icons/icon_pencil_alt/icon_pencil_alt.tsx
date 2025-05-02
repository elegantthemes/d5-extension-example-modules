import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_pencil_alt.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_pencil_alt'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M960 960h-896c-35.328 0-64-28.672-64-64v-896c0-35.328 28.672-64 64-64h896c35.328 0 64 28.672 64 64v896c0 35.328-28.672 64-64 64zM178.368 666.496c-31.808 31.808-31.808 83.328 0 115.136s83.328 31.808 115.136 0l84.736-84.736-115.136-115.136-84.736 84.736zM659.84 185.024l-328.96 328.96 115.136 115.136 328.96-328.96 57.024-172.16-172.16 57.024z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 