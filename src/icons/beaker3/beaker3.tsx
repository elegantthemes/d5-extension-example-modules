import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './beaker3.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/beaker3'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M5.292 55.070l322.811 455.111c0 0 29.106 31.752 29.106 92.61s0 129.654 0 185.22c0 84.672-84.672 127.008-84.672 127.008l5.292 50.274h418.067l5.292-50.274c0 0-84.672-42.336-84.672-127.008 0-55.566 0-124.362 0-185.22s29.106-92.61 29.106-92.61l306.935-455.111c0 0 55.566-113.778-100.548-113.778-132.3 0-320.165 0-373.085 0s-243.432 0-373.085 0c-156.114 0-100.548 113.778-100.548 113.778z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 