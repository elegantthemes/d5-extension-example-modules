import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './social_googledrive_alt2.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/social_googledrive_alt2'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M512 960c-282.752 0-512-229.248-512-512s229.248-512 512-512 512 229.248 512 512c0 282.816-229.248 512-512 512zM610.752 704.576l169.472-293.632h-197.44l-169.536 293.632h197.504zM215.808 362.496l169.408 293.504 98.688-171.072-169.408-293.504-98.688 171.072zM709.44 191.424h-326.592l98.688 171.072h326.656l-98.752-171.072z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 