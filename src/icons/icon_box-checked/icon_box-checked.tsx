import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_box-checked.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_box-checked'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M832 128h-640v640h472.064l39.936 64h-512c-35.328 0-64-28.672-64-64v-640c0-35.328 28.672-64 64-64h640c35.328 0 64 28.672 64 64v422.592l-64-102.592v-320zM939.712 888.704c-7.552 4.928-16.064 7.296-24.448 7.296-14.592 0-28.928-7.168-37.504-20.288l-347.904-501.888-134.592 153.6c-18.24 16.832-46.528 15.744-63.36-2.432s-15.68-46.528 2.496-63.296l161.792-184.64c1.024-1.664 2.624-2.944 3.904-4.48l4.096-4.672c0.512-0.448 1.152-0.576 1.664-1.024 1.28-1.024 2.048-2.432 3.392-3.392 2.752-1.792 5.76-2.944 8.768-4.032 0.704-0.256 1.28-0.704 1.984-0.896 4.48-1.472 9.152-2.368 13.76-2.368 0.192 0 0.384 0.128 0.576 0.128 12.16-0.064 24.256 4.416 33.152 14.016 1.664 1.792 2.304 3.968 3.648 5.952 0.064 0.064 0.128 0.128 0.192 0.192l381.376 550.208c13.504 20.672 7.744 48.448-12.992 62.016z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 