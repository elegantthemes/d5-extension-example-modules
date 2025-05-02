import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './bullet.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/bullet'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M695.467 430.934c0-98.969-80.231-179.2-179.2-179.2s-179.2 80.231-179.2 179.2c0 98.969 80.231 179.2 179.2 179.2s179.2-80.231 179.2-179.2z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 