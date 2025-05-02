import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './expand.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/expand'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M241.774 650.668v-472.894c0-37.292 30.266-67.556 67.556-67.556h472.894c37.292 0 67.556 30.266 67.556 67.556v472.894c0 37.292-30.266 67.556-67.556 67.556h-472.894c-37.292 0-67.556-30.266-67.556-67.556zM782.226 177.774h-472.894v472.894h472.894v-472.894zM410.666 380.444h101.334v-101.334c0-18.646 15.132-33.778 33.778-33.778s33.778 15.132 33.778 33.778v101.334h101.334c18.646 0 33.778 15.132 33.778 33.778s-15.132 33.778-33.778 33.778h-101.334v101.334c0 18.646-15.132 33.778-33.778 33.778s-33.778-15.132-33.778-33.778v-101.334h-101.334c-18.646 0-33.778-15.132-33.778-33.778s15.132-33.778 33.778-33.778z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 