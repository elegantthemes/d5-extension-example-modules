import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_document.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_document'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M128-64h770.688c35.328 0 64 28.672 64 64v896c0 35.328-28.672 64-64 64h-770.688c-35.328 0-64-28.672-64-64v-896c0-35.328 28.672-64 64-64zM480 768h258.688c17.664 0 32-14.336 32-32s-14.336-32-32-32h-258.688c-17.664 0-32 14.336-32 32s14.336 32 32 32zM288 576h450.688c17.664 0 32-14.336 32-32s-14.336-32-32-32h-450.688c-17.664 0-32 14.336-32 32s14.336 32 32 32zM288 384h450.688c17.664 0 32-14.336 32-32s-14.336-32-32-32h-450.688c-17.664 0-32 14.336-32 32s14.336 32 32 32zM288 192h450.688c17.664 0 32-14.336 32-32s-14.336-32-32-32h-450.688c-17.664 0-32 14.336-32 32s14.336 32 32 32z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 