import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './play.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/play'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M842.2 417.216v0l-534.476-299.42c-5.596-2.798-11.192-5.596-16.788-5.596-19.586 0-33.582 13.99-33.582 33.582v601.64c0 19.586 13.99 33.582 33.582 33.582 5.596 0 11.192-2.798 16.788-5.596v0l534.476-299.42c11.192-5.596 16.788-16.788 16.788-27.986 0-13.99-8.394-25.184-16.788-30.782z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 