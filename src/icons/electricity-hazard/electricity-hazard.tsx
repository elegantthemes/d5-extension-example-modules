import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './electricity-hazard.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/electricity-hazard'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M981.333 223.289l-331.022 595.2c-27.378 49.422-77.867 78.933-134.4 78.933s-107.022-29.511-134.4-78.933l-331.022-595.2c-26.667-48-25.956-105.244 1.778-152.533 28.089-47.644 77.511-75.733 132.622-75.733h662.4c55.111 0 104.533 28.444 132.622 75.733 27.733 47.289 28.444 104.533 1.422 152.533zM905.956 113.778c-12.444-20.978-34.489-33.778-59.022-33.778h-662.044c-24.533 0-46.578 12.444-59.022 33.778-12.444 20.978-12.8 46.578-0.711 67.911l331.022 595.2c12.089 22.044 34.489 35.2 59.733 35.2s47.644-13.156 59.733-35.2l331.022-595.2c12.089-21.333 11.733-46.578-0.711-67.911zM515.911 427.378l71.467 178.489-126.222-33.778-80.711-247.467 148.267 28.8-44.444-97.778-32 11.733 22.044-125.156 97.422 81.422-34.844 12.8 114.489 216.178z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 