import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './caret-fill-two-down.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/caret-fill-two-down'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M546.112 891.712c-263.936 0-477.888-213.952-477.888-477.888s214.016-477.824 477.888-477.824 477.888 213.952 477.888 477.888-213.952 477.824-477.888 477.824zM780.096 358.784l-214.080-189.376c-6.4-6.4-14.784-9.472-23.168-9.344-8.448-0.064-16.832 2.944-23.232 9.344l-214.080 189.376c-12.544 12.544-12.544 32.96 0 45.504s32.96 12.544 45.504 0l191.744-169.6 191.744 169.6c12.544 12.544 32.96 12.544 45.504 0s12.672-32.896 0.064-45.504zM780.096 588.288l-214.080-189.376c-6.4-6.4-14.784-9.472-23.168-9.344-8.448-0.064-16.832 2.944-23.232 9.344l-214.080 189.376c-12.544 12.544-12.544 32.96 0 45.504 12.544 12.608 32.96 12.608 45.504 0.064l191.744-169.6 191.744 169.6c12.544 12.544 32.96 12.544 45.504 0s12.672-32.96 0.064-45.568z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 