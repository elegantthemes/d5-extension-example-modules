import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './warning-diamond.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/warning-diamond'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M985.825 495.158l-403.088 403.088c-39.298 39.298-103.298 39.298-142.596 0l-403.088-403.088c-39.298-39.298-39.298-103.298 0-142.596l403.088-401.965c39.298-39.298 103.298-39.298 142.596 0l403.088 403.088c39.298 39.298 39.298 102.175 0 141.474zM510.877 140.351c-34.807 0-62.877 28.070-62.877 62.877s28.070 62.877 62.877 62.877c34.807 0 62.877-28.070 62.877-62.877s-28.070-62.877-62.877-62.877zM573.754 391.86c0-34.807-28.070-62.877-62.877-62.877s-62.877 28.070-62.877 62.877v253.754c0 34.807 28.070 62.877 62.877 62.877s62.877-28.070 62.877-62.877v-253.754z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 