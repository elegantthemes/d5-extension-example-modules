import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './tent.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/tent'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M958.578 112v278.756l-450.133 419.2-443.733-436.978v-260.978h-53.333v-41.956h349.867v0.356h53.333l90.667 255.644 96.711-256h412.089v41.956z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 