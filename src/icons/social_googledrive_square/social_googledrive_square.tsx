import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './social_googledrive_square.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/social_googledrive_square'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M832 960h-640c-106.048 0-192-85.952-192-192v-640c0-106.048 85.952-192 192-192h640c106.048 0 192 85.952 192 192v640c0 106.048-85.952 192-192 192zM610.752 704.576l169.472-293.632h-197.44l-169.536 293.632h197.504zM215.808 362.496l169.408 293.504 98.688-171.072-169.408-293.504-98.688 171.072zM709.44 191.424h-326.592l98.688 171.072h326.656l-98.752-171.072z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 