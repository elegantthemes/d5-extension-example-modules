import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './road-pin.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/road-pin'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M508.44 914.3c-145.942 0-266.964-117.468-266.964-266.964 0-145.942 266.964-683.436 266.964-683.436s266.964 537.494 266.964 683.436c0 149.502-121.022 266.964-266.964 266.964zM508.44 529.868c-64.074 0-117.468 53.394-117.468 117.468s53.394 121.022 117.468 121.022 117.468-53.394 117.468-117.468-53.394-121.022-117.468-121.022z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 