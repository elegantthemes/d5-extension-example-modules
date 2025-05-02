import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './personal-care.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/personal-care'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M542 674.267h58.4c16.6 0 30 13.2 30 29.4s-13.4 29.4-30 29.4h-58.4v25h58.4c16.6 0 30 13.2 30 29.4s-13.4 29.4-30 29.4h-58.4v25.2h58.4c16.6 0 30 13.2 30 29.4s-13.4 29.4-30 29.4h-58.4v0.6c0 16.2-13.4 29.4-30 29.4s-30-13.2-30-29.4v-0.8h-58.4c-16.6 0-30-13.2-30-29.4s13.4-29.4 30-29.4h58.4v-25.2h-58.4c-16.6 0-30-13.2-30-29.4s13.4-29.4 30-29.4h58.4v-25.2h-58.4c-16.6 0-30-13.2-30-29.4s13.4-29.4 30-29.4h58.4v-182.4c-24-1.8-37.6-11.4-42-23.2s-32.4-272.2-37-327.6l-9.2-111.6c-2.2-26 7-51.8 25-71s43.6-30.2 70.2-30.2h45.6c26.6 0 52.2 11 70.2 30.2s27.2 45 25 71l-9.2 111.6c-4.6 55.2-36.8 314-42.2 327.6s-12.6 21.4-36.6 23.2l0.2 182.8z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 