import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './currency.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/currency'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M544 896c-265.088 0-480-214.912-480-480s214.912-480 480-480 480 214.912 480 480-214.912 480-480 480zM598.848 448c93.248 0 169.152-71.744 169.152-160s-75.904-160-169.152-160h-22.848v-32c0-17.664-14.336-32-32-32s-32 14.336-32 32v32h-22.848c-93.248 0-169.152 71.744-169.152 160 0 17.664 14.336 32 32 32s32-14.336 32-32c0-52.928 47.168-96 105.152-96h22.848v192h-22.848c-93.248 0-169.152 71.744-169.152 160s75.904 160 169.152 160h22.848v32c0 17.664 14.336 32 32 32s32-14.336 32-32v-32h22.848c93.248 0 169.152-71.744 169.152-160 0-17.664-14.336-32-32-32s-32 14.336-32 32c0 52.928-47.168 96-105.152 96h-22.848v-192h22.848zM384 544c0-52.928 47.168-96 105.152-96h22.848v192h-22.848c-57.984 0-105.152-43.072-105.152-96zM598.848 192c57.984 0 105.152 43.072 105.152 96s-47.168 96-105.152 96h-22.848v-192h22.848z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 