import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_pencil-edit_alt.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_pencil-edit_alt'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M659.84 185.024l172.16-57.024-57.024 172.16-328.96 328.96-115.136-115.136zM263.104 581.76l115.136 115.136-84.736 84.736c-31.808 31.808-83.328 31.808-115.136 0s-31.808-83.328 0-115.136l84.736-84.736zM960 960h-896c-35.328 0-64-28.672-64-64v-896c0-35.328 28.672-64 64-64h896c35.328 0 64 28.672 64 64v896c0 35.328-28.672 64-64 64zM960 0h-896v896h896v-896z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 