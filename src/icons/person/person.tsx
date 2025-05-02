import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './person.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/person'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M695.472 753.784c0 98.234-85.236 183.472-183.472 183.472s-183.472-85.236-183.472-183.472 85.236-183.472 183.472-183.472 183.472 85.236 183.472 183.472zM512 509.156c-160.726 0-305.784-173.342-305.784-388.822s611.566-215.48 611.566 0-145.056 388.822-305.784 388.822z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 