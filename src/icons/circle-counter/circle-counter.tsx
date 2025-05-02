import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './circle-counter.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/circle-counter'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M512 960c-17.664 0-32-14.336-32-32s14.336-32 32-32c246.976 0 448-200.96 448-448s-201.024-448-448-448-448 200.96-448 448c0 69.312 15.36 135.68 45.632 197.248 7.808 15.872 1.344 35.008-14.592 42.816-15.872 7.68-34.944 1.216-42.816-14.592-34.688-70.4-52.224-146.304-52.224-225.472 0-282.304 229.696-512 512-512s512 229.696 512 512-229.696 512-512 512zM297.344 233.344c6.272-6.208 14.464-9.344 22.656-9.344s16.384 3.136 22.656 9.344l384 384c12.48 12.48 12.48 32.768 0 45.248s-32.768 12.48-45.248 0l-384-384c-12.544-12.48-12.544-32.704-0.064-45.248zM720 288c0-26.51-21.49-48-48-48s-48 21.49-48 48c0 26.51 21.49 48 48 48s48-21.49 48-48zM400 608c0-26.51-21.49-48-48-48s-48 21.49-48 48c0 26.51 21.49 48 48 48s48-21.49 48-48z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 