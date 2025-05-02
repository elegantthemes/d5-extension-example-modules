import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_puzzle_alt.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_puzzle_alt'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M316.032 158.336c-39.68 0-75.264 17.216-100.288 44.224-44.224 47.68-76.48 17.664-86.144-29.248-48.96-239.168 21.76-237.312 21.76-237.312l680.32-1.856c70.72 0 128 57.28 128 128v448c0 70.72 8.192 170.816-56.32 141.824-48.832-21.888-113.024-35.008-213.632-14.272-46.912 9.664-76.928 41.92-29.248 86.144 27.008 25.024 44.224 60.544 44.224 100.288-0.064 75.072-60.864 135.872-135.872 135.872-75.072 0-135.872-60.8-135.872-135.872 0-42.496 22.144-77.568 50.112-105.408 16.832-16.768 61.248-60.608-52.416-80.64-124.992-21.952-244.864 48.704-268.992 23.040-16-16.96-60.032-80.96-31.744-231.040 21.504-114.24 64-66.944 80.704-50.112 27.84 27.968 62.912 50.112 105.408 50.112 75.008 0 135.872-60.8 135.872-135.872 0-75.008-60.8-135.872-135.872-135.872z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 