import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './social_tumbleupon.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/social_tumbleupon'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M704 458.112l-68.032-24-59.968 24v-124.032c0-119.936 86.144-206.080 192-206.080s192 86.144 192 192v128h-128v-128c0-35.264-28.736-64-64-64s-64 28.736-64 78.016v124.096zM256 128c105.856 0 192 86.144 192 192v256c0 35.264 28.736 64 64 64 35.2 0 64-28.672 64-49.92v-62.080l60.032-24 67.968 24v62.080c0 91.84-86.144 177.92-192 177.92s-192-86.080-192-192v-256c0-35.264-28.736-64-64-64s-64 28.736-64 64v128h-128v-128c0-105.856 86.144-192 192-192z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 