import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_dislike.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_dislike'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M156.8 255.872c0 0 243.904 0 291.2 0v-166.016c-2.24-89.792 17.984-153.856 94.016-153.856 81.984 0 97.984 68.032 97.984 68.032 14.976 240.96 256 315.84 256 315.84v512l-93.504 3.968c-242.112 0-96.832 124.032-494.656 124.032-302.080 0-307.84-265.856-307.84-448s83.008-256 156.8-256zM307.84 895.872c202.112 0 244.928-32.192 282.752-60.608 47.744-35.904 93.696-63.36 208.768-63.36 0.128 0 0.256 0 0.384 0l32.256-1.344v-407.616c-79.808-37.312-238.4-137.088-255.296-346.752-2.496-5.12-10.752-16.192-34.688-16.192-5.696 0-13.056 0.64-16.192 3.84-2.624 2.688-15.488 19.264-13.824 86.016v230.016h-355.2c-46.144 0-92.8 65.92-92.8 192 0 249.024 38.848 384 243.84 384zM992 895.872c-17.664 0-32-14.336-32-32v-573.312c0-17.664 14.336-32 32-32s32 14.336 32 32v573.312c0 17.664-14.336 32-32 32z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 