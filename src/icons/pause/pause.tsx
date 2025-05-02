import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './pause.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/pause'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M429.928 195.216c0-36.112-29.546-62.376-65.658-62.376h-32.83c-36.112 0-65.658 29.546-65.658 62.376v508.852c0 36.112 29.546 62.376 65.658 62.376h32.83c36.112 0 65.658-29.546 65.658-62.376v-508.852zM764.784 195.216c0-36.112-29.546-62.376-65.658-62.376h-32.828c-36.112 0-65.658 29.546-65.658 62.376v508.852c0 36.112 29.546 62.376 65.658 62.376h32.828c36.112 0 65.658-29.546 65.658-62.376v-508.852z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 