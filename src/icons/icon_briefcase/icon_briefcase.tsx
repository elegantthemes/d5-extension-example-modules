import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_briefcase.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_briefcase'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M960 704h-192v128c0 35.328-28.672 64-64 64h-384c-35.328 0-64-28.672-64-64v-128h-192c-35.328 0-64-28.672-64-64v-576c0-35.328 28.672-64 64-64h896c35.328 0 64 28.672 64 64v576c0 35.328-28.672 64-64 64zM64 640h896v-576h-896v576zM320 832h384v-128h-384v128z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 