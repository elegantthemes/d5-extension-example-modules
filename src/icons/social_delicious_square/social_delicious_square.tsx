import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './social_delicious_square.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/social_delicious_square'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M512.384 704h255.616v-256.704h-255.616zM832 960h-640c-106.048 0-192-85.952-192-192v-640c0-106.048 85.952-192 192-192h640c106.048 0 192 85.952 192 192v640c0 106.048-85.952 192-192 192zM832 447.296v-296.512c0-12.544-10.24-22.784-22.784-22.784h-585.216c-17.664 0-32 14.336-32 32v585.216c0 12.544 10.24 22.784 22.784 22.784h585.216c17.664 0 32-14.336 32-32v-288.704zM256 447.296h256.384v-255.296h-256.384z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 