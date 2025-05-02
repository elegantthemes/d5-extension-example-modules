import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './skip-backwards.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/skip-backwards'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M792.034 171.34c0-16.87-10.122-30.366-20.244-30.366-3.374 0-6.748 3.374-10.122 3.374v0l-256.418 219.304v-192.314c0-16.87-10.122-30.366-20.244-30.366-3.374 0-6.748 3.374-10.122 3.374v0l-330.644 280.034c-6.748 6.748-10.122 13.496-10.122 26.992 0 10.122 3.374 20.244 10.122 26.992v0l330.644 280.034c3.374 3.374 6.748 3.374 10.122 3.374 10.122 0 20.244-13.496 20.244-30.366v-192.314l256.418 219.304c3.374 3.374 6.748 3.374 10.122 3.374 10.122 0 20.244-13.496 20.244-30.366v-560.070z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 