import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_datareport.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_datareport'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M64 0c0-35.328 28.672-64 64-64h768c35.328 0 64 28.672 64 64v896c0 35.328-28.672 64-64 64h-768c-35.328 0-64-28.672-64-64v-896zM128 896h768v-896h-768v896zM256 384h128v-256h-128zM448 704h128v-576h-128zM640 576h128v-448h-128z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 