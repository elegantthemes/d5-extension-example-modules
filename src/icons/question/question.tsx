import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './question.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/question'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M511 822c123.4 0 248-70.7 248-228.7 0-91.9-45.6-163.7-135.4-213.2-26-14.3-50.6-42.7-50.6-54.2 0-34.2-27.8-62-62-62s-62 27.8-62 62c0 78.7 72.2 139.4 114.8 162.8 62.7 34.6 71.2 72.3 71.2 104.5 0 91.1-77.7 104.7-124 104.7-59.7 0-124-39.2-124-125.3 0-34.2-27.8-62-62-62s-62 27.8-62 62c0 162 127.8 249.4 248 249.4v0zM511 75.3c-35.3 0-63.9 28.6-63.9 63.9s28.6 63.8 63.9 63.8 63.9-28.6 63.9-63.9-28.6-63.8-63.9-63.8z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 