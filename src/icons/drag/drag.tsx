import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './drag.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/drag'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M999.467 470.4l-143.644 143.644c-33.778 33.778-61.511 22.4-61.511-25.6v-118.4h-238.933v238.933h118.4c48 0 59.378 27.733 25.6 61.511l-141.511 141.867c-33.778 33.778-55.822 35.911-89.6 2.133l-143.644-144c-33.778-33.778-22.4-61.511 25.6-61.511h118.4v-238.933h-238.933v118.756c0 48-27.733 59.378-61.511 25.6l-141.867-141.867c-33.778-33.778-35.911-55.822-2.133-89.6l143.644-143.644c33.778-33.778 61.511-22.4 61.511 25.6v118.4h238.933v-238.933h-118.4c-48 0-59.378-27.733-25.6-61.511l141.867-141.867c33.778-33.778 55.822-35.911 89.6-2.133l143.644 143.644c33.778 33.778 22.4 61.511-25.6 61.511h-118.4v238.933h238.933v-118.4c0-48 27.733-59.378 61.511-25.6l141.867 141.867c33.778 33.778 35.911 55.822 1.778 89.6z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 