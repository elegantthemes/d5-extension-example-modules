import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './arrow_back.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/arrow_back'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M73.344 457.344l192-192c12.48-12.48 32.768-12.48 45.248 0s12.48 32.768 0 45.248l-137.344 137.408h466.752c128 0 192-118.144 192-224 0-17.664 14.336-32 32-32s32 14.336 32 32c0 141.184-64 288-256 288h-466.752l137.344 137.344c12.48 12.48 12.48 32.768 0 45.248s-32.768 12.48-45.248 0l-192-192c-12.48-12.48-12.48-32.704 0-45.248z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 