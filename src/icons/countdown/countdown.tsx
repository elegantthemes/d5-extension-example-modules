import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './countdown.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/countdown'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M511.68 960c-189.632 0-359.040-102.72-448.32-265.6v105.6c0 17.664-14.336 32-32 32s-32-14.336-32-32v-192c0-17.664 14.336-32 32-32 0.064 0 0.128 0 0.128 0s0.128 0 0.128 0h192c17.664 0 32 14.336 32 32s-14.336 32-32 32h-115.712c74.112 156.032 228.928 256 403.776 256 247.168 0 448.32-201.024 448.32-448s-201.152-448-448.32-448c-211.136 0-395.712 149.632-438.784 355.84-3.648 17.28-20.992 28.736-37.888 24.768-17.344-3.648-28.352-20.608-24.768-37.952 49.344-235.584 260.224-406.656 501.44-406.656 282.496 0 512.32 229.696 512.32 512s-229.824 512-512.32 512zM480 768.256c-17.664 0-32-14.336-32-32v-320.256c0-17.664 14.336-32 32-32 0.448 0 256 0.256 256 0.256 17.664 0 32 14.336 32 32s-14.336 32-32 32h-224v288c0 17.664-14.336 32-32 32z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 