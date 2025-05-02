import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './medical-shipped.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/medical-shipped'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M516.267 930.134c-213.333 0-388.267-174.933-388.267-388.267 0-4.267 0-8.533 4.267-12.8 0-4.267 4.267-8.533 4.267-8.533l204.8-213.333c-21.333-4.267-38.4-21.333-38.4-42.667v-298.667c0-25.6 21.333-42.667 46.933-42.667h320c25.6 0 46.933 21.333 46.933 42.667v298.667c0 17.067-12.8 34.133-29.867 38.4l213.333 213.333c4.267 4.267 4.267 4.267 4.267 8.533s4.267 8.533 4.267 12.8c-4.267 213.333-179.2 392.533-392.533 392.533zM601.6 524.8l-72.533-217.6h-25.6l-72.533 217.6c46.933 38.4 115.2 42.667 170.667 0zM371.2 520.534l72.533-209.067h-17.067l-226.133 221.867c55.467 29.867 110.933 25.6 170.667-12.8zM563.2 68.267v-76.8h-93.867v76.8h-81.067v93.867h81.067v76.8h93.867v-76.8h76.8v-93.867h-76.8zM605.867 307.2h-17.067l72.533 209.067c55.467 38.4 115.2 42.667 170.667 12.8l-226.133-221.867z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 