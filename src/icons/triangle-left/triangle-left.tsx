import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './triangle-left.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/triangle-left'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M578.56 695.296l-248.128-224c-13.888-12.48-13.888-32.704 0-45.12 0.384-0.32 0.896-0.448 1.28-0.768l246.848-223.424c13.888-12.48 36.416-12.48 50.304 0 0.128 0.128 0.128 0.256 0.256 0.384 6.72 5.76 10.88 13.824 10.88 22.784v446.912c0 9.152-4.416 17.28-11.264 23.040l0.128 0.128c-13.888 12.48-36.416 12.48-50.304 0.064z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 