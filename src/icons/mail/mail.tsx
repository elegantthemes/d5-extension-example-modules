import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './mail.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/mail'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M210.842 595.156v-290.89l160.846 154zM758.402 632.802h-492.804l246.402-208.758zM512 338.488l-106.090 92.4-160.846-164.268h533.87l-160.846 164.268zM813.158 595.156l-164.268-136.89 164.268-154v263.514zM512 940.804c-266.934 0-482.536-222.446-482.536-492.804s215.602-492.804 482.536-492.804c266.934 0 482.536 222.446 482.536 492.804s-215.602 492.804-482.536 492.804zM878.18 201.598h-732.36v427.78c0 0 0 3.424 0 3.424s0 3.424 0 3.424c0 34.224 27.378 61.6 61.6 61.6 0 0 3.424 0 3.424 0v0h602.316c0 0 3.424 0 3.424 0 34.224-3.424 58.178-27.378 61.6-61.6 0 0 0-3.424 0-3.424s0-3.424 0-3.424v-427.78z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 