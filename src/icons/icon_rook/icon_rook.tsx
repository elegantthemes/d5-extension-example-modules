import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_rook.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_rook'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M640 512h-256v-320c0-64-128-156.672-128-192v-32c0-17.664 14.336-32 32-32h448c17.664 0 32 14.336 32 32v32c0 35.328-128 128-128 192v320zM741.312 894.912v1.088h-64v-1.088c-1.792 0.32-3.392 1.088-5.312 1.088-17.664 0-32-14.336-32-32v-32h-64v32c0 15.808-11.648 28.288-26.688 30.912v1.088h-64v-1.088c-1.792 0.32-3.392 1.088-5.312 1.088-17.664 0-32-14.336-32-32v-32h-64v32c0 15.808-11.648 28.288-26.688 30.912v1.088h-64v-1.088c-1.792 0.32-3.392 1.088-5.312 1.088-17.664 0-32-14.336-32-32v-160c0-16.96 6.72-33.28 18.752-45.248l64-64c12.032-12.032 28.288-18.752 45.248-18.752h256c16.96 0 33.28 6.72 45.248 18.752l64 64c12.032 11.968 18.752 28.288 18.752 45.248v160c0 15.808-11.648 28.288-26.688 30.912z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 