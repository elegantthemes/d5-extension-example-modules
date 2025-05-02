import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './tsunami-alt.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/tsunami-alt'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M1019.733 103.111c0-30.933 0-57.6 0-87.111-297.244 0-386.844 0-688 0-172.444 0-323.911 14.578-323.911 244.622 0.356 18.844 0 72.178 7.111 115.911 48.711 344.533 323.2 491.378 574.933 470.756 71.467-6.044 139.378-23.467 197.689-66.489 20.622-15.644 38.756-37.689 51.2-60.444 15.289-27.022 13.156-71.822-11.378-93.156-21.333-18.844-56.889-20.267-82.489-7.111-28.444 14.933-39.111 39.111-34.133 70.4 1.422 8.178 3.556 16 6.756 29.511-16.356-5.333-30.578-8.533-43.733-14.578-119.822-56.178-190.933-176-181.333-304.356 9.244-121.6 109.511-240.711 239.289-276.267 51.2-14.222 106.311-17.067 160-21.333 41.956-2.844 84.267-0.356 128-0.356z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 