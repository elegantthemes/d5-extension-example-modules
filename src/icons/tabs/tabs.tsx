import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './tabs.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/tabs'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M960 896h-896c-35.328 0-64-28.672-64-64v-704c0-35.328 28.672-64 64-64h896c35.328 0 64 28.672 64 64v704c0 35.328-28.672 64-64 64zM960 832v-64h-256v64h256zM384 832h256v-64h-256v64zM960 128h-896v704h256v-128h640v-576zM160 544c0-17.664 14.336-32 32-32h640c17.664 0 32 14.336 32 32s-14.336 32-32 32h-640c-17.664 0-32-14.336-32-32zM832 448h-640c-17.664 0-32-14.336-32-32s14.336-32 32-32h640c17.664 0 32 14.336 32 32s-14.336 32-32 32zM832 320h-640c-17.664 0-32-14.336-32-32s14.336-32 32-32h640c17.664 0 32 14.336 32 32s-14.336 32-32 32z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 