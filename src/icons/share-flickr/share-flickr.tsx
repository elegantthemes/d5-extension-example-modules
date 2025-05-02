import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './share-flickr.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/share-flickr'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M670.314 523.044c-44.668 0-80.996-36.224-80.996-80.818 0-44.63 36.334-80.926 80.996-80.926 44.45 0 80.818 36.296 80.818 80.926 0 44.592-36.366 80.818-80.818 80.818zM848.978 864.282h-667.28c-55.274 0-99.976-43.836-99.976-97.956v-653.318c0-54.082 44.7-97.956 99.976-97.956h667.28c55.238 0 100.012 43.874 100.012 97.956v653.318c0 54.12-44.776 97.956-100.012 97.956zM352.278 318.152c-68.476 0-124.004 55.454-124.004 124.038 0 68.476 55.49 124.038 124.004 124.038 68.442 0 124.038-55.562 124.038-124.038 0-68.584-55.562-124.038-124.038-124.038zM670.314 318.152c-68.406 0-124.038 55.632-124.038 124.038 0 68.368 55.632 124.004 124.038 124.004 68.334 0 123.93-55.632 123.93-124.004-0.038-68.406-55.632-124.038-123.93-124.038z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 