import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './document.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/document'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M158.044 736.944h473.144l249.216-249.214v-357.57c72.234 86.684 115.576 198.648 115.576 317.834 0 270.886-216.706 491.204-483.978 491.204s-483.978-220.318-483.978-491.204c0-126.414 46.954-245.602 126.414-332.286l3.612 621.23zM829.834 448h-234.768v238.376h-386.46v-617.616c83.070-68.626 187.812-111.968 303.39-111.968 122.8 0 231.156 46.956 317.834 122.8 0 0 0 368.402 0 368.402zM595.072 68.764h-314.228v57.788h314.228v-57.788zM753.99 187.952h-473.144v57.788h473.144v-57.788zM280.846 307.14v57.788h473.144v-57.788h-473.144z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 