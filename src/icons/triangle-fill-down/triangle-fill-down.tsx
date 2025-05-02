import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './triangle-fill-down.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/triangle-fill-down'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M544 896c-265.088 0-480-214.912-480-480s214.912-480 480-480 480 214.912 480 480-214.912 480-480 480zM759.168 450.56l-195.52-246.848c-0.256-0.384-0.384-0.896-0.704-1.28-10.88-13.888-28.608-13.888-39.488 0l-195.904 248.128c-10.88 13.888-10.88 36.416 0 50.304l0.128-0.128c5.056 6.848 12.16 11.264 20.16 11.264h391.040c7.872 0 14.912-4.16 19.968-10.816 0.128-0.128 0.256-0.128 0.32-0.256 10.944-13.952 10.944-36.48 0-50.368z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 