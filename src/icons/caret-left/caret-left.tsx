import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './caret-left.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/caret-left'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M393.6 393.28l207.552-207.552c12.48-12.48 32.768-12.48 45.248 0s12.48 32.768 0 45.248l-185.024 185.024 185.024 185.024c12.48 12.48 12.48 32.768 0 45.248s-32.768 12.48-45.248 0l-207.552-207.552c-6.272-6.272-9.344-14.464-9.344-22.72s3.072-16.448 9.344-22.72z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 