import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_like_alt.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_like_alt'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M867.2 640c0 0-222.4 0-289.984 0v174.784c4.736 78.72-17.92 145.152-66.304 145.088-84.224-0.128-81.856-68.032-81.856-68.032-14.976-240.96-237.056-315.84-237.056-315.84v-512l29.504-3.968c242.112 0 96.832-124.032 494.656-124.032 302.080 0 307.84 265.856 307.84 448s-83.008 256-156.8 256zM64 0c35.328 0 64 28.672 64 64v510.016c0 35.328-28.672 64-64 64s-64-28.672-64-64v-510.016c0-35.328 28.672-64 64-64z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 