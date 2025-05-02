import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './caret-fill-two-right.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/caret-fill-two-right'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M546.304 891.392c-263.808 0-477.696-213.888-477.696-477.696s213.888-477.696 477.696-477.696 477.696 213.888 477.696 477.696-213.888 477.696-477.696 477.696zM326.144 177.536c-12.544 12.544-12.544 32.96 0 45.504l169.6 191.744-169.6 191.744c-12.544 12.608-12.544 33.024 0 45.568s32.96 12.544 45.504 0l189.376-214.080c6.4-6.4 9.472-14.784 9.344-23.168 0.192-8.448-2.88-16.832-9.28-23.232l-189.376-214.080c-12.608-12.608-32.96-12.608-45.568 0zM790.592 391.616l-189.376-214.080c-12.544-12.544-32.96-12.544-45.504 0s-12.544 32.96 0 45.504l169.6 191.744-169.6 191.744c-12.544 12.544-12.544 32.96 0 45.504s32.96 12.544 45.504 0l189.376-214.080c6.4-6.4 9.472-14.784 9.344-23.168 0.064-8.384-2.944-16.768-9.344-23.168z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 