import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './medical-cross.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/medical-cross'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M102.4 279.466h259.2v-259.2c0-9.6 3.2-19.2 9.6-25.6s16-9.6 25.6-9.6h224c9.6 0 19.2 3.2 25.6 9.6s9.6 16 9.6 25.6v259.2h259.2c9.6 0 19.2 3.2 25.6 9.6s9.6 16 9.6 25.6v0 0 224c0 9.6-3.2 19.2-9.6 25.6s-16 9.6-25.6 9.6h-259.2v262.4c0 9.6-3.2 19.2-9.6 25.6s-16 9.6-25.6 9.6h-224c-9.6 0-19.2-3.2-25.6-9.6s-9.6-16-9.6-25.6v-259.2h-259.2c-9.6 0-19.2-3.2-25.6-9.6s-9.6-16-9.6-25.6v-224c0-9.6 3.2-19.2 9.6-25.6 6.4-9.6 16-12.8 25.6-12.8z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 