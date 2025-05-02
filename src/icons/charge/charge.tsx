import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './charge.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/charge'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M787.2 513.066c-80 0-140.8 0-220.8 0 0 0 134.4 201.6 201.6 297.6-96 0-243.2 0-332.8-3.2-3.2-9.6-192-425.6-201.6-441.6 70.4 0 140.8 0 208 0l-124.8-320c0 0 291.2 284.8 470.4 467.2z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 