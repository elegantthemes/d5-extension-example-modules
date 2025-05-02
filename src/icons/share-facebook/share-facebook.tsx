import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './share-facebook.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/share-facebook'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M856.836 872.13h-679.862c-56.318 0-101.86-44.662-101.86-99.802v-665.63c0-55.1 45.542-99.802 101.86-99.802h322.742v345.166h-118.77v137.59h118.77v101.49c0 117.812 71.94 181.922 176.998 181.922 50.356 0 93.66-3.826 106.234-5.366v-123.146h-72.822c-57.158 0-68.226-27.162-68.226-66.976v-87.926h136.23l-17.642-137.59h-118.582v-345.166h214.966c56.278 0 101.898 44.702 101.898 99.802v665.63c-0.038 55.14-45.652 99.802-101.932 99.802z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 