import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_trash.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_trash'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M832 896h-128c0 35.328-28.672 64-64 64h-192c-35.328 0-64-28.672-64-64h-128c-35.328 0-64-28.672-64-64h704c0 35.328-28.672 64-64 64zM192 0c0-35.328 28.672-64 64-64h576c35.328 0 64 28.672 64 64v768h-704v-768zM704 608c0 17.664 14.336 32 32 32s32-14.336 32-32v-512c0-17.664-14.336-32-32-32s-32 14.336-32 32v512zM512 608c0 17.664 14.336 32 32 32s32-14.336 32-32v-512c0-17.664-14.336-32-32-32s-32 14.336-32 32v512zM320 608c0 17.664 14.336 32 32 32s32-14.336 32-32v-512c0-17.664-14.336-32-32-32s-32 14.336-32 32v512z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 