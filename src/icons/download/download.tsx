import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './download.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/download'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M667.798 938.202l-72.202-478.802h83.602c15.202 0 26.602-11.4 26.602-26.602 0-7.596-3.802-15.202-7.596-18.996l-163.404-163.404c-3.802-3.802-11.4-7.596-18.996-7.596s-15.202 3.802-18.998 7.596l-163.402 163.404c-3.802 3.802-7.596 11.4-7.596 18.996 0 15.202 11.4 26.604 26.604 26.604h83.604l-75.998 478.802h307.8zM922.4 136.396c0-60.802-49.404-110.198-110.198-110.198h-600.4c-60.802 0-110.198 49.404-110.198 110.198v596.606c0 60.802 49.404 110.198 110.198 110.198h49.404l95.002-307.802h-7.596c-57 0-102.6-45.6-102.6-102.6 0-26.602 11.4-53.198 30.398-72.202l163.402-163.404c18.998-18.996 45.6-30.398 72.202-30.398s53.198 11.4 72.202 30.398l163.404 163.404c18.996 18.996 30.398 45.6 30.398 72.202 0 57-45.6 102.6-102.6 102.6h-7.596l95.004 307.802h49.404c60.802 0 110.198-49.404 110.198-110.198 0 0 0-596.606 0-596.606z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 