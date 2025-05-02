import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './road.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/road'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M530.6 900.867v-148.6h-37.2v148.6h-72.6l-297.2-966.2h777l-297.4 966.2h-72.6zM530.6 9.067h-37.2v260h37.2v-260zM530.6 417.667h-37.2v185.8h37.2v-185.8zM10.4-65.333h74.2l297.4 966.2h-37.2zM642 900.867l297.4-966.2h74.2l-334.4 966.2z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 