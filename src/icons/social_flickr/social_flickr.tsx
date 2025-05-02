import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './social_flickr.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/social_flickr'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M0 451.52c0-117.809 95.503-213.312 213.312-213.312s213.312 95.503 213.312 213.312c0 117.809-95.503 213.312-213.312 213.312s-213.312-95.503-213.312-213.312zM597.376 451.52c0-117.809 95.503-213.312 213.312-213.312s213.312 95.503 213.312 213.312c0 117.809-95.503 213.312-213.312 213.312s-213.312-95.503-213.312-213.312z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 