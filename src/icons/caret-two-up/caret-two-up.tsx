import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './caret-two-up.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/caret-two-up'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M750.464 505.216l-214.080 189.376c-6.4 6.4-14.784 9.472-23.168 9.344-8.448 0.128-16.832-2.944-23.232-9.344l-214.080-189.376c-12.544-12.544-12.544-32.96 0-45.504s32.96-12.544 45.504 0l191.744 169.664 191.744-169.664c12.544-12.544 32.96-12.544 45.504 0 12.672 12.544 12.672 32.896 0.064 45.504zM536.384 465.088c-6.4 6.4-14.784 9.472-23.168 9.344-8.448 0.128-16.832-2.944-23.232-9.344l-214.080-189.376c-12.544-12.544-12.544-32.96 0-45.504s32.96-12.544 45.504 0l191.744 169.6 191.744-169.6c12.544-12.544 32.96-12.544 45.504 0s12.544 32.96 0 45.504l-214.016 189.376z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 