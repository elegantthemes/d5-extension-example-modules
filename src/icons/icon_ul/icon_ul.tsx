import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_ul.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_ul'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M352 448h512c17.664 0 32 14.336 32 32s-14.336 32-32 32h-512c-17.664 0-32-14.336-32-32s14.336-32 32-32zM352 704h512c17.664 0 32 14.336 32 32s-14.336 32-32 32h-512c-17.664 0-32-14.336-32-32s14.336-32 32-32zM352 192h512c17.664 0 32 14.336 32 32s-14.336 32-32 32h-512c-17.664 0-32-14.336-32-32s14.336-32 32-32zM128 736c0-17.673 14.327-32 32-32s32 14.327 32 32c0 17.673-14.327 32-32 32s-32-14.327-32-32zM128 480c0-17.673 14.327-32 32-32s32 14.327 32 32c0 17.673-14.327 32-32 32s-32-14.327-32-32zM128 224c0-17.673 14.327-32 32-32s32 14.327 32 32c0 17.673-14.327 32-32 32s-32-14.327-32-32z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 