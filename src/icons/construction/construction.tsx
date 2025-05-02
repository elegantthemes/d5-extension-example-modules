import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './construction.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/construction'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M430.796 892.674c3.866 11.598 27.072 27.072 42.536 27.072 38.668 3.866 30.938 3.866 65.73 0 11.598 0 42.534-15.464 46.4-27.072 15.464-58 30.938-112.136 46.4-170.134-85.070-11.598-162.404-11.598-243.606 0 11.598 58 27.072 116.002 42.534 170.134zM353.464 606.538c108.266-15.464 201.072-15.464 309.338 0 15.464-54.134 30.938-104.4 42.534-158.538-143.068-38.668-251.338-38.668-394.408 0 11.598 54.132 27.072 108.266 42.534 158.538zM918.006 123.198c0-19.33-11.598-34.802-23.196-34.802h-777.212c-11.598 0-23.196 15.464-23.196 34.802v42.534c0 19.33 11.598 34.802 23.196 34.802h123.734c11.598 46.4 23.196 88.936 38.668 135.336 166.27-42.534 290.008-42.534 456.272 0 11.598-46.4 23.196-92.802 38.668-135.336h123.734c11.598 0 23.196-15.464 23.196-34.802-3.866-3.866-3.866-42.534-3.866-42.534z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 