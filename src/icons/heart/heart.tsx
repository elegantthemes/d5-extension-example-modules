import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './heart.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/heart'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M59.733 481.423c0 0.356 0 0.711 0 1.067-0.356-0.356-0.356-0.711-0.711-1.067h0.711zM961.067 733.867c-121.956 188.8-357.333 119.822-449.067 40.533-91.733 79.289-327.111 148.267-449.067-40.533-192-297.244 171.733-587.022 424.533-729.956 6.4-3.556 13.511-5.689 24.533-5.689s18.133 2.133 24.533 5.689c252.8 142.933 616.533 433.067 424.533 729.956z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 