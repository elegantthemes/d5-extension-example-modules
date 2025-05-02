import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_building.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_building'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M576 832h64v-64h-64zM704 832h64v-64h-64zM576 704h64v-64h-64zM704 704h64v-64h-64zM576 576h64v-64h-64zM704 576h64v-64h-64zM576 448h64v-64h-64zM704 448h64v-64h-64zM576 320h64v-64h-64zM704 320h64v-64h-64zM832 960h-320c-35.328 0-64-28.672-64-64v-192h-320c-35.328 0-64-28.672-64-64v-640c0-35.328 28.672-64 64-64h704c35.328 0 64 28.672 64 64v896c0 35.328-28.672 64-64 64zM320 0h-64v128h64v-128zM384 0v192h-192v-192h-64v640h320v-640h-64zM704 0h-64v128h64v-128zM832 0h-64v192h-192v-192h-64v896h320v-896zM192 576h64v-64h-64zM320 576h64v-64h-64zM192 448h64v-64h-64zM320 448h64v-64h-64zM192 320h64v-64h-64zM320 320h64v-64h-64z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 