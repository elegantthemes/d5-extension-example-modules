import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_blocked.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_blocked'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M512 960c-282.752 0-512-229.248-512-512s229.248-512 512-512 512 229.248 512 512-229.248 512-512 512zM512 832c211.712 0 384-172.288 384-384 0-82.816-26.624-159.36-71.36-222.144l-534.784 534.784c62.784 44.736 139.328 71.36 222.144 71.36zM128 448c0 82.816 26.624 159.36 71.36 222.144l534.784-534.784c-62.848-44.736-139.328-71.36-222.144-71.36-211.712 0-384 172.288-384 384z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 