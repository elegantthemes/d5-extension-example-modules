import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './social_share_circle.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/social_share_circle'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M512 960c-282.752 0-512-229.248-512-512s229.248-512 512-512 512 229.248 512 512c0 282.816-229.248 512-512 512zM618.304 331.968c15.808 11.968 35.52 19.136 56.896 19.136 52.224 0 94.592-42.304 94.592-94.592 0-52.224-42.368-94.592-94.592-94.592s-94.528 42.304-94.528 94.592c0 0 0 0.064 0 0.064l-241.216 116.608c-14.784-9.536-32.32-15.168-51.2-15.168-52.224 0-94.592 42.368-94.592 94.592s42.368 94.592 94.592 94.592c22.272 0 42.688-7.744 58.88-20.608l233.472 112.768c0 0 0 0.064 0 0.064 0 52.224 42.368 94.592 94.528 94.592 52.224 0 94.592-42.304 94.592-94.592s-42.368-94.592-94.592-94.592c-21.376 0-41.024 7.168-56.896 19.136l-235.52-113.792c0-1.408-0.128-2.88-0.192-4.288l235.776-113.92z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 