import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './hazard.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/hazard'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M523.378 852.978c-173.511-288.356-344.178-572.089-516.622-859.022 338.844 0 672 0 1010.489 0-165.689 288-328.533 571.733-493.867 859.022zM522.667 767.289c141.156-245.333 279.467-486.044 419.2-729.6-286.933 0-569.956 0-857.956 0 145.778 242.489 290.489 483.2 438.756 729.6zM519.467 654.578c-115.556-192.356-228.622-380.444-343.467-571.022 226.133 0 447.289 0 671.644 0-109.867 191.289-217.956 379.378-328.178 571.022zM518.756 568.534c85.689-149.333 169.244-294.4 254.222-442.311-174.578 0-345.244 0-520.178 0 88.533 147.2 175.644 292.622 265.956 442.311z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 