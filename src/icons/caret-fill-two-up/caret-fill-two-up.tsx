import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './caret-fill-two-up.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/caret-fill-two-up'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M544 896c-265.088 0-480-214.912-480-480s214.912-480 480-480 480 214.912 480 480-214.912 480-480 480zM782.464 198.144c-12.544-12.544-32.96-12.544-45.504 0l-191.744 169.6-191.744-169.6c-12.544-12.544-32.96-12.544-45.504 0s-12.544 32.96 0 45.504l214.080 189.376c6.4 6.4 14.784 9.472 23.168 9.344 8.384 0.192 16.768-2.88 23.168-9.28l214.080-189.376c12.608-12.608 12.608-32.96 0-45.568zM782.464 427.648c-12.544-12.544-32.96-12.544-45.504 0l-191.808 169.664-191.744-169.664c-12.544-12.544-32.96-12.544-45.504 0s-12.544 32.96 0 45.504l214.080 189.376c6.4 6.4 14.784 9.472 23.168 9.344 8.448 0.192 16.832-2.88 23.232-9.28l214.080-189.376c12.608-12.608 12.608-32.96 0-45.568z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 