import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './bar-counters.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/bar-counters'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M992 576h-960c-17.664 0-32-14.336-32-32s14.336-32 32-32h960c17.664 0 32 14.336 32 32s-14.336 32-32 32zM32 128h832c17.664 0 32 14.336 32 32s-14.336 32-32 32h-832c-17.664 0-32-14.336-32-32s14.336-32 32-32zM32 704h768c17.664 0 32 14.336 32 32s-14.336 32-32 32h-768c-17.664 0-32-14.336-32-32s14.336-32 32-32zM32 320h576c17.664 0 32 14.336 32 32s-14.336 32-32 32h-576c-17.664 0-32-14.336-32-32s14.336-32 32-32z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 