import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './twitter.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/twitter'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M597.333 443.733l328.533-379.733h-76.8l-285.867 332.8-230.4-337.067h-260.267l345.6 503.467-345.6 401.067h76.8l302.933-349.867 238.933 349.867h264.533l-358.4-520.533zM490.667 567.467l-34.133-51.2-281.6-396.8h119.467l226.133 320 34.133 51.2 290.133 418.133h-119.467l-234.667-341.333z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 