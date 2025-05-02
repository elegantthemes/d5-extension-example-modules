import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './accordion.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/accordion'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M64 320c0-35.328 28.672-64 64-64h768c35.328 0 64 28.672 64 64v384c0 35.328-28.672 64-64 64h-768c-35.328 0-64-28.672-64-64v-384zM128 704h768v-384h-768v384zM928 832c17.664 0 32 14.336 32 32s-14.336 32-32 32h-832c-17.664 0-32-14.336-32-32s14.336-32 32-32h832zM96 128h832c17.664 0 32 14.336 32 32s-14.336 32-32 32h-832c-17.664 0-32-14.336-32-32s14.336-32 32-32zM96 0h832c17.664 0 32 14.336 32 32s-14.336 32-32 32h-832c-17.664 0-32-14.336-32-32s14.336-32 32-32z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 