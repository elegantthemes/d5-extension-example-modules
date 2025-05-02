import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './bridge.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/bridge'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M49.2 410.067c0 0 0 0 0 0 59.6 0 108-48.2 108-107.8v-99.4h99.2v99.4c0 59.6 48.2 107.8 107.8 107.8s107.8-48.2 107.8-107.8v-99.4h99.2v99.4c0 59.6 48.2 107.8 107.8 107.8s107.8-48.2 107.8-107.8v-99.4h99.2v99.4c0 59.6 48.2 107.8 107.8 107.8 0.8 0 1.6 0 2.4 0v148h-947v-148zM48 626.267h948v-31.8h-948v31.8z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 