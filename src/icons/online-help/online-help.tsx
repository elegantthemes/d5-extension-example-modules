import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './online-help.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/online-help'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M102.4 593.067v0c0 106.667 85.333 192 192 192v0c251.733-8.533 251.733-371.2 0-384-106.667 0-192 89.6-192 192v0 0zM1015.467 204.8h-413.867v-42.667h379.733c25.6 0 34.133 17.067 42.667 34.133 0 4.267 0 8.533-8.533 8.533v0zM567.467 68.267v170.667c0 81.067-55.467 140.8-136.533 140.8h-273.067c-81.067 0-157.867-59.733-157.867-140.8v-170.667h567.467zM640 584.534c0 98.133 140.8 98.133 145.067 0-4.267-93.867-145.067-93.867-145.067 0zM819.2 324.267v110.933c0 0 0 0 0 0 0 29.867-21.333 51.2-51.2 51.2 0 0 0 0-4.267 0v0h-106.667c-29.867 0-59.733-21.333-59.733-51.2v-110.933h221.867zM861.867 750.934h-405.333c12.8-12.8 21.333-21.333 29.867-38.4h401.067v-456.533h-281.6v-42.667h260.267c38.4 0 64 34.133 64 72.533v396.8c0 0 0 0 0 4.267 0 34.133-29.867 64-68.267 64 4.267 0 0 0 0 0v0 0zM546.133 721.067c-4.267 0-8.533 4.267-8.533 8.533s4.267 8.533 8.533 8.533v0c4.267 0 8.533-4.267 8.533-8.533s-4.267-8.533-8.533-8.533v0 0z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 