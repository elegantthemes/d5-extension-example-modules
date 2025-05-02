import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './image.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/image'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M548.492 635.572c0-45.684 37.048-82.644 82.644-82.644s82.644 37.052 82.644 82.644-37.048 82.644-82.644 82.644-82.644-36.956-82.644-82.644zM809.144 150.856h59.428v356.572l-237.716-178.284-297.144 237.716-178.284-178.284v-237.716h653.716zM928 864h-832c-32.78 0-59.428-26.65-59.428-59.428v-713.144c0-32.78 26.65-59.428 59.428-59.428h832c32.78 0 59.428 26.65 59.428 59.428v713.144c0 32.78-26.65 59.428-59.428 59.428zM928 91.428h-832v713.144h832v-713.144z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 