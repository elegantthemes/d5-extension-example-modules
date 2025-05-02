import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './do-not-sign.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/do-not-sign'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M512 880.356c-250.667 0-453.689-203.022-453.689-453.689s203.022-453.689 453.689-453.689 453.689 203.022 453.689 453.689c0 250.667-203.022 453.689-453.689 453.689zM265.956 672.711c65.778 65.778 152.889 101.689 246.044 101.689 75.378 0 147.2-23.822 206.933-67.911l-486.4-486.756c-44.089 59.378-67.911 131.2-67.911 206.933-0.356 92.8 35.911 180.267 101.333 246.044zM758.044 180.623c-65.778-65.778-152.889-101.689-246.044-101.689-74.311 0-145.422 23.111-204.444 66.133l485.689 486.044c43.022-59.022 66.133-129.778 66.133-204.444 0.356-92.8-35.911-180.267-101.333-246.044z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 