import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './plus-mark.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/plus-mark'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M275.554 380.444h236.446v-236.446c0-18.646 15.132-33.778 33.778-33.778s33.778 15.132 33.778 33.778v236.446h236.446c18.646 0 33.778 15.132 33.778 33.778s-15.132 33.778-33.778 33.778h-236.446v236.446c0 18.646-15.132 33.778-33.778 33.778s-33.778-15.132-33.778-33.778v-236.446h-236.446c-18.646 0-33.778-15.132-33.778-33.778s15.132-33.778 33.778-33.778z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 