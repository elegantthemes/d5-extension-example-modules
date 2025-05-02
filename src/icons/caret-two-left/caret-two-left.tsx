import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './caret-two-left.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/caret-two-left'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M265.408 425.984l189.376-214.080c12.544-12.544 32.96-12.544 45.504 0s12.544 32.96 0 45.504l-169.6 191.744 169.6 191.744c12.544 12.544 12.544 32.96 0 45.504s-32.96 12.544-45.504 0l-189.376-214.016c-6.4-6.4-9.408-14.784-9.344-23.168-0.064-8.384 2.944-16.832 9.344-23.232zM729.856 686.464c-12.544 12.544-32.96 12.544-45.504 0l-189.44-214.080c-6.4-6.4-9.472-14.784-9.344-23.168-0.064-8.384 2.944-16.832 9.344-23.232l189.376-214.080c12.544-12.544 32.96-12.544 45.504 0s12.544 32.96 0 45.504l-169.6 191.744 169.6 191.744c12.608 12.608 12.608 33.024 0.064 45.568z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 