import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './archive.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/archive'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M960 832h-896c-35.328 0-64-28.672-64-64v-128h1024v128c0 35.328-28.672 64-64 64zM64 0c0-35.328 28.672-64 64-64h768c35.328 0 64 28.672 64 64v576h-896v-576zM384 448h256c35.328 0 64-28.672 64-64s-28.672-64-64-64h-256c-35.328 0-64 28.672-64 64s28.672 64 64 64z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 