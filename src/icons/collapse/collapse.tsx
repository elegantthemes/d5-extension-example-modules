import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './collapse.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/collapse'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M241.774 650.668v-472.894c0-37.292 30.266-67.556 67.556-67.556h472.894c37.292 0 67.556 30.266 67.556 67.556v472.894c0 37.292-30.266 67.556-67.556 67.556h-472.894c-37.292 0-67.556-30.266-67.556-67.556zM782.226 177.774h-472.894v472.894h472.894v-472.894zM410.666 380.444h270.226c18.646 0 33.778 15.132 33.778 33.778s-15.132 33.778-33.778 33.778h-270.226c-18.646 0-33.778-15.132-33.778-33.778s15.132-33.778 33.778-33.778z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 