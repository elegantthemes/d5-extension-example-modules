import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_folder-add.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_folder-add'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M896 832h-256c-35.328 0-64-28.672-64-64 0 0-8.32-58.688-64-64h-448c-35.328 0-64-28.672-64-64v-576c0-35.328 28.672-64 64-64h832c35.328 0 64 28.672 64 64v704c0 35.328-28.672 64-64 64zM672 320h-160v-160c0-17.664-14.336-32-32-32s-32 14.336-32 32v160h-160c-17.664 0-32 14.336-32 32s14.336 32 32 32h160v160c0 17.664 14.336 32 32 32s32-14.336 32-32v-160h160c17.664 0 32-14.336 32-32s-14.336-32-32-32z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 