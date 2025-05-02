import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_folder-add_alt.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_folder-add_alt'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M896 832h-225.024c-35.328 0-75.968-17.984-94.976-64 0 0-8.32-58.688-64-64h-448c-35.328 0-64-27.648-64-62.976v-577.024c0-35.328 28.672-64 64-64h832c35.328 0 64 28.672 64 64v704c0 35.328-28.672 64-64 64zM896 641.024v-577.024h-832v576h448c2.048 0 4.032 0.128 6.080 0.32 60.032 5.696 97.152 47.744 114.304 90.944 16.64 41.728 45.632 36.736 45.632 36.736h217.984v-126.976zM640 384h-128v128c0 17.664-14.336 32-32 32s-32-14.336-32-32v-128h-128c-17.664 0-32-14.336-32-32s14.336-32 32-32h128v-128c0-17.664 14.336-32 32-32s32 14.336 32 32v128h128c17.664 0 32 14.336 32 32s-14.336 32-32 32z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 