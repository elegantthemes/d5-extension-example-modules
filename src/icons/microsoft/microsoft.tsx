import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './microsoft.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/microsoft'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M413.87 113.628l-308.93 43.614v261.684h308.93zM413.87 484.344h-308.93v258.046l308.93 47.246zM900.888 48.21l-421.6 65.418v305.298h421.6zM900.888 484.344h-421.6v308.93l421.6 58.154z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 