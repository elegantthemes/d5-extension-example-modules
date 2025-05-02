import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './subscribe.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/subscribe'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M96 320c158.784 0 288-129.216 288-288 0-17.664 14.336-32 32-32s32 14.336 32 32c0 194.112-157.888 352-352 352-17.664 0-32-14.336-32-32s14.336-32 32-32zM96 576c299.968 0 544-244.032 544-544 0-17.664 14.336-32 32-32s32 14.336 32 32c0 335.232-272.768 608-608 608-17.664 0-32-14.336-32-32s14.336-32 32-32zM96 832c441.152 0 800-358.848 800-800 0-17.664 14.336-32 32-32s32 14.336 32 32c0 476.416-387.584 864-864 864-17.664 0-32-14.336-32-32s14.336-32 32-32zM192 64c0-35.346-28.654-64-64-64s-64 28.654-64 64c0 35.346 28.654 64 64 64s64-28.654 64-64z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 