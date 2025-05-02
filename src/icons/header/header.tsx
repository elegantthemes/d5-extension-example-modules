import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './header.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/header'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M960 960h-896c-35.328 0-64-28.672-64-64v-896c0-35.328 28.672-64 64-64h896c35.328 0 64 28.672 64 64v896c0 35.328-28.672 64-64 64zM960 0h-896v576h896v-576zM960 640h-896v256h896v-256zM160 768h704c17.664 0 32 14.336 32 32s-14.336 32-32 32h-704c-17.664 0-32-14.336-32-32s14.336-32 32-32z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 