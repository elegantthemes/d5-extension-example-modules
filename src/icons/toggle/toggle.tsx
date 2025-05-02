import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './toggle.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/toggle'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M896 576h-768c-35.328 0-64-28.672-64-64v-128c0-35.328 28.672-64 64-64h768c35.328 0 64 28.672 64 64v128c0 35.328-28.672 64-64 64zM896 384h-768v128h768v-128zM896 256h-768c-35.328 0-64-28.672-64-64v-128c0-35.328 28.672-64 64-64h768c35.328 0 64 28.672 64 64v128c0 35.328-28.672 64-64 64zM896 64h-768v128h768v-128zM896 896h-768c-35.328 0-64-28.672-64-64v-128c0-35.328 28.672-64 64-64h768c35.328 0 64 28.672 64 64v128c0 35.328-28.672 64-64 64zM896 704h-768v128h768v-128z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 