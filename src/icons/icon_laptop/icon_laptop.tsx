import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_laptop.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_laptop'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M990.976 192h-30.976v576c0 35.328-28.672 64-64 64h-768c-35.328 0-64-28.672-64-64v-576h-30.976c-18.24 0-33.024-14.336-33.024-32s14.784-32 33.024-32h957.952c18.24 0 33.024 14.336 33.024 32s-14.784 32-33.024 32zM896 768v-509.312h-768v509.312h768z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 