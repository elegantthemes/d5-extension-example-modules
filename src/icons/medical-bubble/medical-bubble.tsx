import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './medical-bubble.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/medical-bubble'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M505.6 785.066c-252.8 0-460.8-156.8-460.8-352 0-102.4 57.6-195.2 150.4-259.2-6.4-147.2-86.4-160-86.4-160 99.2-9.6 182.4 51.2 220.8 96 54.4-19.2 115.2-28.8 179.2-28.8 252.8 0 460.8 156.8 460.8 352s-208 352-464 352zM697.6 391.466c0-3.2 0-6.4-3.2-9.6s-6.4-3.2-9.6-3.2h-102.4v-102.4c0-3.2 0-6.4-3.2-9.6s-6.4-3.2-9.6-3.2h-89.6c-3.2 0-6.4 0-9.6 3.2s-3.2 6.4-3.2 9.6v102.4h-102.4c-3.2 0-6.4 0-9.6 6.4-3.2 3.2-3.2 6.4-3.2 9.6v89.6c0 3.2 0 6.4 3.2 9.6s6.4 3.2 9.6 3.2h102.4v102.4c0 3.2 0 6.4 3.2 9.6s6.4 3.2 9.6 3.2h89.6c3.2 0 6.4 0 9.6-3.2s3.2-6.4 3.2-9.6v-102.4h102.4c3.2 0 6.4 0 9.6-3.2s3.2-6.4 3.2-9.6v-92.8z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 