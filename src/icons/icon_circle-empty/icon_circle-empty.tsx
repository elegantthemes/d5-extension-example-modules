import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_circle-empty.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_circle-empty'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M512 832c-212.096 0-384-171.904-384-384s171.904-384 384-384 384 171.904 384 384-171.904 384-384 384zM512 128c-176.448 0-320 143.552-320 320s143.552 320 320 320 320-143.552 320-320-143.552-320-320-320z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 