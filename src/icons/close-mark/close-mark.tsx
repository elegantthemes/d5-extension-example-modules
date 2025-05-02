import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './close-mark.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/close-mark'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M274.448 210.448c13.33-13.33 35-13.33 48.33 0l189.222 189.222 189.222-189.222c13.33-13.33 35-13.33 48.33 0s13.33 35 0 48.33l-189.222 189.222 189.222 189.222c13.33 13.33 13.33 35 0 48.33s-35 13.33-48.33 0l-189.222-189.222-189.222 189.222c-13.33 13.33-35 13.33-48.33 0s-13.33-35 0-48.33l189.222-189.222-189.222-189.222c-13.33-13.33-13.33-35 0-48.33z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 