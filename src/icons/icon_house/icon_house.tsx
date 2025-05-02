import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_house.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_house'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M52.992 455.808l459.008 397.824 459.008-397.824c6.080-5.248 13.568-7.808 20.992-7.808 8.96 0 17.856 3.776 24.192 11.008 11.584 13.376 10.112 33.536-3.2 45.184l-480 416c-12.032 10.432-29.888 10.432-41.92 0l-171.072-148.224v60.032c0 35.328-28.672 64-64 64s-64-28.672-64-64v-170.944l-180.992-156.864c-13.312-11.584-14.784-31.808-3.2-45.184 11.648-13.312 31.808-14.784 45.184-3.2zM384 320h256v-320h192c35.328 0 64 28.672 64 64v313.664c0 19.2-8.576 37.312-23.424 49.472l-320 262.336c-11.776 9.664-26.176 14.528-40.576 14.528s-28.8-4.864-40.576-14.528l-320-262.336c-14.848-12.096-23.424-30.272-23.424-49.472v-313.664c0-35.328 28.672-64 64-64h192v320z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 