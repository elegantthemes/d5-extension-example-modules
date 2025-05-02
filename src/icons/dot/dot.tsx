import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './dot.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/dot'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M580.267 430.934c0-37.703-30.564-68.267-68.267-68.267s-68.267 30.564-68.267 68.267c0 37.703 30.564 68.267 68.267 68.267s68.267-30.564 68.267-68.267z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 