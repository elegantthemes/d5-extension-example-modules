import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './caret-line-left.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/caret-line-left'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M646.4 646.272c-12.48 12.48-32.768 12.48-45.248 0l-207.552-207.552c-6.272-6.272-9.344-14.464-9.344-22.72s3.072-16.448 9.344-22.72l207.552-207.552c12.48-12.48 32.768-12.48 45.248 0s12.48 32.768 0 45.248l-185.024 185.024 185.024 185.024c12.48 12.48 12.48 32.768 0 45.248zM544 896c-265.088 0-480-214.912-480-480s214.912-480 480-480 480 214.912 480 480-214.912 480-480 480zM544 0c-229.376 0-416 186.624-416 416s186.624 416 416 416 416-186.624 416-416-186.624-416-416-416z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 