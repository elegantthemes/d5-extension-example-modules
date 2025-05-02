import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './triangle-down.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/triangle-down'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M533.824 330.432c0.32 0.384 0.448 0.896 0.768 1.28l223.424 246.848c12.48 13.888 12.48 36.416 0 50.304-0.128 0.128-0.256 0.192-0.384 0.256-5.76 6.72-13.824 10.88-22.784 10.88h-446.912c-9.152 0-17.28-4.416-23.104-11.264l-0.128 0.128c-12.48-13.888-12.48-36.416 0-50.304l223.936-248.128c12.48-13.888 32.704-13.888 45.184 0z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 