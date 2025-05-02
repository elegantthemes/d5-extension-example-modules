import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_clock_alt.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_clock_alt'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M546.112 891.712c-122.304 0-244.608-46.656-337.92-139.968-186.624-186.624-186.624-489.216 0-675.776 93.376-93.312 215.616-139.968 337.92-139.968s244.608 46.656 337.92 139.968c186.624 186.624 186.624 489.216 0 675.776-93.312 93.312-215.616 139.968-337.92 139.968zM838.784 121.216c-78.144-78.144-182.080-121.216-292.672-121.216-110.528 0-214.464 43.072-292.672 121.216-78.144 78.144-121.216 182.080-121.216 292.672s43.072 214.464 121.216 292.672c78.144 78.144 182.080 121.216 292.672 121.216 110.528 0 214.464-43.072 292.672-121.216s121.216-182.144 121.216-292.672-43.072-214.528-121.216-292.672zM736 448h-160v224.448c0 17.664-14.336 32-32 32s-32-14.336-32-32v-256.256c0 0 0-0.064 0-0.064v-0.128c0-17.664 14.336-32 32-32h192c17.664 0 32 14.336 32 32s-14.336 32-32 32z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 