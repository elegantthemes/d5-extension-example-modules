import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './social_deviantart.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/social_deviantart'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M727.744 625.664c-114.624 26.88-238.784 25.728-365.952 6.528-4.608-0.704-9.152-1.408-13.696-2.176l-42.24 78.272c-41.152-5.504-79.808-14.080-115.584-25.472l40.256-84.224c-65.792-25.472-119.744-61.76-158.656-105.408-64.256-72.96-89.664-164.8-58.816-254.272 6.208-18.048 14.592-35.136 24.96-51.2l478.080 131.328-132.736 245.824c4.544 0.896 9.216 1.792 13.952 2.624 214.656 38.272 332.096-20.864 396.416-83.84l-163.584-39.68-68.288 109.12c-39.040 2.304-84.096-0.064-136.256-8.96l120.32-216.896 478.080 131.264c-5.184 12.288-12.672 24.256-22.656 35.776-49.472 57.28-156.736 108.352-273.6 131.392zM174.72 333.696c-14.784 67.328-3.008 142.528 90.432 192.576l73.152-152.96-163.584-39.616z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 