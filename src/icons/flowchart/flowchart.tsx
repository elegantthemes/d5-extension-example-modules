import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './flowchart.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/flowchart'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M960 320v128c0 35.328-28.672 64-64 64h-320v128h192c35.328 0 64 28.672 64 64v64c0 35.328-28.672 64-64 64h-448c-35.328 0-64-28.672-64-64v-64c0-35.328 28.672-64 64-64h192v-128h-320c-35.328 0-64-28.672-64-64v-128c-35.328 0-64-28.672-64-64v-128c0-35.328 28.672-64 64-64h64c35.328 0 64 28.672 64 64v128c0 35.328-28.672 64-64 64v128h320v-128c-35.328 0-64-28.672-64-64v-128c0-35.328 28.672-64 64-64h64c35.328 0 64 28.672 64 64v128c0 35.328-28.672 64-64 64v128h320v-128c-35.328 0-64-28.672-64-64v-128c0-35.328 28.672-64 64-64h64c35.328 0 64 28.672 64 64v128c0 35.328-28.672 64-64 64z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 