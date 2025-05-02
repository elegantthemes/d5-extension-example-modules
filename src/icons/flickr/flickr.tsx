import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './flickr.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/flickr'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M775.47 649.070c-110.936 0-204.536-86.668-204.536-204.536 0-110.936 86.668-204.536 204.536-204.536 110.936 0 204.536 86.668 204.536 204.536-6.934 114.402-97.068 204.536-204.536 204.536zM775.47 309.332c-72.802 0-131.736 58.934-131.736 131.736s58.934 131.736 131.736 131.736 131.736-58.934 131.736-131.736-58.934-131.736-131.736-131.736zM456.532 451.466c0-112.962-91.574-204.536-204.536-204.536s-204.536 91.576-204.536 204.536c0 112.962 91.574 204.536 204.536 204.536s204.536-91.574 204.536-204.536z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 