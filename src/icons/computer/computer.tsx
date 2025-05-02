import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './computer.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/computer'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M659.908 82.12c-27.244 11.678-38.922 38.922-42.814 62.278h-214.082c-3.892-23.358-15.572-50.6-42.814-62.278-46.706-23.358-38.92-38.922-3.892-38.922s136.23 0 151.802 0c0 0 3.894 0 3.894 0 15.572 0 116.772 0 151.802 0s38.922 19.466-3.894 38.922zM951.832 852.804h-879.672c-19.466 0-38.92-15.572-38.92-35.028v-579.962c0-19.466 15.572-35.028 35.028-35.028h883.564c19.466 0 35.028 15.572 35.028 35.028v579.962c3.894 19.466-15.572 35.028-35.028 35.028zM924.588 362.37h-825.178v428.16h829.072v-428.16z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 