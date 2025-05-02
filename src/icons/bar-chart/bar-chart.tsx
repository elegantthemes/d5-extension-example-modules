import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './bar-chart.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/bar-chart'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M158 920c-32.54 0-59-26.46-59-59v-826c0-32.54 26.46-59 59-59h767c32.54 0 59 26.46 59 59v826c0 32.54-26.46 59-59 59h-767zM866 598.82v-504.82h-177v504.82h177zM630 743v-649h-177v649h177zM394 382.456v-288.456h-177v288.454h177z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 