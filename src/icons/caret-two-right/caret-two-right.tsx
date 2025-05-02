import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './caret-two-right.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/caret-two-right'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M758.592 470.016l-189.376 214.080c-12.544 12.544-32.96 12.544-45.504 0s-12.544-32.96 0-45.504l169.6-191.744-169.6-191.744c-12.544-12.544-12.544-32.96 0-45.504s32.96-12.544 45.504 0l189.376 214.080c6.4 6.4 9.472 14.784 9.344 23.168 0.064 8.384-2.944 16.768-9.344 23.168zM294.144 209.536c12.544-12.544 32.96-12.544 45.504 0l189.376 214.080c6.4 6.4 9.472 14.784 9.344 23.168 0.128 8.384-2.944 16.832-9.344 23.168l-189.312 214.144c-12.544 12.544-32.96 12.544-45.504 0s-12.544-32.96 0-45.504l169.6-191.744-169.6-191.744c-12.608-12.608-12.608-33.024-0.064-45.568z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 