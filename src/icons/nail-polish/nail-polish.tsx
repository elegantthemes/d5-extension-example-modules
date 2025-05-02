import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './nail-polish.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/nail-polish'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M18.8 261.667v-294.6c0-16 13-29 29-29h146.8c16 0 29 13 29 29v294.6c0 16-13 29-29 29h-146.8c-16 0-29-13-29-29zM193.4 897.467c1.6 17-11.8 31.8-29 31.8h-86.4c-17.2 0-30.6-14.8-29-31.8l15.2-261.4c1.4-14.6 13.4-25.8 28-26.2v-261h58v261c14.6 0.4 26.6 11.6 28 26.2l15.2 261.4zM794 633.467v266.6c0 16-13 29-29 29h-167.4c-16 0-29-13-29-29v-266.8h225.4zM708.8 172.467h301.2c-0.8 19.4-3.2 38.4-7.2 56.8h-294v-56.8zM352.4 159.667c0-85.4 32.6-163.4 86-221.8h485.6c43.8 48 73.6 109 83 176.4h-327.2c-16 0-29 13-29 29v115c0 16 13 29 29 29h304.8c-22.6 53.4-58.8 99.6-104.4 134.2v124.6c0 16-13 29-29 29h-339.6c-16 0-29-13-29-29v-124.6c-79-59.8-130.2-154.8-130.2-261.8z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 