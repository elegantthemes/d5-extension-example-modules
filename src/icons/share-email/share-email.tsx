import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './share-email.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/share-email'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M246.27 567.798v-24.184h-0.44v-235.444l145.050 136.524zM735.308 602.94h-440.37l220.15-187.546zM784.014 567.87l-144.684-123.178 145.090-136.524v235.442h-0.4zM855.034 872.126h-679.854c-56.316 0-101.86-44.662-101.86-99.802v-665.63c0-55.1 45.542-99.802 101.86-99.802h679.854c56.278 0 101.898 44.702 101.898 99.802v665.63c0 55.14-45.62 99.802-101.898 99.802zM842.648 598.824v-381.374h-655.080v382.404c-0.038 0.88-0.29 1.768-0.29 2.686 0 0.958 0.258 1.91 0.29 2.796 1.438 29.998 25.072 53.924 54.92 55.87 1.288 0.072 2.538 0.4 3.824 0.4v-0.4l537.706 0.4c1.25 0 2.498-0.33 3.826-0.4 29.518-1.948 52.894-25.292 54.81-54.81 0.072-1.288 0.4-2.498 0.4-3.824 0-1.288-0.33-2.498-0.4-3.746zM515.086 338.898l-93.736 81.972-145.86-145.2h479.042l-145.124 145.75z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 