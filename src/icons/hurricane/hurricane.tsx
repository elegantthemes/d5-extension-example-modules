import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './hurricane.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/hurricane'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M711.111 624.711c-58.311 58.311-136.178 85.689-212.622 82.133 55.822 100.267 114.489 184.178 164.622 210.133 0 0-315.378-144-406.044-372.267-48.711-104.178-29.867-232.178 56.178-317.867 58.667-58.667 137.244-86.044 214.044-82.133-56.178-100.978-115.556-185.956-165.689-212.267 0 0 331.378 151.467 412.444 389.333 39.822 101.333 18.844 221.156-62.933 302.933zM426.667 340.623c-46.933 46.933-46.933 123.378 0 170.311s123.378 46.933 170.311 0c46.933-46.933 46.933-123.378 0-170.311-46.933-47.289-123.022-47.289-170.311 0z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 