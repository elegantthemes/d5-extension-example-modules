import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_clock.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_clock'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M208.256 751.744c-186.624-186.624-186.624-489.216 0-675.776s489.216-186.624 675.776 0c186.624 186.624 186.624 489.216 0 675.776-186.624 186.624-489.216 186.624-675.776 0zM800 384h-254.72c-0.448 0-0.832-0.256-1.28-0.256-17.664 0-32 14.336-32 32v320.256c0 17.664 14.336 32 32 32s32-14.336 32-32v-288h224c17.664 0 32-14.336 32-32s-14.336-32-32-32z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 