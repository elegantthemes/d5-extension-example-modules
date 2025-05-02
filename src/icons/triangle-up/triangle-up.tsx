import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './triangle-up.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/triangle-up'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M287.936 320h446.912c9.152 0 17.28 4.416 23.040 11.264l0.128-0.128c12.48 13.888 12.48 36.416 0 50.304l-223.936 248.128c-12.48 13.888-32.704 13.888-45.12 0-0.32-0.384-0.448-0.896-0.768-1.28l-223.488-246.848c-12.48-13.888-12.48-36.416 0-50.304 0.128-0.128 0.256-0.192 0.384-0.32 5.824-6.656 13.824-10.816 22.848-10.816z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 