import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_headphones.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_headphones'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M960 320v128c0 294.144-225.344 448-448 448-217.216 0-448-156.992-448-448v-128c-35.328 0-64-28.672-64-64v-128c0-35.328 28.672-64 64-64 0-35.328 28.672-64 64-64s64 28.672 64 64v256c0 35.328-28.672 64-64 64v64c0 252.096 193.216 384 384 384 184.96 0 384-120.128 384-384v-64c-35.328 0-64-28.672-64-64v-256c0-35.328 28.672-64 64-64s64 28.672 64 64c35.328 0 64 28.672 64 64v128c0 35.328-28.672 64-64 64z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 