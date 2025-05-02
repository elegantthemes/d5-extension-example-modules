import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_toolbox_alt.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_toolbox_alt'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M960 768h-256c0-35.328-28.672-64-64-64h320v-128h-320c35.328 0 64-28.672 64-64h256v-384h-896v384h256c0 35.328 28.672 64 64 64h-320v128h320c-35.328 0-64 28.672-64 64h-256c-35.328 0-64-28.672-64-64v-576c0-35.328 28.672-64 64-64h896c35.328 0 64 28.672 64 64v576c0 35.328-28.672 64-64 64zM384 704h256c35.328 0 64 28.672 64 64v64c0 35.328-28.672 64-64 64h-256c-35.328 0-64-28.672-64-64v-64c0-35.328 28.672-64 64-64zM384 832h256v-64h-256v64zM320 512v-64c0-35.328 28.672-64 64-64h256c35.328 0 64 28.672 64 64v64c0 35.328-28.672 64-64 64h-256c-35.328 0-64-28.672-64-64zM640 448h-256v64h256v-64z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 