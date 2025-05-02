import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './social_stumbleupon_circle.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/social_stumbleupon_circle'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M512 960c-282.752 0-512-229.248-512-512s229.248-512 512-512 512 229.248 512 512c0 282.816-229.248 512-512 512zM512 585.216c-25.216 0-45.76-20.544-45.76-45.76v-182.976c0-75.648-61.568-137.216-137.216-137.216s-137.216 61.568-137.216 137.216v91.52h91.456v-91.456c0-25.216 20.544-45.76 45.76-45.76s45.76 20.544 45.76 45.76v182.912c0 75.648 61.568 137.216 137.216 137.216s137.216-61.568 137.216-127.232v-44.352l-58.624-17.088-32.896 17.152v44.352c0 15.168-20.544 35.712-45.696 35.712zM832.128 356.544c0-75.648-61.568-137.216-137.216-137.216s-137.216 61.568-137.216 147.264v88.576l32.896-17.152 58.624 17.152v-88.64c0-35.2 20.544-55.744 45.76-55.744s45.76 20.544 45.76 45.76v91.456h91.456v-91.456z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 