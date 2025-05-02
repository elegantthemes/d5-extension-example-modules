import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './social_deviantart_circle.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/social_deviantart_circle'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M512 960c-282.752 0-512-229.248-512-512s229.248-512 512-512 512 229.248 512 512c0 282.816-229.248 512-512 512zM547.328 366.72l-80.96 145.984c35.072 6.016 65.408 7.552 91.712 6.016l45.952-73.408 110.080 26.688c-43.264 42.368-122.304 82.176-266.816 56.448-3.2-0.576-6.336-1.216-9.408-1.792l89.344-165.44-321.728-88.384c-6.976 10.816-12.608 22.336-16.768 34.432-20.8 60.224-3.712 122.048 39.552 171.136 26.176 29.376 62.528 53.824 106.752 70.912l-27.072 56.704c24.064 7.68 50.112 13.44 77.76 17.152l28.416-52.672c3.072 0.512 6.144 1.024 9.28 1.472 85.568 12.928 169.152 13.696 246.272-4.416 78.656-15.488 150.848-49.856 184.128-88.448 6.72-7.744 11.776-15.808 15.232-24.064l-321.728-88.32zM297.472 371.072l110.080 26.688-49.216 102.912c-62.848-33.664-70.784-84.288-60.864-129.6z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 