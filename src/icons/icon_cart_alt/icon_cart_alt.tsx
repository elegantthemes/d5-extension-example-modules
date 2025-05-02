import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_cart_alt.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_cart_alt'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M192 64c0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64s-64-28.654-64-64zM768 64c0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64s-64-28.654-64-64zM-1.856 864c0-17.664 14.336-32 32-32h66.496l39.744-169.984 55.616-278.016c0-2.304 1.088-4.288 1.344-6.528l-32.576-146.56c-2.112-9.472 0.192-19.392 6.272-26.944 6.080-7.616 15.232-11.968 24.96-11.968h726.016c17.664 0 32 14.336 32 32s-14.336 32-32 32h-686.080l14.656 65.92c3.2-0.512 6.080-1.92 9.408-1.92h583.36c35.328 0 56.64 6.976 73.664 48l103.936 318.848c18.048 57.152-21.568 81.152-56.96 81.152h-768c-4.992 0-9.344-1.728-14.016-2.816l-24.832 106.112c-3.392 14.464-16.256 24.704-31.168 24.704h-91.84c-17.728 0-32-14.336-32-32zM193.28 704h761.92l-102.144-313.536c-1.216-2.752-2.24-4.736-3.008-6.080-2.112-0.192-5.44-0.384-10.688-0.384h-583.36v6.336l-1.216 6.208-61.504 307.456z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 