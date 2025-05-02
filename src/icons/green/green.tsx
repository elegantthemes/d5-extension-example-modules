import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './green.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/green'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M465.086 659.126c234.582 62.552 301.048 140.752 320.592 183.752-78.192 54.734-172.028 89.924-273.678 89.924-261.954 0-476.984-218.944-476.984-484.802 0-160.296 78.192-301.048 195.486-390.972-86.010 179.848-117.286 500.44 234.582 602.086zM801.316 831.154c113.38-645.096-453.524-617.736-453.524-617.736-86.010 125.116 254.134 355.782 254.134 355.782-512.174-207.21-340.144-488.716-277.592-566.908 58.648-23.456 121.2-39.096 187.668-39.096 261.954 0 476.984 218.944 476.984 484.802 0 156.39-74.286 293.23-187.668 383.154z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 