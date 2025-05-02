import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './social_delicious.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/social_delicious'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M960 960h-914.432c-25.088 0-45.568-20.48-45.568-45.632v-914.368c0-35.328 28.672-64 64-64h914.432c25.088 0 45.568 20.48 45.568 45.632v914.368c0 35.328-28.672 64-64 64zM512.704 446.528v-446.528h-448.704v448h448v448h448v-449.472h-447.296z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 