import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './minus-mark.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/minus-mark'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M231.99 367.996h640.026c22.082 0 40.002 17.922 40.002 40.002s-17.922 40.002-40.002 40.002h-640.026c-22.080 0-40.002-17.92-40.002-40.002s17.92-40.002 40.002-40.002z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 