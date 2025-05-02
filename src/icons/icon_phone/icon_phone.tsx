import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_phone.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_phone'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M422.912 701.952c-12.224 140.608-158.912 209.6-165.12 212.416-5.824 2.752-12.352 3.584-18.624 2.496-169.344-28.096-194.816-126.656-195.84-130.752-1.408-5.76-1.152-11.712 0.64-17.28 201.984-626.688 621.76-742.848 759.744-781.056 10.624-2.944 19.392-5.312 26.048-7.488 3.2-1.088 6.528-1.536 9.856-1.536 4.544 0 9.088 0.96 13.248 2.88 4.224 1.92 103.936 48.896 128.32 202.112 1.088 6.656 0 13.568-3.072 19.584-2.176 4.224-54.336 103.488-198.976 138.56-10.112 2.624-20.48-0.064-28.288-6.72-45.632-38.976-108.672-80.512-135.872-84.8-182.336 89.152-284.16 260.224-288 292.672-2.24 18.24 39.552 82.304 87.616 134.4 6.080 6.592 9.152 15.552 8.32 24.512z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 