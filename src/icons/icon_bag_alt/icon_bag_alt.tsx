import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_bag_alt.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_bag_alt'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M192-64h640c35.328 0 64 28.672 64 64v704c0 35.328-28.672 64-64 64h-128.32c-1.536 106.304-86.656 192-191.68 192s-190.144-85.696-191.68-192h-128.32c-35.328 0-64-28.672-64-64v-704c0-35.328 28.672-64 64-64zM832 704v-704h-640v704h640zM512 896c69.568 0 126.144-57.152 127.68-128h-255.36c1.536 70.848 58.112 128 127.68 128zM416 576h192c17.664 0 32 14.336 32 32s-14.336 32-32 32h-192c-17.664 0-32-14.336-32-32s14.336-32 32-32z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 