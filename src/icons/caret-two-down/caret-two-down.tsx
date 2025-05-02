import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './caret-two-down.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/caret-two-down'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M702.592 436.352l-191.744-169.6-191.744 169.6c-12.544 12.544-32.96 12.544-45.504 0s-12.544-32.96 0-45.504l214.080-189.376c6.4-6.4 14.784-9.472 23.168-9.344 8.384-0.128 16.768 2.88 23.168 9.28l214.080 189.376c12.544 12.544 12.544 32.96 0 45.504s-32.96 12.608-45.504 0.064zM748.096 665.856c-12.544 12.544-32.96 12.544-45.504 0l-191.744-169.6-191.744 169.6c-12.608 12.544-33.024 12.544-45.568 0s-12.544-32.96 0-45.504l214.080-189.376c6.4-6.4 14.784-9.472 23.168-9.344 8.384-0.128 16.832 2.944 23.168 9.344l214.080 189.376c12.672 12.544 12.672 32.896 0.064 45.504z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 