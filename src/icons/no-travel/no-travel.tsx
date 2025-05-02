import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './no-travel.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/no-travel'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M371.8 495.667l-186 186c-12.8-35.6-20.2-73.8-20.2-113.8 0-261.8 336.4-635.6 336.4-635.6s96.4 107.2 186 247l-258.2 258.4c-24.4 13.6-44.4 33.6-58 58zM977.8-57.533l26.4 26.4-276.2 276.2c60.8 105.8 110.4 222.6 110.4 322.8 0 185.8-150.6 336.4-336.4 336.4-117.6 0-221-60.4-281.2-152l-168.2 168.2-26.4-26.4 951.6-951.6zM502 717.267c82.6 0 149.6-67 149.6-149.6 0-66.8-44-122.6-104.4-141.8l-187 187c19.2 60.4 75 104.4 141.8 104.4z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 