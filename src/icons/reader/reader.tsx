import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './reader.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/reader'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M925.511 507.378c-194.844 17.422-316.444-59.022-316.444-59.022-57.6-29.156-64.711-71.822-64.711-113.067 0 0 0-329.244 0-371.911s50.844-32 67.2-22.044c108.089 64 245.333 70.4 304.711 77.867 30.578 3.911 52.978 17.778 52.978 59.022 0 0 0 327.822 0 370.489s-16.356 56.178-43.733 58.667zM414.933 448.356c0 0-121.6 76.8-316.444 59.022-27.378-2.489-44.089-16.356-44.089-59.022s0-370.489 0-370.489c0-41.244 22.4-55.111 52.978-59.022 59.378-7.467 196.622-13.867 304.711-77.867 16.356-9.6 67.2-20.622 67.2 22.044s0 371.911 0 371.911c0 41.6-6.756 84.267-64.356 113.422zM665.824 857.137c84.977-84.977 84.977-222.753 0-307.73s-222.753-84.977-307.73 0c-84.977 84.977-84.977 222.753 0 307.73s222.753 84.977 307.73 0z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 